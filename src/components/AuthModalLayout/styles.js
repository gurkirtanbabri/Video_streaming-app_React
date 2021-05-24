import styled, { css, keyframes} from 'styled-components'
import {media} from '../../mediaQueries'
import ClearIcon from '@material-ui/icons/Clear';

const host = 'http://localhost:3000'
const Rotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Wrapper = styled.div`
  background:${({theme}) => theme.colors.navbarColor};
  height: 60%;
  width: 90%;
  display: flex;
  opacity: 1;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border: 1px solid ${({theme}) => theme.colors.navHoverColor};
  ${media.greaterThan('sm')`
    width: 60%;
  `}
  ${media.greaterThan('md')`
    width: 60%;
  `}
`
export const Image = styled.div`
  flex: 0.5;
  background-image: url(${({src}) => host+src});
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  overflow: hidden;
  border-bottom-left-radius: 50px;
  ${media.greaterThan('md')`
    display: block;
  `}
`
export const FormDiv = styled.div`
  flex: 1;
  ${media.greaterThan('md')`
    flex: 0.5;
  `}
`

export const CrossIcon =  styled(ClearIcon)`
cursor: pointer;
:hover {
 animation: ${Rotate} 0.5s linear 0s infinite alternate;
}
`

export const CrossDiv =  styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 0px;
`