import React from 'react';
import Link from './Link';
import Meta from './Meta';
import Title from './Title';
import child from '../../../shapes/child';

class Head extends React.PureComponent {
    render() {
        const { children } = this.props;
        return (
            <head>{children}</head>
        );
    }
}

Head.propTypes = child.propTypes;
Head.defaultProps = child.defaultProps;
Head.displayName = 'Head';
Head.Title = Title;
Head.Link = Link;
Head.Meta = Meta;

export default Head;
