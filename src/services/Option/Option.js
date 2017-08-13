const serviceName = 'option';
const makeUri = () => 'https://www.otisfield.org/wp-json/ohs/v1/options';
const options = {};
const transform = obj => obj;

export default {
    serviceName,
    makeUri,
    options,
    transform,
}
