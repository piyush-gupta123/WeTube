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
  align-items: center;
`;

const Title = styled.title`
  font-weight: 400;
`;

const Description = styled.p``;

const Comment = () => {
  return (
    <Container>
      <CommentDiv>
        <Avatar
          src="https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s900-c-k-c0x00ffffff-no-rj"
          alt="Image.png"
        />
        <Details>
          <Title></Title>
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
