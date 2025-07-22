"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { useState } from "react";
export default function Home() {
  const [chats, setChats] = useState([{ id: 1, title: "Chat 1" }]);
  const [currentChatId, setCurrentChatId] = useState(1);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to GapShap!" },
  ]);
  const [isStreaming, setIsStreaming] = useState(false);

  const handleNewChat = () => {
    const newId = chats.length + 1;
    setChats([...chats, { id: newId, title: `Chat ${newId}` }]);
    setCurrentChatId(newId);
    setMessages([{ role: "assistant", content: "New chat started." }]);
  };

  const handleSelectChat = (chatId) => {
    setCurrentChatId(chatId);
    // TODO: load messages for selected chat
    setMessages([{ role: "assistant", content: `Loaded chat ${chatId}` }]);
  };

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsStreaming(true);
    // TODO: call backend API to get streaming response
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: "This is a dummy reply." }]);
      setIsStreaming(false);
    }, 1000);
  };

  const handleStop = () => {
    // TODO: stop streaming API call
    setIsStreaming(false);
  };

  return (
    <div className="flex h-screen font-sans">
  <Sidebar chats={chats} onNewChat={handleNewChat} onSelectChat={handleSelectChat} />
  <div className="flex-1 flex flex-col">
    <ChatWindow messages={messages} />
    <MessageInput onSend={handleSend} onStop={handleStop} isStreaming={isStreaming} />
  </div>
</div>

  );

}
