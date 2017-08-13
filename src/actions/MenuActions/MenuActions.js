import service from '../../services';

const MENU_DATA = 'MENU_DATA';

const receiveMenuData = data => ({
    type: MENU_DATA,
    data,
})

const getData = (name) => {
    return dispatch => service.request('read', 'menu', { name }, undefined, data => {
        dispatch(receiveMenuData(data.payload));
    });
}

export default {
    MENU_DATA,
    getData,
};

