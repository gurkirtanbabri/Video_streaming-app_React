import { generateMedia } from 'styled-media-query'

// example media queries
export const XS = 480
export const SM = 576
export const MD = 768
export const LG = 992
export const XL = 1366
export const XXL = 1600

export const media = generateMedia({
  xs: `${XS}px`,
  sm: `${SM}px`,
  md: `${MD}px`,
  lg: `${LG}px`,
  xl: `${XL}px`,
  xxl: `${XXL}px`
})