import styled, { css, keyframes} from 'styled-components'
import {media} from '../../../mediaQueries'

export const Button =  styled.button`
  color: white;
  height: ${({height}) => height || '40px' };
  width: ${({width}) => width || '70%' };
  margin: ${({margin}) => margin || '30px 0px' };
  background: ${({theme}) => theme.colors.navHoverColor};
  border-radius: 30px;
  border: none;
  cursor:pointer;
  font-size: 18px;
  transition: 0.5;
  :hover {
    transform: scale(1.1);
  }
`
