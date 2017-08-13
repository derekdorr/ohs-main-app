import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.PureComponent {
    render() {
        return (
            <link {...this.props} />
        );
    }
}

Link.displayName = 'Link';

export default Link;
