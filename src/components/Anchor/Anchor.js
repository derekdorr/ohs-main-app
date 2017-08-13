import React from 'react';
import PropTypes from 'prop-types';

class Anchor extends React.PureComponent {
    render() {
        const { href, title, children, ...rest } = this.props;
        return children ? (
            <a
                href={href}
                title={title}
                {...rest}
            >
                {children}
            </a>
        ) : null;
    }
}
Anchor.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.element,
};
Anchor.defaultProps = {
    title: null,
    children: null,
};
Anchor.displayName = 'Anchor';

export default Anchor;
