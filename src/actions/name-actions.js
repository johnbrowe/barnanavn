export const ADD_ACCEPT_NAME = 'ADD_ACCEPT_NAME';
export const ADD_REJECT_NAME = 'ADD_REJECT_NAME';
export const MOVE_TO_ACCEPTED = 'MOVE_TO_ACCEPT';
export const MOVE_TO_REJECTED = 'MOVE_TO_REJECT';
export const INCREMENT = 'INCREMENT';
export const RESTART = 'RESTART';
export const GET_NAMES = 'GET_NAMES';

export function addAcceptName(name) {
  return {
    type: ADD_ACCEPT_NAME,
    payload: name
  }
}

export function addRejectName(name) {
  return {
    type: ADD_REJECT_NAME,
    payload: name
  }
}

export function moveToAccepted(id) {
  return {
    type: MOVE_TO_ACCEPTED,
    payload: id
  }
}

export function moveToRejected(id) {
  return {
    type: MOVE_TO_REJECTED,
    payload: id
  }
}

export function increment() {
  return {
    type: INCREMENT
  }
}

export function restart() {
  return {
    type: RESTART
  }
}

export function getNames() {
  return {
    type: GET_NAMES,
  }
}