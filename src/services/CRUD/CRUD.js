import Wreck from 'wreck';

class CRUD {
    constructor() {
        this._services = {};
    }

    registerService = (serviceName, makeUri, options, transform) => {
        if (serviceName === undefined) {
            console.log('Service Error: Service registered without a name');
        } else if (makeUri === undefined) {
            console.log(`Service Error: makeUri undefined for ${serviceName}`);
        } else if (this._services[serviceName] !== undefined) {
            console.log(`Service Error: Service already registered for ${serviceName}`);
        } else {
            this._services[serviceName] = {
                makeUri,
                options,
                transform,
            };
        }
    }

    request(method, serviceName, params, payload) {
        return new Promise((resolve, reject) => {
            const service = this._services[serviceName];
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
                const { statusCode, headers } = response;
                Wreck.read(response, { json: 'force' }, (err, payload) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({ statusCode, headers, payload: transform(payload) });
                });
            });
        }).then(response => {
            return response;
        }).catch(result => {
            const { message = 'Unknown error occurred' } = result;
            return {
                statusCode: 500,
                payload: {
                    message,
                },
            }           
        });
    }

    create = this.request.bind(this, 'POST');
    read = this.request.bind(this, 'GET');
    update = this.request.bind(this, 'PUT');
    delete = this.request.bind(this, 'DELETE');
}

export default new CRUD();
