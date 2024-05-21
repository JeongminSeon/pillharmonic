import React from "react";
import styled from "@emotion/styled";
import { Link, useMatch } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

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
  position: relative;
`;

const Underline = styled(motion.span)`
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -2px;
  background-color: #8855ff;
  border-radius: 1px;
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
  const homeMatch = useMatch("/");
  const drugMatch = useMatch("/drugs");
  const communityMatch = useMatch("/community");

  return (
    <Nav>
      <Col>
        <Logo>PillHarmonic</Logo>
        <Items>
          <Item>
            <Link to='/'>
              Home{homeMatch && <Underline layoutId='underline' />}
            </Link>
          </Item>
          <Item>
            <Link to='/drugs'>
              Drugs{drugMatch && <Underline layoutId='underline' />}
            </Link>
          </Item>
          <Item>
            <Link to='/community'>
              Community{communityMatch && <Underline layoutId='underline' />}
            </Link>
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
