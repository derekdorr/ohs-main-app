import React from 'react';
import PropTypes from 'prop-types';

class Meta extends React.PureComponent {
    render() {
        return (
            <meta {...this.props} />
        );
    }
}

Meta.displayName = 'Meta';

export default Meta;
