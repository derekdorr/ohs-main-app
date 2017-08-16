import React from 'react';
import ListItem from './ListItem';
import child from '../../shapes/child';

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

List.propTypes = child.propTypes;
List.defaultProps = child.defaultProps;
List.displayName = 'List';
List.Item = ListItem;

export default List;
