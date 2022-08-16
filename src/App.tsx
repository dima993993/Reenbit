import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Aside } from "./components/Aside/Aside";
import { Route, Routes } from "react-router-dom";
import { MessagePage } from "./components/MessagePage/MessagePage";
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
  const [currentUser, setCurrentUser] = useState<any>({});

  // useEffect(() => {
  //   if (Object.keys(currentUser).length == 0) {
  //     setCurrentUser(users[0]);
  //   }
  // }, [currentUser]);

  return (
    <WrapperApp>
      <Aside users={users} setCurrentUser={setCurrentUser} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<MessagePage currentUser={users[0]} />}
          ></Route>
          <Route
            path="/dialog/:id"
            element={<MessagePage currentUser={currentUser} />}
          ></Route>
        </Routes>
      </div>
    </WrapperApp>
  );
};

export default App;
