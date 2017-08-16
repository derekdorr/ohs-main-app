import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
const defaultProps = {
    children: null,
};
const assignProps = props => obj => Object.assign({}, props, obj);
const addProps = assignProps(propTypes);
const addDefaults = assignProps(defaultProps);

export default {
    propTypes,
    defaultProps,
    addProps,
    addDefaults,
};
