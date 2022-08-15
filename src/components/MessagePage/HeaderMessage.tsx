import styled from "styled-components";
import Image from "../common/Image";

type HeaderMessageProps = {
  url: string;
  name: string;
};

const WrapperHeaderMessage = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  padding: 20px;
  & > div:last-child {
    font-size: var(--fs-lg);
    font-weight: var(--fw-bold);
    margin-left: 20px;
  }
`;

const HeaderMessage = ({ url, name }: HeaderMessageProps) => {
  return (
    <WrapperHeaderMessage>
      <Image url={url} name={name} />
      <div>{name}</div>
    </WrapperHeaderMessage>
  );
};

export default HeaderMessage;
