import Qwest from 'qwest';
import qs from 'qs';

const clientRequest = (method, serviceName, params, payload) => {
    const baseUri = '/api/';
    const query = qs.stringify(params, { encodeValuesOnly: true });
    const uri = `${baseUri}${serviceName}?${query}`;
    return Qwest[method](uri, payload).then((xhr, response) => response);
};

const methods = {
    create: clientRequest.bind(undefined, 'post'),
    read: clientRequest.bind(undefined, 'get'),
    update: clientRequest.bind(undefined, 'put'),
    delete: clientRequest.bind(undefined, 'delete'),
};

const request = (method, serviceName, params, payload, callback) =>
    methods[method](serviceName, params, payload).then(callback);

export default {
    request,
};
