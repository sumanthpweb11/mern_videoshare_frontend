import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLight};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  outline: none;
  box-shadow: none;
  padding: 7px 15px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 500;
  background-color: #ffffff;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="search" />
          <BsSearch />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button> SIGN IN</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
