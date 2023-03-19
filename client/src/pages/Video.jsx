// import React from "react";
// import styled from "styled-components";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ShareIcon from "@mui/icons-material/Share";
// import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
// import Comments from "../components/Comments";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import { dislike, fetchSuccess, like } from "../redux/videoSlice";
// import { format } from "timeago.js";
// import axios from "axios";
// import { subscription } from "../redux/userSlice";

// const Container = styled.div`
//   display: flex;
//   gap: 24px;
// `;

// const Content = styled.div`
//   flex: 5;
// `;

// const VideoWrapper = styled.div`
//   positon: sticky;
// `;
// const Title = styled.h1`
//   font-size: 18px;
//   font-weight: 500;
//   margin-top: 20px;
//   margin-bottom: 12px;
//   color: ${({ theme }) => theme.text};
// `;

// const Details = styled.div`
//   display: flex;
//   align-itms: center;
//   justify-content: space-between;
// `;
// const Info = styled.span`
//   font-size: 14px;
//   font-weight: 400;
//   margin-bottom: 20px;
//   color: ${({ theme }) => theme.textSoft};
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 20px;
//   color: ${({ theme }) => theme.text};
// `;

// const Button = styled.button`
//   border: none;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   border-radius: 30px;
//   cursor: pointer;
// `;

// const Hr = styled.hr`
//   border: 1px solid ${({ theme }) => theme.soft};
//   margin: 15px 0px;
// `;

// const Channeldiv = styled.div`
//   display: flex;
//   align-items: center;
//   // justify-content: space-between;
// `;

// const ChannelInfo = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ChannelImg = styled.img`
//   border-radius: 50%;
//   height: 9%;
//   width: 7%;
// `;

// const ChannelDetail = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: ${({ theme }) => theme.textSoft};
//   margin-left: 10px;
// `;

// const ChannelName = styled.span`
//   font-weight: 500;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text};
// `;

// const ChannelCounter = styled.span`
//   margin-top: 5px;
//   margin-bottom: 20px;
//   font-size: 14px;
//   // color: ${({ theme }) => theme.textSoft};
// `;

// const Description = styled.p`
//   font-size: 14px;
// `;

// const Subscribe = styled.button`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   background-color: red;
//   font-weight: 500;
//   padding: 15px 10px;
//   border: 0.5px solid ${({ theme }) => theme.soft};
//   color: white;
//   cursor: pointer;
//   border-radius: 15%;
// `;

// const VideoFrame = styled.video`
//   max-height: 720px;
//   width: 100%;
//   object-fit: cover;
// `;

// // const Recommendation = styled.div`
// //   flex: 2;
// // `;

// const Video = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const { currentVideo } = useSelector((state) => state.video);
//   const dispatch = useDispatch();
//   const path = useLocation().pathname.split("/")[2];

//   const [channel, setChannel] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const videoRes = await axios.get(
//           `http://localhost:5000/videos/find/${path}`
//         );
//         const channelRes = await axios.get(
//           `http://localhost:5000/user/get/${videoRes.data.userID}`
//         );
//         setChannel(channelRes.data);
//         dispatch(fetchSuccess(videoRes.data));
//       } catch (err) {}
//     };
//     fetchData();
//   }, [path, dispatch]);

//   const handleLike = async () => {
//     await axios.put(`/users/like/${currentVideo._id}`);
//     dispatch(like(currentUser._id));
//   };
//   const handleDislike = async () => {
//     await axios.put(`/users/dislike/${currentVideo._id}`);
//     dispatch(dislike(currentUser._id));
//   };

//   const handleSub = async () => {
//     currentUser.subscribedUsers.includes(channel._id)
//       ? await axios.put(`/users/unsub/${channel._id}`)
//       : await axios.put(`/users/sub/${channel._id}`);
//     dispatch(subscription(channel._id));
//   };
//   return (
//     <Container>
//       <Content>
//         <VideoWrapper>
//           <VideoFrame src={currentVideo.videoUrl} controls />
//         </VideoWrapper>
//         <Title>{currentVideo.title}</Title>
//         <Details>
//           <Info>
//             {currentVideo.views} views. {format(currentVideo.createdAt)}
//           </Info>
//           <Buttons>
//             <Button onClick={handleLike}>
//               {currentVideo.likes?.includes(currentUser?._id) ? (
//                 <ThumbUpIcon />
//               ) : (
//                 <ThumbUpOutlinedIcon />
//               )}{" "}
//               {currentVideo.likes?.length}
//             </Button>
//             <Button onClick={handleDislike}>
//               {currentVideo.dislikes?.includes(currentUser?._id) ? (
//                 <ThumbDownIcon />
//               ) : (
//                 <ThumbDownOffAltOutlinedIcon />
//               )}{" "}
//               Dislike
//             </Button>
//             <Button>
//               <ShareIcon />
//               Share
//             </Button>
//             <Button>
//               <LibraryAddIcon />
//               Save
//             </Button>
//           </Buttons>
//         </Details>
//         <Hr />
//         <Channeldiv>
//           <ChannelInfo>
//             <ChannelImg src={channel.img} alt="Image.png" />
//             <ChannelDetail>
//               <ChannelName>{channel.name}</ChannelName>
//               <ChannelCounter>{channel.subscribers} Subscribers</ChannelCounter>
//               <Description>{currentVideo.desc}</Description>
//             </ChannelDetail>
//           </ChannelInfo>
//           <Subscribe onClick={handleSub}>
//             {currentUser.subscribedUsers.includes(channel._id)
//               ? "SUBSCRIBED"
//               : "SUBSCRIBE"}
//           </Subscribe>
//         </Channeldiv>
//         <Hr />
//         <Comments></Comments>
//       </Content>
//       {/* <Recommendation>
//         <Card type="sm" />
//         <Card type="sm" />
//         <Card type="sm" />
//         <Card type="sm" />
//         <Card type="sm" />
//       </Recommendation> */}
//     </Container>
//   );
// };

// export default Video;
