export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const WORKORDERS_REQUEST = "WORKORDERS_REQUEST";
export const WORKORDERS_SUCCESS = "WORKORDERS_SUCCESS";
export const WORKORDERS_FAILURE = "WORKORDERS_FAILURE";

export function fetchWorkorders(offset, limit) {
  return dispatch => {
    dispatch(requestWorkorders(offset, limit));
    fetch("/api/workorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage["jwtToken"]
      }
    })
      .then(function(response) {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then(function(response) {
        dispatch(fetchWorkordersSuccess(response));
      })
      .catch(function(status) {
        dispatch(fetchWorkordersFailure(status));
      });
  };
}

function requestWorkorders(offset, limit) {
  return {
    type: WORKORDERS_REQUEST,
    isFetching: true,
    offset: offset,
    limit: limit
  };
}

function fetchWorkordersSuccess(json) {
  return {
    type: WORKORDERS_SUCCESS,
    isFetching: false,
    data: json
  };
}

function fetchWorkordersFailure(error) {
  return {
    type: WORKORDERS_FAILURE,
    error: error,
    isFetching: false
  };
}

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
