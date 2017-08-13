import OptionActions from '../../actions/OptionActions';

const initialState = {};

const OptionReducer = (state = initialState, action = {}) => {
    const { type, data } = action;
    switch (type) {
    case OptionActions.OPTION_DATA:
        return Object.assign({}, state, data);
    default:
        return state;
    }
};

export default OptionReducer;
