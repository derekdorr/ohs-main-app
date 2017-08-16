import React from 'react';
import child from '../../shapes/child';

class Navigation extends React.PureComponent {
    render() {
        const { children } = this.props;
        return children ? (
            <nav>
                {children}
            </nav>
        ) : null;
    }
}

Navigation.propTypes = child.propTypes;
Navigation.defaultProps = child.defaultProps;
Navigation.displayName = 'Navigation';

export default Navigation;
