import React from 'react';

import { H1 } from './styles'

const Header = ({children,...props}) => {
  return (<H1 { ...props}>{children}</H1>);
}
 
export default Header;