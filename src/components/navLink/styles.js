import styled, { css, keyframes} from 'styled-components'
import { media} from '../../mediaQueries'

const Bounce = keyframes`
  from {margin-bottom: 0px;}
  to {margin-bottom: 10px}
`

export const Wrapper  = styled.div`
  margin-top: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  transition: 0.2s;
  text-decoration: none;
    :hover {
    background: ${({theme}) => theme.colors.navHoverColor};
    color: ${({theme}) => theme.colors.color};
  }
  ${({active}) => active && css`
    background: ${({theme}) => theme.colors.navHoverColor};
    color: ${({theme}) => theme.colors.color};
  ` }

  ${media.greaterThan('md')`
    margin-top: 0px;
    flex-direction: column;
    height:60px;
    width: 60px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    :hover {
    background: ${({theme}) => theme.colors.navbarColor};
    color: ${({theme}) => theme.colors.navHoverColor};
  }
  ${({active}) => active && css`
    background: ${({theme}) => theme.colors.navbarColor};
    color: ${({theme}) => theme.colors.navHoverColor};
  ` }
  `}
`

export const IconWrapper = styled.div`
      ${media.greaterThan('md')`
    margin: 0px;
    overflow: hidden;

	${Wrapper}:hover & {
    animation: ${Bounce} 0.5s linear 0s infinite alternate;
	}
  `}
`


export const NavlinkText = styled.p`
    margin-left: 40px;
    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.color};
    }
    ${media.greaterThan('md')`
    margin: 0px;
  `}
`