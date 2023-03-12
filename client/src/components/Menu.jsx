import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bgLighter};
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-weight: 12px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Img = styled.img`
  height: 22px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 7px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  gap: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} alt="Logo" />
            WeTube
          </Logo>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Items>
            <HomeIcon /> Home
          </Items>
        </Link>

        <Items>
          <ExploreIcon /> Explore
        </Items>
        <Items>
          <SubscriptionsIcon /> Subscriptions
        </Items>
        <Hr />
        <Items>
          <VideoLibraryIcon /> Library
        </Items>
        <Items>
          <HistoryIcon /> History
        </Items>
        <Hr />
        <Login>
          Sign in to like videos, comments and subscribe
          <Button>
            <AccountCircleIcon /> SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>BEST OF WETUBE</Title>
        <Items>
          <LibraryMusicIcon /> Music
        </Items>
        <Items>
          <SportsBasketballIcon /> Sports
        </Items>
        <Items>
          <SportsEsportsIcon /> Gaming
        </Items>
        <Items>
          <MovieCreationIcon /> Movies
        </Items>
        <Items>
          <ArticleIcon /> News
        </Items>
        <Items>
          <LiveTvIcon /> Live
        </Items>
        <Hr />
        <Items>
          <SettingsIcon /> Settings
        </Items>
        <Items>
          <ReportIcon /> Report
        </Items>
        <Items>
          <HelpIcon /> Help
        </Items>
        <Items onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon /> {darkMode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Menu;
