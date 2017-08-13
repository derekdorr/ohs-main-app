import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Meta from './Meta';
import Title from './Title';

class Head extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <head>{children}</head>
        );
    }
}

Head.propTypes = {
    children: PropTypes.any,
};
Head.defaultProps = {
    children: null,
};
Head.displayName = 'Head';
Head.Title = Title;
Head.Link = Link;
Head.Meta = Meta;

export default Head;