import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Element from '../../components/Element';
import Block from '../../components/Block';

const GenericPage = props => {
    const { page = {} } = props;
    const { content = [] } = page;
    return (
        <Block id="main">
            {
                content.map(el => (
                    <Element key={`${el.text}-${JSON.stringify(el.child)}`} {...el} />
                ))
            }
        </Block>
    );
};

GenericPage.propTypes = {
    page: PropTypes.object,
};
GenericPage.defaultProps = {
    page: {},
};
GenericPage.displayName = 'GenericPage';

export default connect(state => ({
    menu: state.MenuReducer,
    option: state.OptionReducer,
    page: state.PageReducer,
}))(GenericPage);
