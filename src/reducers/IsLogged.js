const INITIAL_STATE = {
    isLogged: false,
}

const IsLoggedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLogged: !state.isLogged,
            }

        default:
            return state;
    }
}

export default IsLoggedReducer;