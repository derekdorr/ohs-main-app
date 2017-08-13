import React from 'react';

class Link extends React.PureComponent {
    render() {
        return (
            <link {...this.props} />
        );
    }
}

Link.displayName = 'Link';

export default Link;
