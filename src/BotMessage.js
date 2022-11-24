import React from "react";
import { Avatar, Image } from "antd";
import getFormattedText from "./getFormattedText";

const BotMessage = ({ text, user_name, user_age }) => {
  return (
    <div
      key={text}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "flex-end",
          zIndex: 10,
          margin: 5,
        }}
      >
        <Avatar
          src={
            <Image
              src="https://raw.githubusercontent.com/belvenkat/Cinebot/main/cinebot.jpg"
              style={{ width: 32 }}
            />
          }
        />
      </div>
      <div className="yours messages">
        <div className="message last">
          <div>{getFormattedText(text, user_name, user_age)}</div>
        </div>
      </div>
    </div>
  );
};

export default BotMessage;
