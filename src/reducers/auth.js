import { AUTH_LOGIN_SUCCESS } from '../actions/types'

const initialState = {
  name: '',
  username: '',
  token: '',
}

const authReducer = (state = initialState, action) => {
  // or have const action.payload and return name,  username, token
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      return {
        name: action.payload.username,
        username: action.payload.name,
        token: action.payload.token,
      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
