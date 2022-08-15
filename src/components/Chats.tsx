import styled from "styled-components";
import { ChatUser } from "../common/ChatUser";
import { Iusers } from "../types/types";

type Props = {
  users: Iusers[];
};

const WrapperChats = styled.div`
  & > div:first-child {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const Chats = ({ users }: Props) => {
  return (
    <WrapperChats>
      <div>Chats</div>
      <div>
        {users.map((el) => (
          <ChatUser key={el.id} {...el} />
        ))}
      </div>
    </WrapperChats>
  );
};
