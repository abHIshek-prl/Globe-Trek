import React, { useState } from 'react';
import Navbar from '../../Components/User-Components/Navbar';
import { FaPaperPlane, FaSearch } from "react-icons/fa";

const users = [
  { id: 1, name: "Evanka Gardner", message: "Okay Thanks :)", time: "2 Min", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Kelly Doe", message: "Where is the nearest place...", time: "35 Min", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Patrick Smith", message: "Ok that sounds perfect 👍", time: "25 Min", avatar: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const initialMessages = {
  1: [
    { text: "Hello Evanka, tomorrow morning, we have a project demo.", sender: "other" },
    { text: "Hello Ma’am, I'm just putting together a zip containing the proposal and all of the work that I have done so far.", sender: "me" },
  ],
  2: [
    { text: "Hey Kelly, any updates on our travel itinerary?", sender: "me" },
    { text: "Yes, I'm finalizing it now!", sender: "other" },
  ],
  3: [
    { text: "Patrick, did you check the new destinations?", sender: "me" },
    { text: "Yes! Looks amazing.", sender: "other" },
  ]
};

function Chat() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState(initialMessages[selectedUser.id] || []);
  const [newMessage, setNewMessage] = useState("");

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages(initialMessages[user.id] || []);
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedMessages = [...messages, { text: newMessage, sender: "me" }];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 bg-gray-100">
        {/* Sidebar */}
        <div className="w-full p-4 bg-white border-r md:w-1/4">
          <div className="flex items-center p-2 mb-4 bg-gray-200 rounded-lg">
            <FaSearch className="ml-2 text-gray-500" />
            <input type="text" placeholder="Search" className="w-full px-2 bg-transparent outline-none" />
          </div>
          <div>
            {users.map((user) => (
              <div
                key={user.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200 ${selectedUser.id === user.id ? 'bg-gray-300' : ''}`}
                onClick={() => handleUserClick(user)}
              >
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold">{user.name}</h4>
                  <p className="w-32 text-sm text-gray-500 truncate">{user.message}</p>
                </div>
                <span className="text-xs text-gray-400">{user.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="flex flex-col w-full md:w-3/4">
          <div className="flex items-center gap-3 p-4 bg-white border-b shadow-md">
            <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{selectedUser.name}</h3>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-lg max-w-xs ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-white border"}`}>{msg.text}</div>
              </div>
            ))}
          </div>
          
          {/* Message Input */}
          <div className="flex items-center gap-2 p-4 bg-white border-t">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write something..."
              className="flex-1 p-2 border rounded-lg outline-none"
            />
            <button onClick={sendMessage} className="p-2 text-white bg-blue-500 rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
