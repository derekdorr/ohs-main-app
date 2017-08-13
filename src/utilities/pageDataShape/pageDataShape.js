import PropTypes from 'prop-types';

const getShape = () => PropTypes.shape({
    node: PropTypes.string,
    tag: PropTypes.string,
    attr: PropTypes.objectOf(PropTypes.string),
    child: PropTypes.arrayOf(getShape()),
    text: PropTypes.string,
});

const contentShape = getShape();

const shape = PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.arrayOf(contentShape),
});

export default {
    shape,
    getShape,
};
