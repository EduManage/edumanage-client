import React from "react";
import { ChatEngine } from "react-chat-engine";
const SupportAdmin = () => {
  return (
    <div className="pt-20">
      <ChatEngine
        publicKey={process.env.REACT_APP_API_PROJECT}
        userName="MD Sadid"
        userSecret="sadidsadid"
        height="calc(100vh - 12px)"
      />
    </div>
  );
};

export default SupportAdmin;
