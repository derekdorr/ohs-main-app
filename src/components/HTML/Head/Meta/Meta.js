import React from 'react';

class Meta extends React.PureComponent {
    render() {
        return (
            <meta {...this.props} />
        );
    }
}

Meta.displayName = 'Meta';

export default Meta;
