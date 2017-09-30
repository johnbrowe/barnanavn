export const ADD_ACCEPT_NAME = 'ADD_ACCEPT_NAME';
export const ADD_REJECT_NAME = 'ADD_REJECT_NAME';

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