export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export function open() {
    return {
        type: OPEN,
        payload: true
    }
}

export function close() {
    return {
        type: CLOSE,
        payload: false
    }
}
