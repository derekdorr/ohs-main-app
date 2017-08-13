import Wreck from 'wreck';

class CRUD {
    constructor() {
        this.services = {};
    }

    registerService = (serviceName, makeUri, options, transform) => {
        if (serviceName === undefined) {
            console.log('Service Error: Service registered without a name');
        } else if (makeUri === undefined) {
            console.log(`Service Error: makeUri undefined for ${serviceName}`);
        } else if (this.services[serviceName] !== undefined) {
            console.log(`Service Error: Service already registered for ${serviceName}`);
        } else {
            this.services[serviceName] = {
                makeUri,
                options,
                transform,
            };
        }
    }

    request(method, serviceName, params, payload) {
        return new Promise((resolve, reject) => {
            const service = this.services[serviceName];
            if (service === undefined) {
                reject(new Error(`Service ${serviceName} is undefined`));
            }
            const uri = service.makeUri(params);
            const transform = service.transform ? service.transform : (obj => obj);
            const { timeout = 1000, headers } = (service.options || {});
            const requestOptions = Object.assign({}, {
                timeout,
            }, (headers ? { headers } : {}), (payload ? { payload } : {}));

            console.log({ uri });

            Wreck.request(method, uri, requestOptions, (err, response = {}) => {
                if (err) {
                    reject(err);
                }
                const { statusCode, headers: resHeaders } = response;
                Wreck.read(response, { json: 'force' }, (readErr, readPayload) => {
                    if (readErr) {
                        reject(readErr);
                    }
                    resolve({ statusCode, resHeaders, payload: transform(readPayload) });
                });
            });
        })
            .then(response => response)
            .catch(result => {
                const { message = 'Unknown error occurred' } = result;
                return {
                    statusCode: 500,
                    payload: {
                        message,
                    },
                };
            });
    }

    create = this.request.bind(this, 'POST');
    read = this.request.bind(this, 'GET');
    update = this.request.bind(this, 'PUT');
    delete = this.request.bind(this, 'DELETE');
}

export default new CRUD();
