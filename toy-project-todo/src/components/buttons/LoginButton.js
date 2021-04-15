import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginButtonBox = styled.button`
  background: #adb5bd;
  border-radius: 4px;
  border: 1px solid black;
  width: 266px;
  height: 36px;

  margin-top: 1.2rem;

  &:hover {
    background: #7048e8;
    color: white;
    border: 2px solid #4263eb;
  }
`;

function LoginButton() {
  return (
    <Link to="/todo-list">
      <LoginButtonBox>로그인</LoginButtonBox>
    </Link>
  );
}

export default LoginButton;
