import React from "react";
import styled from 'styled-components';
import Image from '../Assets/sampleImage.jpg'
import NavBar from "../Pages/NavBar";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Issues from "../Pages/Issues";
import Events from "../Pages/Events";
import NewsUpdates from "../Pages/NewsUpdates";
import Voting from "../Pages/Voting";
import Contact from "../Pages/Contact";
import Donate from "../Pages/Donate";

const Title = styled.div`
height: 35rem;
width: 100%; 
background-image: url('../Assets/sampleImage.jpg');
`;

const Layout = () => {
  return (
    <>
      <Title>
        <NavBar />
        <Routes>
        <Route exact path="/" component={<Home />}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/issues" component={<Issues />}></Route>
        <Route path="/events" component={<Events />}></Route>
        <Route path="/news-updates" component={<NewsUpdates />}></Route>
        <Route path="/votinginfo" component={<Voting />}></Route>
        <Route path="/contact" component={<Contact />}></Route>
        <Route path="/donate" component={<Donate />}></Route>
      </Routes>
        <img src={Image} alt="Girl in a jacket" width="100%" height="100%" />
      </Title>
    </>
  );
};

export default Layout;