import actionTypes from '../../constants/actions';

export const setHeaderColor = (payload) => {
    return {
        type: actionTypes.SET_HEADER_COLOR,
        payload: payload
    };
};