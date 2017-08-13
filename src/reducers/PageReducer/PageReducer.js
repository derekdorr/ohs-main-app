import PageActions from '../../actions/PageActions';

const initialState = {};

const PageReducer = (state = initialState, action = {}) => {
    const { type, data } = action;
    switch (type) {
    case PageActions.PAGE_DATA:
        return Object.assign({}, state, data);
    default:
        return state;
    }
};

export default PageReducer;
