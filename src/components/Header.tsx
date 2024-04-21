import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px 40px;
  position: fixed;
  top: 0;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

//Logo 추가 ?
const Logo = styled.span`
  width: 95px;
  line-height: 25px;
  font-size: 24px;
  margin-right: 50px;
  font-weight: bold;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  line-height: 25px;
  font-weight: bold;
`;

const Button = styled.button`
  border-radius: 15px;
  border: none;
  background-color: #1dc768;
  padding: 10px;
  color: white;
  width: 70px;
  cursor: pointer;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Nav>
      <Col>
        <Logo>PillHarmonic</Logo>
        <Items>
          <Item>
            <Link to='/'>Home</Link>
          </Item>
          <Item>
            <Link to='/'>Drugs</Link>
          </Item>
          <Item>
            <Link to='/'>Community</Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
      </Col>
    </Nav>
  );
}
