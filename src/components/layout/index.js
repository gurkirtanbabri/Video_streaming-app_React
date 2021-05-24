import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/index.js'
import Signup from '../signup/index'

const Layout= () => {
  const ModalState = useSelector((state) => state.ModalReducer.showModal)
  return (
  <>
  <Navbar />
  {ModalState === 'signup' && <Signup />}
  </>
  );
}
 
export default Layout;