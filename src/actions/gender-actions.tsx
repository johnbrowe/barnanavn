export const SELECT_GENDER = 'SELECT_GENDER'

export function selectGender(gender: any) {
    return {
        type: SELECT_GENDER,
        payload: gender
    }
}
