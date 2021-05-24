import React, { useState } from 'react';
import { Popup } from './styles'
const Modal = ({children,show}) => {
  return (
    <Popup show={show}>
      {children}
    </Popup>
  );
}
 
export default Modal;