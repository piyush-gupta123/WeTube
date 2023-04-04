import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  padding: 5px;
  position: absolute; 
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  aign-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  background-color: transparent;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  gap: 5px;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search.."></Input>
          <SearchIcon />
        </Search>
        {currentUser ? (
          "User"
        ) : (
          <Link
            to="signIn"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button>
              <AccountCircleIcon /> SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
