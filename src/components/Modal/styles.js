import styled, { css, keyframes} from 'styled-components'
import {media} from '../../mediaQueries'
import Modal from '@material-ui/core/Modal';

export const Popup = styled.div`
  z-index: 3;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({show}) => !show && css `
  display: none;
  `}
`
