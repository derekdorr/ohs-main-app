import React from 'react';
import Head from './Head';
import Body from './Body';
import child from '../../shapes/child';

class HTML extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return (
            <html lang="en-US" {...rest}>{children}</html>
        );
    }
}
HTML.propTypes = child.propTypes;
HTML.defaultProps = child.defaultProps;
HTML.displayName = 'HTML';
HTML.Head = Head;
HTML.Body = Body;

export default HTML;
