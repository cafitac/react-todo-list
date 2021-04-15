import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Main from "./pages/Main";
import TodoMain from "./pages/TodoMain";

const GlobalStyle = createGlobalStyle`
  body {
    background: #d0bfff;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/todo-list" component={TodoMain} />
        <Route
          render={() => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>
                <Link to="/">홈으로</Link>
              </p>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
