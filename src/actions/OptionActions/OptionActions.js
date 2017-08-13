import service from '../../services';

const OPTION_DATA = 'OPTION_DATA';

const receiveOptionData = data => ({
    type: OPTION_DATA,
    data,
})

const getData = (name) => {
    return dispatch => service.request('read', 'option', { name }, undefined, data => {
        dispatch(receiveOptionData(data.payload));
    });
}

export default {
    OPTION_DATA,
    getData,
};
