import * as actionTypes from '../actionTypes'
import axios from 'axios';

export const fetchUsersListAction = (bool) => {
    return {
        type: actionTypes.FETCH_USERS_LIST,
        isLoading: bool
    }
}
export const fetchUsersListActionSuccess = (list) => {
    return {
        type: actionTypes.FETCH_USERS_LIST_SUCCESS,
        list
    }
}

export const fetchUsersListActionFailure = (bool) => {
    return {
        type: actionTypes.FETCH_USERS_LIST_FAILURE,
        hasError: bool
    }
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(fetchUsersListAction(true));
        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(fetchUsersListAction(false));

                return response;
            })
            .then((response) => dispatch(fetchUsersListActionSuccess(response.data.data)))
            .catch(() => dispatch(fetchUsersListActionFailure(true)));
    };
}

