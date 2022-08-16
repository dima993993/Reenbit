import styled from "styled-components";
import { Iusers } from "../../types/types";
import HeaderMessage from "./HeaderMessage";
import Message from "./Message";
import MessageField from "./MessageField";

type MessegePageProps = {
  currentUser: Iusers;
};

const WrapperMassage = styled.div`
  position: relative;
  min-height: 100%;
  overflow-y: scroll;
  .bodyMessage {
    min-height: 100%;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 2000px) {
      width: 1200px;
    }
  }
  & > div:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

export const MessagePage = ({ currentUser }: MessegePageProps) => {
  return (
    <WrapperMassage>
      <HeaderMessage url={currentUser.url} name={currentUser.name} />
      <div className="bodyMessage">
        {currentUser.message.map((el) => (
          <Message
            key={el.idUser}
            message={el.message}
            date={el.date}
            url={currentUser.url}
            name={currentUser.name}
            idUser={el.idUser}
          />
        ))}
      </div>
      <MessageField />
    </WrapperMassage>
  );
};
