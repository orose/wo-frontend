export const WORKORDERS_REQUEST = 'WORKORDERS_REQUEST';
export const WORKORDERS_RECEIVE = 'WORKORDERS_RECEIVE';

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
