import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const CommentDiv = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  // align-items: center;
  margin-left: 10px;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({theme})=> theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme})=> theme.textSoft};
  margin-left: 6px;
`


const Description = styled.p`
  font-size: 14px;
  color: ${({theme})=> theme.textSoft};
  
`;

const Comment = () => {
  return (
    <Container>
      <CommentDiv>
        <Avatar
          src="https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s900-c-k-c0x00ffffff-no-rj"
          alt="Image.png"
        />
        <Details>
          <Name>John Doe. <Date>3 days ago</Date></Name>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quidem
            quia porro saepe molestias corporis.
          </Description>
        </Details>
      </CommentDiv>
    </Container>
  );
};

export default Comment;
