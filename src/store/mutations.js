export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
    if (user) {
      state.googleuser.displayName = user.ig
      state.googleuser.displayAvatar = user.Paa
    }
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}
