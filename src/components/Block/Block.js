import React from 'react';
import child from '../../shapes/child';

class Block extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return children ? (
            <div {...rest}>{children}</div>
        ) : null;
    }
}

Block.propTypes = child.propTypes;
Block.defaultProps = child.defaultProps;
Block.displayName = 'Block';

export default Block;
