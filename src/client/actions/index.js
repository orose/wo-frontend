export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function login(username, password) {
  let body = JSON.stringify({
    email: username,
    password: password
  });
  return dispatch => {
    dispatch(loginRequest());
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then(function(response) {
        dispatch(loginSuccess(response));
      })
      .catch(function(status) {
        dispatch(loginFailure(status));
      });
  };
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
    isFetching: true
  };
}

function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    data: json
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error,
    isFetching: false
  };
}
