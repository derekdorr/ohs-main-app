import React from 'react';
import child from '../../../shapes/child';

class Body extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return (
            <body {...rest}>{children}</body>
        );
    }
}

Body.propTypes = child.propTypes;
Body.defaultProps = child.defaultProps;
Body.displayName = 'Body';

export default Body;
