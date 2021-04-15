import React from "react";
import styled from "styled-components";
import LoginInput from "./inputs/LoginInput";
import LoginButton from "./buttons/LoginButton";

const LoginInputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //   border: solid 1px black;
  width: 350px;
  height: 200px;
`;

function Login() {
  return (
    <LoginInputBlock>
      <LoginInput inputType="ID" />
      <LoginInput inputType="Password" password />
      <LoginButton />
    </LoginInputBlock>
  );
}

export default Login;
