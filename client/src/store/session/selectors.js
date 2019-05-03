const isAuthenticated = state => state.session.isAuthenticated;

const getToken = state => state.session.token;

const getUser = state => state.session.user;

export default { isAuthenticated, getToken, getUser };
