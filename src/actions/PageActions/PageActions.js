import service from '../../services';

const PAGE_DATA = 'PAGE_DATA';

const receivePageData = data => ({
    type: PAGE_DATA,
    data,
})

const getData = (name) => {
    return dispatch => service.request('read', 'page', { name }, undefined, data => {
        dispatch(receivePageData(data.payload));
    });
}

export default {
    PAGE_DATA,
    getData,
};

