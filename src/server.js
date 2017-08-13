import React from 'react';
import Hapi from 'hapi';
import { match } from 'react-router';
import ReactDOM from 'react-dom/server';
import LoadPage from './application/LoadPage';
import ConfigureStore from './application/ConfigureStore';
import reducer from './reducers';
import services from './services';
import MenuActions from './actions/MenuActions';
import OptionActions from './actions/OptionActions';
import PageActions from './actions/PageActions';

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.register(Inert, err => {
    if (err) {
        throw err;
    }

    server.route([
        {
            method: ['GET'],
            path: '/api/{path*}',
            handler: (request, reply) => {
                const path = request.params.path;
                const methods = {
                    get: 'read',
                };
                const requestType = methods[request.method.toLowerCase()];
                if (requestType) {
                    services.request(requestType, path, request.query, undefined, data => {
                        const { payload, statusCode } = data;
                        reply(payload).code(statusCode);
                    });
                } else {
                    reply(`Method ${request.method} not found.`).status(500);
                }
            },
        }, {
            method: 'GET',
            path: '/files/{param*}',
            handler: {
                directory: {
                    path: './dist',
                    index: false,
                },
            }
        }, {
            method: 'GET',
            path: '/{path*}',
            handler: (request, reply) => {
                const path = `/${request.params.path}`;
                const store = ConfigureStore(reducer, {});
                const getData = [
                    MenuActions,
                    OptionActions,
                    PageActions,
                ].map(action => store.dispatch(action.getData(request.params.path)));

                Promise.all(getData).then(() => {
                    const page = ReactDOM.renderToString(<LoadPage
                        location={path}
                        store={store}
                    />);
                    reply(`<!doctype html>${page}`);
                });
            },
        },
    ]);
});

server.start(err => {
    if (err) {
        throw err;
    }
    
    console.log(`Server running at ${server.info.uri}`);
});