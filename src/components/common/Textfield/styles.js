import styled, { css, keyframes} from 'styled-components'
import {media} from '../../../mediaQueries'

export const Header =  styled.h1`
  font-family: Monoton , cursive;
`
export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid  ${({theme}) => theme.colors.navHoverColor};
  outline: none;
  color: ${({theme}) => theme.colors.color};
  ::placeholder {
    color: ${({theme}) => theme.colors.color};
    text-transform: capitalize;
  }
  :focus {
    color: ${({theme}) => theme.colors.color}
  }
  height: 100%;
  width: 100%;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    color: ${({theme}) => theme.colors.color};
    background: transparent;
  }
  ${({error}) => error && css`
    border-bottom: 1px solid  red;
  `}
`

export const Wrapper =  styled.div`

  height: ${({height}) => height || '30px' };
  width: ${({width}) => width || '70%' };
  margin: ${({margin}) => margin || '10px' };
`

export const ErrorSpan = styled.span`
  color: red;
  font-size: 10px;
`