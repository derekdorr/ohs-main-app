import React from 'react';
import PropTypes from 'prop-types';

class Body extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return (
            <body {...rest}>{children}</body>
        );
    }
}

Body.propTypes = {
    children: PropTypes.element,
};
Body.defaultProps = {
    children: null,
};
Body.displayName = 'Body';

export default Body;
