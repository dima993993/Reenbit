import { useEffect, useState } from "react";
import styled from "styled-components";
import { messageAPI } from "../../api/api";
import { Iusers } from "../../types/types";
import HeaderMessage from "./HeaderMessage";
import Message from "./Message";
import MessageField from "./MessageField";

type MessegePageProps = {
  currentUser: Iusers;
};

const WrapperMassage = styled.div`
  max-height: 100%;

  .bodyMessage {
    height: 70vh;
    overflow-y: scroll;
    width: 90%;
    margin: 0 auto;
    padding: 25px;
  }
  & > div:last-child {
    position: sticky;
    width: 100%;
  }
`;

export const MessagePage = ({ currentUser }: MessegePageProps) => {
  const [textMessage, setTextMessage] = useState("");
  const [newMessageObj, setNewMessageObj] = useState<any>({});

  useEffect(() => {
    if (Object.keys(newMessageObj).length !== 0) {
      currentUser.message.push(newMessageObj);
      messageAPI((data) => {
        let newObj = {
          date: data.created_at,
          message: data.value,
          id: currentUser.id,
        };
        setTimeout(() => {
          setNewMessageObj(newObj);
        }, 5000);
      });
    }
  }, [newMessageObj]);

  return (
    <WrapperMassage>
      <HeaderMessage url={currentUser.url} name={currentUser.name} />
      <div className="bodyMessage">
        {currentUser.message.map((el, index) => (
          <Message
            key={index}
            message={el.message}
            date={el.date}
            url={currentUser.url}
            name={currentUser.name}
            idUser={el.idUser}
          />
        ))}
      </div>
      <MessageField
        textMessage={textMessage}
        setTextMessage={setTextMessage}
        setNewMessageObj={setNewMessageObj}
      />
    </WrapperMassage>
  );
};
