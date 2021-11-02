//import { equals } from 'ramda';
import { types } from './types';

export const reducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case types.SET_LOADING:
      if (state.loading) {
        return state;
      }

      return {
        ...state,
        loading: true,
      }
    case types.RESET_LOADING:
      if (!state.loading) {
        return state;
      }

      return {
        ...state,
        loading: false,
      }
    case types.SET_LIST:
      return {
        ...state,
        // count: payload.count,
        checkList: payload,
        // loading: false,
      }
    case types.SET_HOVERED:
      if (state.isHovered) {
        return state;
      }

      return {
        ...state,
        isHovered: true,
      }
      case types.RESET_HOVERED:
        if (!state.isHovered) {
          return state;
        }
  
        return {
          ...state,
          isHovered: false,
        }
    case types.SET_ORDERING:
      if (state.ordering === payload) {
        return {
          ...state,
          loading: true,
        //   ordering: `-${payload}`,
        }
      }
      return {
        ...state,
        loading: true,
        // ordering: payload,
      }
    default:
      return state;
  }
}

export const initialState = {
  checkList: [],
  filters: [],
//   count: 0,
//   ordering: undefined,
  loading: true,
  isHovered: false,
}
