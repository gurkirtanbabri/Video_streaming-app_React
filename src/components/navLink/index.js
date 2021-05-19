import React from 'react';
import { Wrapper, NavlinkText, IconWrapper} from './styles'
import { Link } from 'react-router-dom'
const Navlink = ({text,children,active,linkto}) => {
  return (
    <Link to = {linkto}>  
      <Wrapper active={active}>
      <IconWrapper>{children}</IconWrapper>
          
        <NavlinkText>
            {text}
        </NavlinkText>
      </Wrapper>
    </Link>
  );
}
 
export default Navlink;