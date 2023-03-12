import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  gap: 10px;
  display: flex;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10%;
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/k3Vfj-e1Ma4/maxresdefault.jpg"
          alt="Video"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s900-c-k-c0x00ffffff-no-rj"
            alt="Image"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Obsessed Coders</ChannelName>
            <Info>7M views . 2 months ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
