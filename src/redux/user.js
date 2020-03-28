import { createAction, handleActions } from 'redux-actions'
import Agent from '../lib/Agent'

const initialState = {
  username: '',
  loginLoading: false,
  loginStatus: '',
  loggedIn: false,
}
export default handleActions({
  RESET_USER_STATE: () => ({ ...initialState }),
  SET_USERNAME: (state, action) => ({ ...state, username: action.payload }),
  SET_LOGIN_LOADING: (state, action) => ({ ...state, loginLoading: action.payload }),
  SET_LOGIN_STATUS: (state, action) => ({ ...state, loginStatus: action.payload }),
  SET_LOGGED_IN: (state, action) => ({ ...state, loggedIn: action.payload }),
}, initialState)

export const resetUserState = createAction('RESET_USER_STATE')
export const setUsername = createAction('SET_USERNAME')
export const setLoginLoading = createAction('SET_LOGIN_LOADING')
export const setLoginStatus = createAction('SET_LOGIN_STATUS')
export const setLoggedIn = createAction('SET_LOGGED_IN')
export const doLogin = (email, password) => (dispatch) => {
  dispatch(setLoginLoading(true))
  Agent.login(email, password).then((result) => {
    if (result.ok && result.data) {
      if (result.data.token) Agent.init(result.data.token)
      dispatch(setUsername(email))
      dispatch(setLoginStatus(''))
      dispatch(setLoggedIn(true))
      // dispatch(loadClaimMeta())
      dispatch(setLoginLoading(false))
      // NavigationService.replace('Home')
    } else {
      dispatch(setLoginStatus(result.data))
    }
  })
}
export const logout = () => (dispatch) => {
  dispatch(resetUserState())
  // dispatch(resetClaimState())
  // NavigationService.replace('Login')
}
