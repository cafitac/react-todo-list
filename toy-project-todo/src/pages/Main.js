import React from "react";
import MainTemplate from "../components/MainTemplate";
import Login from "../components/Login";
import LoginHead from "../components/LoginHead";

function Main() {
  return (
    <MainTemplate>
      <LoginHead />
      <Login />
    </MainTemplate>
  );
}

export default Main;
