import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "@emotion/styled";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
