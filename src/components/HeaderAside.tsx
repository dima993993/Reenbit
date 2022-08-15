import styled from "styled-components";
import { Search } from "../common/Search";
import { Theme } from "../common/Theme";

const HeaderAsideWrapper = styled.div`
  padding: 20px;
  background-color: var(--color-ui);
  border-bottom: 1px solid var(--color-border);
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:first-child {
      width: 60px;
      img {
        max-width: 100%;
      }
    }
    & > div:last-child {
      cursor: pointer;
    }
  }
  & > div:last-child {
    margin-top: 20px;
  }
`;

export const HeaderAside: React.FC<{}> = () => {
  return (
    <HeaderAsideWrapper>
      <div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
          />
          <span></span>
        </div>
        <Theme />
      </div>
      <div>
        <Search />
      </div>
    </HeaderAsideWrapper>
  );
};