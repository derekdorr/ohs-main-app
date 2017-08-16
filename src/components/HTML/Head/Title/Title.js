import React from 'react';
import child from '../../../../shapes/child';

class Title extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <title>{children}</title>
        );
    }
}

Title.propTypes = child.propTypes;
Title.defaultProps = child.defaultProps;
Title.displayName = 'Title';

export default Title;
