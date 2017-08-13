import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import Body from './Body';

class HTML extends React.PureComponent {
    render() {
        const { children, ...rest } = this.props;
        return (
            <html lang="en-US" {...rest}>{children}</html>
        );
    }
}
HTML.propTypes = {
    children: PropTypes.element,
};
HTML.defaultProps = {
    children: null,
};
HTML.displayName = 'HTML';
HTML.Head = Head;
HTML.Body = Body;

export default HTML;
