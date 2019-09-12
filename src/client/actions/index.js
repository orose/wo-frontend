export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const WORKORDERS_REQUEST = "WORKORDERS_REQUEST";
export const WORKORDERS_SUCCESS = "WORKORDERS_SUCCESS";
export const WORKORDERS_FAILURE = "WORKORDERS_FAILURE";

export const SINGLE_WORKORDER_REQUEST = "SINGLE_WORKORDER_REQUEST";
export const SINGLE_WORKORDER_SUCCESS = "SINGLE_WORKORDER_SUCCESS";
export const SINGLE_WORKORDER_FAILURE = "SINGLE_WORKORDER_FAILURE";

export const USERINFO_REQUEST = "USERINFO_REQUEST";
export const USERINFO_SUCCESS = "USERINFO_SUCCESS";
export const USERINFO_FAILURE = "USERINFO_FAILURE";

export function fetchUserinfo() {
  return dispatch => {
    dispatch(requestUserinfo());
    fetch("/api/userinfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage["jwtToken"]
      }
    })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then(function(response) {
        dispatch(fetchUserinfoSuccess(response));
      })
      .catch(function(status) {
        dispatch(fetchUserinfoFailure(status));
      });
  };
}

function requestUserinfo() {
  return {
    type: USERINFO_REQUEST,
    isFetching: true
  };
}

function fetchUserinfoSuccess(json) {
  return {
    type: USERINFO_SUCCESS,
    isFetching: false,
    data: json
  };
}

function fetchUserinfoFailure(json) {
  return {
    type: USERINFO_FAILURE,
    isFetching: false
  };
}

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
    type: SINGLE_WORKORDER_REQUEST,
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

export function fetchSingleWorkorder(id) {
  return dispatch => {
    dispatch(requestSingleWorkorder(id));
    fetch("/api/workorder/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage["jwtToken"]
      }
    })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then(function(response) {
        dispatch(fetchSingleWorkorderSuccess(response));
      })
      .catch(function(status) {
        dispatch(fetchSingleWorkorderFailure(status));
      });
  };
}

function requestSingleWorkorder(id) {
  return {
    type: SINGLE_WORKORDER_REQUEST,
    isFetching: true,
    id: id
  };
}

function fetchSingleWorkorderSuccess(json) {
  return {
    type: SINGLE_WORKORDER_SUCCESS,
    isFetching: false,
    data: json
  };
}

function fetchSingleWorkorderFailure(error) {
  return {
    type: SINGLE_WORKORDER_FAILURE,
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
        window.location.href = "/";
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
