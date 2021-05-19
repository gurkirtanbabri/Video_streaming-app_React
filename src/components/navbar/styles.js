import styled, { keyframes, css } from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

import { media} from '../../mediaQueries'
const navAnimation = keyframes`
  from {width: 0%;}
  to {width: 60%}
`

const reverseNavAnimation = keyframes`
  from {width: 60%;}
  to {width: 0%}
`


const MenuAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1}
`

const ReverseAnimation = keyframes`
  from {opacity: 1;}
  to {opacity: 0}
`

export const Nav = styled.nav`
  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${media.greaterThan('md')`
    height: 65px;
  flex-direction: row;
  justify-content: space-between;
  background: ${({theme}) => theme.colors.navbarColor};
 `};
`
export const LogoWrapper = styled.div`
  min-height: 50px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  font-family: Lobster, cursive;
  background: ${({theme}) => theme.colors.navbarColor};

`
export const NavLinkWrapper = styled.div`
  height: calc(100vh - 50px );
  width: 60%;
  background: ${({theme}) => theme.colors.navbarColor};
  animation-name: ${navAnimation};
  animation-duration: 0.5s;
  overflow: hidden;
  ${({show}) => !show && css`
    animation-name: ${reverseNavAnimation};
    width: 0%;
  ` }

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.greaterThan('md')`
  flex-direction: row;
  height: 65px;
  padding: 0px 30px;
  `}

  ${media.greaterThan('md')`
  overflow: visible;
  width: 60%;
`}
`
export const Navlinks = styled.div`
    ${media.greaterThan('md')`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
  `}
`
export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`

export const Burger = styled(MenuIcon)`
  cursor:pointer;
  ${media.greaterThan('md')`
    display: none !important;
  `}
`


export const AccountWrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 32px;
    border-radius: 30px;
    animation-duration: 0.5s;
    margin-bottom: 20px;
    :hover{
    cursor: pointer;
    color: ${({theme}) => theme.colors.navHoverColor};
    }

    ${({ active,theme }) => active && (css`
    background: ${({theme}) => theme.colors.navHoverColor};
    color:  ${({theme}) => theme.colors.color};
    `)}
`

export const NavlinkText = styled.p`
    margin-left: 20px;
    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.color};
    }
`

export const MenuContainer = styled.div`
  position: relative;
`

export const MenuWrapper = styled.div`
  background: ${({theme}) => theme.colors.color};
  color: ${({theme}) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: absolute;
  width: 93%;
  top: -230%;
  border-radius: 11px;
  animation-duration: 0.8;
  animation-name: ${MenuAnimation};
  ::after {
  content: " ";
  position: absolute;
  right: calc(50% - 10px);
  bottom: -10px;
  border-top: 10px solid white;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: none;
  ${media.greaterThan('md')`
  transform: rotate(180deg);
    top: -9px;
    bottom: auto;
  `}
  }

  ${({show}) => !show && css`
    animation-name: ${ReverseAnimation};
    opacity: 0;
    display: none;
  ` }

  ${media.greaterThan('md')`
    flex-direction: column-reverse;
    top: 50px;
`}
`


export const MenuItem = styled.p`
  display: block;
  cursor: pointer;
`

