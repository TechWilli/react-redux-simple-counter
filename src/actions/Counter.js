export const increment = () => {
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const incrementByNumber = (number) => {
    return {
        type: 'INCREMENT_BY_NUMBER',
        payload: number,
    };
}

export const reset = () => {
    return {
        type: 'RESET'
    };
}

