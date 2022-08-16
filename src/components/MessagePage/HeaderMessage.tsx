import styled from "styled-components";
import Image from "../common/Image";

type HeaderMessageProps = {
  url: string;
  name: string;
};

const WrapperHeaderMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: var(--color-ui);
  border-bottom: 1px solid var(--color-border);
  & > div:last-child {
    font-size: var(--fs-lg);
    font-weight: var(--fw-bold);
    margin-left: 20px;
  }
`;

const HeaderMessage = ({ url, name }: HeaderMessageProps) => {
  return (
    <WrapperHeaderMessage>
      <Image url={url} name={name} checked={true} />
      <div>{name}</div>
    </WrapperHeaderMessage>
  );
};

export default HeaderMessage;
