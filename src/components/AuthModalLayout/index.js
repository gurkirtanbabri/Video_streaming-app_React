import React from 'react'
import { useDispatch } from 'react-redux';
import{
    Wrapper,
    Image,
    FormDiv,
    CrossIcon,
    CrossDiv
  } from './styles'
  import { showModal } from '../../redux/actions/Modal'
const AuthModal = ({img, children}) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Image src={img} />
      <FormDiv>
        <CrossDiv>
          <CrossIcon onClick = {()=> dispatch(showModal(""))} />
        </CrossDiv>
        {children}
      </FormDiv>
    </Wrapper>
  );
}
 
export default AuthModal