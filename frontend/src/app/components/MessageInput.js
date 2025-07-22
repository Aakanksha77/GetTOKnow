import React, { useState } from "react";

export default function MessageInput({ onSend, onStop, isStreaming }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-300">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSend()}
      placeholder="Type your message..."
      disabled={isStreaming}
      className="flex-1 mr-2 p-2 border rounded"
    />
    <button
      onClick={handleSend}
      disabled={isStreaming}
      className="px-4 py-2 bg-black text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Send
    </button>
    {isStreaming && (
      <button
        onClick={onStop}
        className="ml-2 px-4 py-2 bg-red-600 text-white rounded"
      >
        Stop
      </button>
    )}
  </div>
  
  );
}
