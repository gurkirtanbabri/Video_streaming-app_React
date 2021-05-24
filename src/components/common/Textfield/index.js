import { Input, Wrapper, ErrorSpan} from './styles'
import React from 'react'
const TextField = ({
  height,
  width,
  margin,
  error,
  ...props
}) => {
  return (    
    <Wrapper
      height={height}
      width={width}
      margin={margin}
      >
      <Input {...props} />
      {error && (
        <ErrorSpan>
          {error}
        </ErrorSpan>
      )}
    </Wrapper>
  );
}
 
export default TextField;