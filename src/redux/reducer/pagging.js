import { Types } from '../actionTypes'
const initialState = {
  ListData: [],
  getinit: false,
  getListSccess: false,
  getListFailure: false
}

export const ListReducer = function (state = initialState, {type, payload}) {
  switch (true) {
    case Types.GET_LIST_INIT : {
      return {
        ...state,
        getinit: true,
        getListSccess: false,
        getListFailure: false
      }
    }

    case Types.GET_LIST_SUCCESS: {
      return {
        ...state,
        getinit: false,
        getListSccess: true,
        getListFailure: false
      }
    }


    case Types.GET_LIST_FAIL: {
      return {
        ...state,
        getinit: false,
        getListSccess: false,
        getListFailure: true
      }
    }

    default: {
      return state
    }

  }
};  