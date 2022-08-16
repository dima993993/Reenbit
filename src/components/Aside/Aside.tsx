import styled from "styled-components";
import { Chats } from "./Chats";
import { HeaderAside } from "./HeaderAside";
import { Iusers } from "../../types/types";
import { useEffect, useState } from "react";

type AsideProps = {
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

export const Aside = ({ users, setCurrentUser }: AsideProps) => {
  const [textInput, setTextInput] = useState("");
  let filterUsers = users.filter((user) => {
    let nameUser = user.name.slice(0, textInput.length);
    return nameUser.toLowerCase() === textInput.toLowerCase();
  });
  return (
    <WrapperAside>
      <HeaderAside setTextInput={setTextInput} textInput={textInput} />
      <Chats users={filterUsers} setCurrentUser={setCurrentUser} />
    </WrapperAside>
  );
};
