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
    <div style={{ display: "flex", padding: "1rem", borderTop: "1px solid #ddd" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type your message..."
        style={{ flex: 1, marginRight: "0.5rem", padding: "0.5rem" }}
        disabled={isStreaming}
      />
      <button onClick={handleSend} disabled={isStreaming}>
        Send
      </button>
      {isStreaming && (
        <button onClick={onStop} style={{ marginLeft: "0.5rem", backgroundColor: "red", color: "white" }}>
          Stop
        </button>
      )}
    </div>
  );
}
