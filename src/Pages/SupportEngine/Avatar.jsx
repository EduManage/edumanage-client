import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = (props) => {
  const [hovered, sethovered] = useState(false);
  // console.log(props);
  return (
    <div style={props.style}>
      <h1
        className="text-amber-400 font-bold transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? "1" : "0" },
        }}
      >
        Hey It's Sadid!!!
      </h1>
      <div
        className="transition-3"
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
        onClick={() => props.onClick && props.onClick(true)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid #f9f0ff" : "4px solid #7a39e0" },
        }}
      ></div>
    </div>
  );
};

export default Avatar;
