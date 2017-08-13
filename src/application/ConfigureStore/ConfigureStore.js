import { applyMiddleware, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';

const factory = compose(
    applyMiddleware(Thunk),
);

const create = factory(createStore);

const ConfigureStore = (root, initial) => create(root, initial);

export default ConfigureStore;
