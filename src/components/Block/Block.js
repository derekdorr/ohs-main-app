import React from 'react';
import PropTypes from 'prop-types';

class Block extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return children ? (
            <div {...rest}>{children}</div>
        ) : null;
    }
};

Block.propTypes = {
    children: PropTypes.any,
};
Block.defaultProps = {
    children: null,
};
Block.displayName = 'Block';

export default Block;
