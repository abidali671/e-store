import React from "react";

interface MessageProps {
  isCurrentUser: boolean;
  message: string;
  senderName: string;
  time: string;
  imageUrl: string;
}

const Message: React.FC<MessageProps> = ({
  isCurrentUser,
  message,
  senderName,
  time,
  imageUrl,
}) => {
  const messageStyle = isCurrentUser
    ? "bg-[#CCE2D3] p-4 px-6 text-right shadow-md rounded-md text-lg text-gray-medium"
    : "bg-white p-4 px-6 text-center shadow-md rounded-md text-lg text-gray-medium";

  const containerStyle = isCurrentUser
    ? "flex ml-auto gap-x-5 flex-row-reverse"
    : "flex gap-x-5";

  return (
    <div className={containerStyle}>
      <img
        alt=""
        height={50}
        width={50}
        className="rounded-full object-cover h-10 w-10 self-end"
        src={imageUrl}
      />
      <div className="flex flex-col items-start gap-y-4">
        <p className={messageStyle}>{message}</p>
        <div
          className={
            isCurrentUser
              ? "flex ml-auto gap-x-5 flex-row-reverse"
              : "flex items-center gap-x-5"
          }
        >
          <h2 className="font-bold text-base text-gray-medium">{senderName}</h2>
          <p className="text-gray-medium">{time}</p>
        </div>
      </div>
    </div>
  );
};

interface ChatProps {
  messages: MessageProps[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="px-10 flex flex-col gap-y-5 h-[calc(100vh_-_192px)] scrollbar  scrollbar-w-3 scrollbar-thumb-warmGray-300 overflow-y-scroll">
      {messages.map((msg, index) => (
        <Message key={index} {...msg} />
      ))}
    </div>
  );
};

export default Chat;
