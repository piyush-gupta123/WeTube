import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 0.5px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  margin: 5px 0px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 12px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 10px 0px;
  width: 100%;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios
        .post("http://localhost:5000/auth/login", { name, password })
        .catch((err) => console.log(err));
        dispatch(loginSuccess())
      // console.log(res.data);
      // fetch("http://localhost:5000/auth/login/", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name: name,
      //     password: password,
      //   }),
      //   headers: {
      //     "content-type": "application/json; charset=UTF-8",
      //   },
      // }).then((res)=>res.json())
      // .then((res)=>console.log(res))
    } catch (err) {
      console.log(err.message);
      dispatch(loginFailure())
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <SubTitle>to Continue WeTube</SubTitle>
        <Input
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Hr />
        <Title>Sign Up</Title>
        <SubTitle>to Continue WeTube</SubTitle>
        <Input
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
