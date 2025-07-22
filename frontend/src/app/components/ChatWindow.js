import React from "react";

export default function ChatWindow({ messages }) {
  return (
    <div style={{ flex: 1, padding: "1rem", overflowY: "auto", height: "80vh" }}>
      {messages.map((msg, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <strong>{msg.role === "user" ? "You" : "GapShap"}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}
