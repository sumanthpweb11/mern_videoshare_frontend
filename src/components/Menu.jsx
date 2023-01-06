import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLight};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7px 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 1px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  font-size: 11px;
  margin-top: 50px;
`;

const Button = styled.button`
  margin-top: 7px;
  outline: none;
  box-shadow: none;
  padding: 7px 15px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 500;
  background-color: #ffffff;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Title>VIDEO SHARE</Title>
        <Hr />
        <Item>
          <AiOutlineHome />
          Home
        </Item>
        <Item>
          <MdOutlineSubscriptions />
          Subscriptions
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <BsLightbulb />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Hr />
        <Login>
          Sign in to Like, Comment & Subscribe
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>SIGN IN</Button>
          </Link>
        </Login>
        <Hr />
      </Wrapper>
    </Container>
  );
};

export default Menu;
