import React from 'react';
import PropTypes from 'prop-types';

class Navigation extends React.PureComponent {
    render() {
        const { children } = this.props;
        return children ? (
            <nav>
                {children}
            </nav>
        ) : null;
    }
};

Navigation.propTypes = {
    children: PropTypes.any,
};
Navigation.defaultProps = {
    children: null,
};
Navigation.displayName = 'Navigation';

export default Navigation;
