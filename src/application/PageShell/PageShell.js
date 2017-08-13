import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import HTML from '../../components/HTML';
import Menu from '../../components/Menu';
import Block from '../../components/Block';
import Header from '../../components/Header';
import styles from './PageShell.scss';

const PageShell = props => {
    const { children, state } = props;
    const { MenuReducer: menu = {} } = state;
    const { logo, navigation } = menu;
    return (
        <HTML>
            <HTML.Head>
                <HTML.Head.Title>OHS</HTML.Head.Title>
                <HTML.Head.Link href="/files/styles.css" rel="stylesheet" />
            </HTML.Head>
            <HTML.Body styleName="body">
                <Block>
                    <Header>
                        <Menu logo={logo} navigation={navigation} />
                    </Header>
                    { children }
                </Block>
                <script dangerouslySetInnerHTML={{ __html: `window.initialState = ${JSON.stringify(state)}` }} />
                <script src="/files/client.bundle.js" />
            </HTML.Body>
        </HTML>
    );
};

PageShell.propTypes = {
    children: PropTypes.element,
    state: PropTypes.object,
};
PageShell.defaultProps = {
    children: null,
    state: {},
};
PageShell.displayName = 'PageShell';

export default connect(state => ({ state }))(cssModules(PageShell, styles));
