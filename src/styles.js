import styled from 'styled-components'

export const VideoWrapper = styled.div`
  margin:0;
  padding:0;
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.color};
  height:100vh;
  width:100vw;
`