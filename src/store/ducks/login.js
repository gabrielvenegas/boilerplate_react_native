import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators: LoginCreators } = createActions({
  updateLogin: ['data'],
})

const INITIAL_STATE = {
  token: '',
}
const update = (state = INITIAL_STATE, { data }) => ({
  ...state,
  ...data,
})

export default createReducer(INITIAL_STATE, {
  [Types.UPDATE_LOGIN]: update,
})
