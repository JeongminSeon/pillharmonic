import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "@emotion/styled";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
