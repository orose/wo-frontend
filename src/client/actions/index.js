export const WORKORDERS_REQUEST = "WORKORDERS_REQUEST";
export const WORKORDERS_RECEIVE = "WORKORDERS_RECEIVE";
export const CUSTOMERS_REQUEST = "CUSTOMERS_REQUEST";
export const CUSTOMERS_RECEIVE = "CUSTOMERS_RECEIVE";
export const UPDATE_PAGE_TITLE = "UPDATE_PAGE_TITLE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function login(username, password) {
  let credentials = JSON.stringify({
    email: username,
    password: password
  });
  console.log("action", credentials);
  return dispatch => {
    dispatch(loginRequest());
    fetch("/api/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials
    })
      .then(function(response) {
        if (response.status === 200) {
          console.log("OK");
          return response.json();
        } else {
          console.error("Authentication failed");
        }
      })
      .then(function(response) {
        dispatch(loginSuccess(response));
        if (response !== undefined) console.log(response);
      })
      .catch(error => console.error(error));
    /*
    dispatch(requestWorkorders());
    return fetch("/api/workorders")
      .then(response => response.json())
      .then(json => dispatch(receiveWorkorders(json)));
      */
  };
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    token: json
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

function requestWorkorders() {
  return {
    type: WORKORDERS_REQUEST
  };
}

function receiveWorkorders(json) {
  return {
    type: WORKORDERS_RECEIVE,
    workorders: json,
    receivedAt: Date.now()
  };
}

export function fetchWorkorders() {
  return dispatch => {
    dispatch(requestWorkorders());
    return fetch("/api/workorders")
      .then(response => response.json())
      .then(json => dispatch(receiveWorkorders(json)));
  };
}

function requestCustomers() {
  return {
    type: CUSTOMERS_REQUEST
  };
}

function receiveCustomers(json) {
  return {
    type: CUSTOMERS_RECEIVE,
    customers: json,
    receivedAt: Date.now()
  };
}

export function fetchCustomers() {
  return dispatch => {
    dispatch(requestCustomers());
    return fetch("/api/customers")
      .then(response => response.json())
      .then(json => dispatch(receiveCustomers(json)));
  };
}

export function updatePageTitle(title) {
  return {
    type: UPDATE_PAGE_TITLE,
    title: title
  };
}
