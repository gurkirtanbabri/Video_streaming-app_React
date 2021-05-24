import styled, { css, keyframes} from 'styled-components'
import {media} from '../../../mediaQueries'

export const H1 =  styled.h1`
  border-bottom: 2px solid  ${({theme}) => theme.colors.navHoverColor};
  display: inline;
  padding-bottom: 10px;

`