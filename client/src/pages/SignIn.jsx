import React from "react";
import styled from "styled-components";

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
    border: 0.5px solid ${({ theme }) => theme.soft} ;
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
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <SubTitle>to Continue WeTube</SubTitle>
        <Input placeholder="UserName" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <Hr/>
        <Title>Sign Up</Title>
        <SubTitle>to Continue WeTube</SubTitle>
        <Input placeholder="UserName" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
