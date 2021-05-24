import { Types } from '../actionTypes'
const initialState = {
  showModal: 'signup'
}

export const ModalReducer = function (state = initialState, {type, payload}) {
  console.log(Types.SHOW_MODAL,type)
  switch (type  ) {
    case Types.SHOW_MODAL: {
      const newState =  {
        ...state,
        showModal: payload
      }
      console.log(newState)
      return newState
    }

    default: {
      return {
        ...state
      }
    }
}
}