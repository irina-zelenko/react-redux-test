import * as actionTypes from '../actionTypes'

const initialState = {
    list: [],
    test: 'Hello!',
    isLoading: false,
    hasError: false,
};

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_LIST_SUCCESS:
            return {
                ...state,
                list: action.list
            };
        case actionTypes.FETCH_USERS_LIST:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case actionTypes.FETCH_USERS_LIST_FAILURE:
            return {
                ...state,
                hasError: action.hasError
            };
        default:
            return state
    }
}

export default usersReducer;