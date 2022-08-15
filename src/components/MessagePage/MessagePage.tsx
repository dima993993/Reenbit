import styled from "styled-components";
import HeaderMessage from "./HeaderMessage";
import { Iusers } from "../../types/types";

type MessegePageProps = {
  currentUser?: any;
};

const WrapperMassage = styled.div``;

export const MessagePage = ({ currentUser }: MessegePageProps) => {
  return (
    <WrapperMassage>
      <HeaderMessage url={currentUser.url} name={currentUser.name} />
    </WrapperMassage>
  );
};
