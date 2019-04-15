import {UPDATE_USER} from '../actions/users-actions'

export default function usersReducer (state = '', {type, payload}) {

  switch (type) {
    case UPDATE_USER:
      return payload.user
    default:
      return  state
  }
}
