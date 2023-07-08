import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    //Query the messages from Firebase
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
      // Subscribe to updates from the messages collection in real-time
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      //Sort the messages collected from Firebase
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    //Unsubscribe from the updates when the component unmounts from the DOM
    return () => unsubscribe;
  }, []);

  return (
<main className="chat-box">
  <div className="messages-wrapper">
  {/* Render each message in the messages array */}
  {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
      {/* A reference element used for scrolling to the bottom */}
      <span ref={scroll}></span>
      
      {/* Component to send messages */}
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;