import MenuActions from '../../actions/MenuActions';

const initialState = {};

const MenuReducer = (state = initialState, action = {}) => {
    const { type, data } = action;
    switch (type) {
    case MenuActions.MENU_DATA:
        return Object.assign({}, state, data);
    default:
        return state;
    }
};

export default MenuReducer;
