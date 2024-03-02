import React from 'react'
import Conversation from './Conversation.jsx'

const ConversationList = () => {
  return (
    <div className='flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default ConversationList