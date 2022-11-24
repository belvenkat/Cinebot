import React from "react";
import getFormattedText from "./getFormattedText";

const UserMessage = ({ text, user_name, user_age }) => {
  return (
    <div key={text}>
      <div className="mine messages">
        <div className="message last">
          {getFormattedText(text, user_name, user_age)}
        </div>
      </div>
    </div>
  );
};
export default UserMessage;
