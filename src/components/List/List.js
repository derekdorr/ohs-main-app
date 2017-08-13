import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends React.PureComponent {
    render() {
        const { children } = this.props;
        return children ? (
            <ul>
                {children}
            </ul>
        ) : null;
    }
}

List.propTypes = {
    children: PropTypes.element,
};
List.defaultProps = {
    children: null,
};
List.displayName = 'List';
List.Item = ListItem;

export default List;
