import { createActions, createRedicer, createReducer } from 'reduxsauce'

const { Types, Creators: RegisterCreators } = createActions({
  registerUser: ['data'],
})

const INITIAL_STATE = {
  name: '',
  birthDate: '',
  email: '',
  phone: '',
  paymentPlan: '',
}

const register = (state = INITIAL_STATE, { data }) => ({
  ...state,
  ...data,
})

export default createReducer(INITIAL_STATE, {
  [Types.REGISTER_USER]: register,
})
