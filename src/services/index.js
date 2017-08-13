import CRUD from './CRUD';
import Menu from './Menu';
import Option from './Option';
import Page from './Page';

const services = [
    Menu,
    Option,
    Page,
];

const register = services.map(service => {
    if (service) {
        const { serviceName, makeUri, options, transform } = service;
        CRUD.registerService(serviceName, makeUri, options, transform);
    }
    return service ? true : false;
});

const request = (method, serviceName, params, payload, callback) => CRUD[method](serviceName, params, payload)
        .then(callback);

export default {
    request,
}
