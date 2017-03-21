import { FETCH_LIST } from './actions'

const initialState = {
  all: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_LIST}_FULFILLED`:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}

export default reducer

export const getAllStatus = (state) => state.data.status.all
