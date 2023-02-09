import React, { useState, useEffect } from "react";
import {
  ChatEngineWrapper,
  Socket,
  ChatFeed,
  ChatEngine,
} from "react-chat-engine";
import { styles } from "../styles";

const ChateEngine = (props) => {
  console.log(props);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });
  return (
    <div>
      <div
        className="tranition-5"
        style={{
          height: props.visible ? "100%" : "0%",
          zIndex: props.visible ? "100" : "0",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        {showChat && (
          <ChatEngineWrapper>
            <Socket
              projectID={process.env.REACT_APP_API_PROJECT}
              userName={props.user.email}
              userSecret={props.user.email}
            />
            <ChatFeed activeChat={props.chat.id} />
          </ChatEngineWrapper>
        )}
        {/* {showChat && (
          <ChatEngine
            projectID={process.env.REACT_APP_API_PROJECT}
            userName={props.user.email}
            userSecret={props.user.email}
          />
        )} */}
      </div>
    </div>
  );
};

export default ChateEngine;
