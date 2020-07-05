const INITIAL_STATE = {
    counter: 0
}

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        
        case 'INCREMENT_BY_NUMBER':
            return {
                ...state,
                counter: state.counter + action.payload
            }

        case 'RESET':
            return {
                ...state,
                counter: state.counter = 0
            }

        default: 
            return state
    }
}

export default CounterReducer;