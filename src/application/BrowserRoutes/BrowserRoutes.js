import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageShell from '../PageShell';
import routes from '../AppRoutes';

const BrowserRoutes = props => {
    const { store } = props;

    return(
        <Provider store={store}>
            <BrowserRouter>
                { routes }
            </BrowserRouter>
        </Provider>
    );
}

BrowserRoutes.propTypes = {
    store: PropTypes.object,
};
BrowserRoutes.defaultProps = {
    store: {},
};
BrowserRoutes.displayName = 'LoadPage';

export default BrowserRoutes;
