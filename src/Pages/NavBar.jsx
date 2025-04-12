import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
background-color: #00244C;
height: 3rem;
`;

const LeftContainer = styled.div``;

const RightContainer = styled.div`
text-align: end;
`;

const NavLinks = styled(Link)`
color: #fff;
padding: 1rem;
margin-top: 1rem;
text-decoration: none;
position: relative;
font-family: sans-serif;
top: 1rem;
`;

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/about.html">About</NavLinks>
          <NavLinks to="/issues">Issues</NavLinks>
          <NavLinks to="/events">Events</NavLinks>
          <NavLinks to="/news-updates">News & Updates</NavLinks>
          <NavLinks to="/votinginfo">Voting Info</NavLinks>
          <NavLinks to="/contact">Contact</NavLinks>
          <NavLinks to="/donate">Donate</NavLinks>
        </RightContainer>
      </NavContainer>
    </>
  );
};
export default NavBar;