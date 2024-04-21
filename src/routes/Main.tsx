import React from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      96.22deg,
      #043caa -0.66%,
      rgba(4, 60, 170, 0.86) 44.05%,
      rgba(4, 60, 170, 0) 100%
    ),
    url(image.png);
`;
export default function Main() {
  return <Div>메인페이지</Div>;
}
