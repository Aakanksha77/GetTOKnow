import React from "react";

export default function Sidebar({ chats, onNewChat, onSelectChat }) {
  return (
    <div style={{ width: "250px", borderRight: "1px solid #ddd", padding: "1rem" }}>
      <button onClick={onNewChat} style={{ marginBottom: "1rem" }}>
        + New Chat
      </button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {chats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            style={{ padding: "0.5rem", cursor: "pointer" }}
          >
            {chat.title || `Chat ${chat.id}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
