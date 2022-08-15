import styled from "styled-components";
import { Chats } from "./Chats";
import { HeaderAside } from "./HeaderAside";
import { Iusers } from "../../types/types";

type Props = {
  users: Iusers[];
  setCurrentUser: React.Dispatch<React.SetStateAction<{}>>;
};
const WrapperAside = styled.div`
  border-right: 1px solid var(--color-border);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #b0b0b0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #707070;
  }
`;

export const Aside = ({ users, setCurrentUser }: Props) => {
  return (
    <WrapperAside>
      <HeaderAside />
      <Chats users={users} setCurrentUser={setCurrentUser} />
    </WrapperAside>
  );
};
