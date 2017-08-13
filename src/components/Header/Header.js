import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <header>{children}</header>
        );
    }
}

Header.propTypes = {
    children: PropTypes.element,
};
Header.defaultProps = {
    children: null,
};
Header.displayName = 'Header';

export default Header;
