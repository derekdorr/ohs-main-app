import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
    render() {
        const { src, alt, ...rest } = this.props;
        return src ? (
            <img src={src} alt={alt} {...rest} />
        ) : null;
    }
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
};
Image.defaultProps = {
    src: null,
};
Image.displayName = 'Image';

export default Image;
