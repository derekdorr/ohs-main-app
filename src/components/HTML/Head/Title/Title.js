import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <title>{children}</title>
        );
    }
}

Title.propTypes = {
    children: PropTypes.element,
};
Title.defaultProps = {
    children: null,
};
Title.displayName = 'Title';

export default Title;
