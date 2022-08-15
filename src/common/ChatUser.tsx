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
          <div>1234</div>
        </div>
      </div>
      <div>Date</div>
    </User>
  );
};
