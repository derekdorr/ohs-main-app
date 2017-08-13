import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.PureComponent {
    render() {
        const { children } = this.props;
        return children ?
            (
                <li>{children}</li>
            ) : null;
    }
}

ListItem.propTypes = {
    children: PropTypes.element,
};
ListItem.defaultProps = {
    children: null,
};
ListItem.displayName = 'ListItem';

export default ListItem;
