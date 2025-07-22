import React from "react";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto h-[80vh]">
    {messages.map((msg, idx) => (
      <div key={idx} className="mb-4">
        <strong className="text-black">{msg.role === "user" ? "You" : "GapShap"}:</strong> {msg.content}
      </div>
    ))}
  </div>
  
  );
}
