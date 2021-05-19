import { Types } from '../actionTypes'
export const getList = (payload) => ({
  type: Types.GET_LIST_INIT,
  payload
})

export const getListSuccess = (payload) => ({
  type: Types.GET_LIST_FAIL,
  payload
})

export const getListFail = (payload) => ({
  type: Types.GET_LIST_SUCCESS,
  payload
})