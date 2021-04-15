import React from "react";
import styled from "styled-components";

const LoginInputBox = styled.input`
  border-radius: 4px;
  border: 2px solid black;
  width: 250px;
  height: 30px;

  padding-left: 10px;

  & + & {
    margin-top: 1rem;
  }
`;

function LoginInput({ inputType, password }) {
  return (
    <LoginInputBox
      placeholder={`${inputType}를 입력하세요.`}
      type={password ? "password" : "text"}
    />
  );
}

export default LoginInput;
