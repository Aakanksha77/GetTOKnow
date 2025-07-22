import React from "react";

export default function Sidebar({ chats, onNewChat, onSelectChat }) {
  return (
    <div className="w-[250px] border-r border-gray-300 p-4">
    <button
      onClick={onNewChat}
      className="mb-4 w-full rounded-sm bg-black p-2 text-white hover:bg-gray-800 transition"
    >
      New Chat
    </button>
    <ul className="list-none p-0">
      {chats.map((chat) => (
        <li
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded"
        >
          {chat.title || `Chat ${chat.id}`}
        </li>
      ))}
    </ul>
  </div>
  
  );
}
