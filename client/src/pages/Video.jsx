import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Comments from "../components/Comments";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  positon: sticky;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-itms: center;
  justify-content: space-between;
`;
const Info = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;

const Channeldiv = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelImg = styled.img`
  border-radius: 50%;
  height: 9%;
  width: 7%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelName = styled.span`
  font-weight:500;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 14px;
  // color: ${({ theme }) => theme.textSoft};
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: red;
  font-weight:500;
  padding: 15px 10px;
  border: 0.5px solid ${({ theme }) => theme.soft};
  color: white;
  cursor: pointer;
  border-radius: 15%;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/watch?v=k3Vfj-e1Ma4&t=5s"
            title="Youtube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,453 views. June 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              Like
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <LibraryAddIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channeldiv>
          <ChannelInfo>
            <ChannelImg
              src="https://yt3.googleusercontent.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s900-c-k-c0x00ffffff-no-rj"
              alt="Image.png"
            />
            <ChannelDetail>
              <ChannelName>Obsessed Coders</ChannelName>
              <ChannelCounter>500k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                inventore laudantium, necessitatibus repellat quasi excepturi
                dolore magnam fugit dolores sequi quis minima quam quibusdam
                culpa, blanditiis doloribus doloremque consequuntur consectetur.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channeldiv>
        <Hr/>
        <Comments>
          
        </Comments>
      </Content>
      <Recommendation>Recommended</Recommendation>
    </Container>
  );
};

export default Video;
