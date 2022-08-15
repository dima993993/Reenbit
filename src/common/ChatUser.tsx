import styled from "styled-components";
import { Iusers } from "../types/types";

const User = styled.div``;

export const ChatUser = ({ id, name, message, url }: Iusers) => {
  console.log(message);
  return (
    <User>
      <div>
        <div>
          <img src={url} alt={name} />
          <span>Label</span>
        </div>
        <div>
          <div>{name}</div>
          <div>{message[message.length - 1].message}</div>
        </div>
      </div>
      <div>{message[message.length - 1].date}</div>
    </User>
  );
};
