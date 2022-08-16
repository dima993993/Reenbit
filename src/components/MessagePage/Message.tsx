import styled from "styled-components";
import Image from "../common/Image";

type MessageProps = {
  message: string;
  url: string;
  name: string;
  date: string;
  idUser: number;
};

const MessageWrapper = styled.div`
  padding: 20px 0;
  overflow: hidden;
  & > div {
    display: flex;
    align-items: center;
  }
  .message {
    padding: 8px 15px;
    border-radius: 20px;
  }
  .date {
    margin: 10px 0 0 10px;
    font-size: 12px;
    opacity: 0.5;
  }
`;
const UserMessage = styled.div`
  & > div:last-child {
    margin-left: 20px;
  }
  .message {
    background-color: var(--color-user-message);
    color: var(--color-text-user-message);
  }
`;
const MyMessage = styled.div`
  justify-content: end;
  .message {
    background-color: var(--color-my-message);
    color: var(--color-text-my-message);
  }
`;

const Message = ({ message, url, name, date, idUser }: MessageProps) => {
  return (
    <MessageWrapper>
      {idUser != 100 ? (
        <UserMessage>
          <div>
            <Image url={url} name={name} />
          </div>
          <div>
            <div className="message">{message}</div>
            <div className="date">{date}</div>
          </div>
        </UserMessage>
      ) : (
        <MyMessage>
          <div>
            <div className="message">{message}</div>
            <div className="date">{date}</div>
          </div>
        </MyMessage>
      )}
    </MessageWrapper>
  );
};

export default Message;
