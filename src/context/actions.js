import { types } from './types'

export const setLoading = dispatch => () => dispatch({ type: types.SET_LOADING })

export const resetLoading = dispatch => () => dispatch({ type: types.RESET_LOADING })

export const setList = dispatch => list => dispatch({ type: types.SET_LIST, payload: list })

export const setIsHovered = dispatch => () => dispatch({ type: types.SET_HOVERED })

export const resetHovered = dispatch => () => dispatch({ type: types.RESET_HOVERED })


export const setOrdering = dispatch => value =>
  dispatch({ type: types.SET_ORDERING, payload: value })

const getActions = dispatch => ({
  setLoading: setLoading(dispatch),
  resetLoading: resetLoading(dispatch),
  setList: setList(dispatch),
  setIsHovered :setIsHovered (dispatch),
  resetHovered: resetHovered(dispatch),
  setOrdering: setOrdering(dispatch),
})

export default getActions


