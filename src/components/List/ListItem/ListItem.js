import React from 'react';
import child from '../../../shapes/child';

class ListItem extends React.PureComponent {
    render() {
        const { children } = this.props;
        return children ?
            (
                <li>{children}</li>
            ) : null;
    }
}

ListItem.propTypes = child.propTypes;
ListItem.defaultProps = child.defaultProps;
ListItem.displayName = 'ListItem';

export default ListItem;
