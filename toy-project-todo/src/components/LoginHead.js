import React from "react";
import styled from "styled-components";

const LoginHeadBlock = styled.div`
  h2 {
    color: #5f3dc4;
  }
`;

function LoginHead() {
  return (
    <LoginHeadBlock>
      <h2>로그인</h2>
    </LoginHeadBlock>
  );
}

export default LoginHead;
