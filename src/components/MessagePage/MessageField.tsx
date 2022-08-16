import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface MessageFieldProps {}

const WrapperField = styled.div`
  background-color: var(--color-ui);
  width: 100%;
  padding: 20px 0;
  & > div {
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
const Field = styled.input.attrs({
  type: "text",
  placeholder: "Type your message",
})`
  width: 90%;
  outline: none;
  border: none;
  padding: 15px 0;
  color: var(--color-text);
  background-color: var(--color-bg);
  border-radius: 30px;
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

const MessageField = () => {
  return (
    <WrapperField>
      <div>
        <Field />
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{
            color: "var(--color-text)",
            opacity: "0.5",
            cursor: "pointer",
          }}
        />
      </div>
    </WrapperField>
  );
};

export default MessageField;
