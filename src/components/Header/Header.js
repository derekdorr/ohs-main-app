import React from 'react';
import child from '../../shapes/child';

class Header extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <header>{children}</header>
        );
    }
}

Header.propTypes = child.propTypes;
Header.defaultProps = child.defaultProps;
Header.displayName = 'Header';

export default Header;
