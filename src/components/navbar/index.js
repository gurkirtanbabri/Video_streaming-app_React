import React,{ useState } from 'react';
import { useLocation } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import TheatersIcon from '@material-ui/icons/Theaters';
import MovieIcon from '@material-ui/icons/Movie';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import image from '../../images/logo.png'
import Navlink from '../navLink';
import {
  Nav,
  LogoWrapper,
  Navlinks,
  Logo,
  NavLinkWrapper,
  AccountWrapper,
  NavlinkText,
  MenuContainer,
  MenuWrapper,
  MenuItem,
  Burger
 } from './styles';

const Navbar = () => {
  const [state, setState] = useState({
    showNavbar: false,
    showAccountMenu: false
  })
  const { showNavbar, showAccountMenu } = state; 
  const location = useLocation();
  console.log(location)
  React.useEffect(() => {
    console.log(["pageview", location.pathname]);
  }, [location]);
  return (
  <Nav>
    <LogoWrapper
    >
      <Burger onClick= {() => {
        setState({...state,showNavbar: !showNavbar })
        }}
      />
      <Logo src = {image}/>
    </LogoWrapper>
    <NavLinkWrapper show = {showNavbar}>
  
      <Navlinks>
        <Navlink
          text="Home"
          active={location.pathname === '/'}
          linkto="/"
        >
          <HomeIcon />
        </Navlink>
        <Navlink
          text="Movies"
          active= {location.pathname  === '/movies'}
          linkto="/movies"
        >
          <MovieIcon />
        </Navlink>
        <Navlink
          text="shows"
          active= {location.pathname  === '/shows'}
          linkto="/shows"
        >
          <TheatersIcon />
        </Navlink>

      </Navlinks>

      <MenuContainer>
        <AccountWrapper 
          onClick={(e) => {
            e.preventDefault();
            setState({...state,showAccountMenu: !showAccountMenu })
          }}
        >
          <AccountCircleIcon />
          <NavlinkText>
            Account
          </NavlinkText>
        </AccountWrapper>
          <MenuWrapper
            show={showAccountMenu}
          >
            <MenuItem>Signin</MenuItem>
            <MenuItem>SIgnout</MenuItem>
            <MenuItem>Profile</MenuItem>
          </MenuWrapper>

    </MenuContainer>
    </NavLinkWrapper>
    
  </Nav>
  );
}
 
export default Navbar;