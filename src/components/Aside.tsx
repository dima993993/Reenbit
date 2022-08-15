import styled from "styled-components";
import { Chats } from "./Chats";
import { HeaderAside } from "./HeaderAside";
import { Iusers } from "./../types/types";

type Props = {
  users: Iusers[];
};
const WrapperAside = styled.div`
  border-right: 1px solid var(--color-border);
  overflow-y: scroll;
`;

export const Aside = ({ users }: Props) => {
  return (
    <WrapperAside>
      <HeaderAside />
      <Chats users={users} />
    </WrapperAside>
  );
};
