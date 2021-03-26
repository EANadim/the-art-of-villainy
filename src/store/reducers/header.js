import actionTypes from '../../constants/actions';

const initState = {
    color: "#8c0406",
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_HEADER_COLOR:
            const { color } = action.payload;
            return {
                ...state,
                color: color,
            };
        default:
            return state;
    }
};
export default reducer;