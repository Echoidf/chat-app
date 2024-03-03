const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton w-40 h-4 rounded"></div>
          <div className="skeleton w-40 h-4 rounded"></div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <div className="flex flex-col gap-1">
            <div className="skeleton w-40 h-4 rounded"></div>
          </div>
          <div className="skeleton w-10 h-10 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default MessageSkeleton;
