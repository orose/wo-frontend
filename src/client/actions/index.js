export const WORKORDERS_REQUEST = 'WORKORDERS_REQUEST';
export const WORKORDERS_RECEIVE = 'WORKORDERS_RECEIVE';
export const CUSTOMERS_REQUEST = 'CUSTOMERS_REQUEST';
export const CUSTOMERS_RECEIVE = 'CUSTOMERS_RECEIVE';

function requestWorkorders() {
  return {
    type: WORKORDERS_REQUEST,
  };
}

function receiveWorkorders(json) {
  return {
    type: WORKORDERS_RECEIVE,
    workorders: json,
    receivedAt: Date.now(),
  };
}

export function fetchWorkorders() {
  return dispatch => {
    dispatch(requestWorkorders());
    return fetch('/api/workorders')
      .then(response => response.json())
      .then(json => dispatch(receiveWorkorders(json)));
  };
}

function requestCustomers() {
  return {
    type: CUSTOMERS_REQUEST,
  };
}

function receiveCustomers(json) {
  return {
    type: CUSTOMERS_RECEIVE,
    customers: json,
    receivedAt: Date.now(),
  };
}

export function fetchCustomers() {
  return dispatch => {
    dispatch(requestCustomers());
    return fetch('/api/customers')
      .then(response => response.json())
      .then(json => dispatch(receiveCustomers(json)));
  };
}
