import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { messageAPI } from "../../api/api";

type MessageFieldProps = {
  textMessage: string;
  setTextMessage: React.Dispatch<React.SetStateAction<string>>;
  setNewMessageObj: React.Dispatch<React.SetStateAction<{}>>;
};

const WrapperField = styled.div`
  background-color: var(--color-ui);
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 90%;
  }

  & > div > div {
    width: 70%;
    margin: 0 auto;
    border: 1px solid red;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Field = styled.textarea.attrs({
  type: "text",
  placeholder: "Type your message",
})`
  width: 90%;
  outline: none;
  border: none;
  padding: 10px 0px;
  color: var(--color-text);
  background-color: var(--color-bg);
  resize: none;
  overflow-y: hidden;
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus::-moz-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }
  :focus:-ms-input-placeholder {
    color: transparent;
  }
`;

const MessageField = ({
  textMessage,
  setTextMessage,
  setNewMessageObj,
}: MessageFieldProps) => {
  let date = new Date();
  let myObj = {
    date:
      date.getMonth() +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes(),
    message: textMessage,
    idUser: 100,
  };

  return (
    <WrapperField>
      <div>
        <div>
          <Field
            onChange={(e) => setTextMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && textMessage != "") {
                setNewMessageObj(myObj);
                setTextMessage("");
              }
            }}
            value={textMessage}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{
              color: "var(--color-text)",
              opacity: "0.5",
              cursor: "pointer",
            }}
            onClick={() => {
              // setNewMessageObj(myObj);
              // setTextMessage("");
              messageAPI();
            }}
          />
        </div>
      </div>
    </WrapperField>
  );
};

export default MessageField;
