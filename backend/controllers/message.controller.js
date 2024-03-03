import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import {io, getReceiverSocketId} from "../socket/socket.js"

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // await newMessage.save();
    // await conversation.save();

    // this will run in parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Failed to send message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if(!conversation || conversation.messages.length === 0) {
      return res.status(200).json({ messages: []});
    }

    res.status(200).json(conversation?.messages? conversation.messages : []);
  } catch (error) {
    console.log("Error in Message controller: ", error.message);
    res.status(500).json({ message: "Failed to get messages" });
  }
};
