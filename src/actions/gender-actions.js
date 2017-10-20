export const SELECT_GENDER = 'SELECT_GENDER';

export function selectGender(gender) {
  return {
    type: SELECT_GENDER,
    payload: gender
  }
}
