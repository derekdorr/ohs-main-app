import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../AppRoutes';

const LoadPage = props => {
    const { store, location } = props;
    const context = {};

    return (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                { routes }
            </StaticRouter>
        </Provider>
    );
};

LoadPage.propTypes = {
    store: PropTypes.object,
    location: PropTypes.string,
};
LoadPage.defaultProps = {
    store: {},
    location: '/',
};
LoadPage.displayName = 'LoadPage';

export default LoadPage;
