import React, { useState } from "react";
import { styles } from "../styles";
import ChateEngine from "./ChateEngine";
import EmailForm from "./EmailForm";

const SupportWindow = (props) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);
  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <EmailForm
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
        visible={user === null || chat === null}
      />
      <ChateEngine
        visible={user !== null && chat !== null}
        chat={chat}
        user={user}
      />
    </div>
  );
};

export default SupportWindow;