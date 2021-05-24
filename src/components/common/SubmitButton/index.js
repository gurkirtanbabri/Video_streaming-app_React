import React from 'react';

import { Button } from './styles'

const SubmitButton = ({text, lodaer, ...props}) => {
  return (<Button {...props} type="button">{ lodaer || text }</Button>);
}
 
export default SubmitButton;