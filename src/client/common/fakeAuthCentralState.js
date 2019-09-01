const fakeAuthCentralState = {
  //sessionStorage.getItem('jwtToken');
  //isAuthenticated: false,
  isAuthenticated() {
    return sessionStorage["jwtToken"] !== undefined;
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

export default fakeAuthCentralState;
