import React from 'react';
import PropTypes from 'prop-types';
import child from '../../shapes/child';

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
Anchor.propTypes = child.addProps({
    href: PropTypes.string.isRequired,
    title: PropTypes.string,
});
Anchor.defaultProps = child.addDefaults({
    title: null,
    children: null,
});
Anchor.displayName = 'Anchor';

export default Anchor;
