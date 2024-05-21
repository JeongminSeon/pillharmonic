import React from "react";
import styled from "@emotion/styled";
import background from "../assets/backgroundImage.jpg";
import image from "../assets/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  z-index: -10;
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(
    96.22deg,
    #043caa -0.66%,
    rgba(4, 60, 170, 0.96) 44.05%,
    rgba(4, 60, 170, 0) 100%
  );
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Overview = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  font-style: italic;
`;

const Search = styled.form`
  display: flex;
  align-items: stretch;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 1rem; // 패딩으로 넓이 조정
  border: 2px solid #fff;
  border-radius: 10px 0 0 10px;
  font-size: 1rem; // 글꼴 크기
  height: 100%;
`;

const Img = styled.img`
  max-width: 50%;
  height: auto;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #1dc768;
  border-radius: 0 10px 10px 0;
  padding: 1rem 2rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  height: 54px;
`;

export default function Main() {
  return (
    <Wrapper>
      <Div>
        <Col>
          <Overview>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              We can get your Drug Information to You
            </h1>
            <h4 style={{ fontSize: "18px" }}>
              We have all the drugs you want to know for your health and what's
              more, we can get it you
            </h4>
            <Search>
              <Input placeholder='Search for drugs' />
              <Button>Find Drug</Button>
            </Search>
          </Overview>
          <Img src={image} />
        </Col>
      </Div>
    </Wrapper>
  );
}
