import React from "react";
import styled from "styled-components";
import { Aside } from "./components/Aside";
import { Route, Routes } from "react-router-dom";
import { CurrentChat } from "./components/CurrentChat";
import { users } from "./data/data";

const WrapperApp = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & > *:first-child {
    width: 25%;
  }
  & > *:last-child {
    width: 75%;
  }
`;

const App: React.FC = () => {
  return (
    <WrapperApp>
      <Aside users={users} />
      <div>
        <Routes>
          <Route path="/chat/:id" element={<CurrentChat />}></Route>
        </Routes>
      </div>
    </WrapperApp>
  );
};

export default App;
