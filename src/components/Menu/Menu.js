import React from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './Menu.scss';
import Anchor from '../Anchor';
import Image from '../Image';
import List from '../List';
import Navigation from '../Navigation';

const propTypes = {
    logo: PropTypes.string,
    navigation: PropTypes.arrayOf(
        PropTypes.objectOf({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
};

const defaultProps = {
    logo: null,
    navigation: []
}

class Menu extends React.PureComponent {
    render() {
        const { logo, navigation } = this.props;
        return (
            <Navigation>
                <List styleName="list">
                    {
                        logo ? (
                            <List.Item styleName="list-item">
                                <Anchor
                                    href="/"
                                    title="Otisfield Historical Society | Home"
                                >
                                    <Image src={logo} alt="Otisfield Historical Society" />
                                </Anchor>
                            </List.Item>
                        ) : null
                    }
                    {
                        navigation.map(item => {
                            const { title, url } = item;
                            return (
                                <List.Item
                                    key={title}
                                    styleName="list-item"
                                >
                                    <Anchor
                                        href={url}
                                    >
                                        {title}
                                    </Anchor>
                                </List.Item>
                            )
                        })
                    }
                </List>
            </Navigation>
        );
    }
};

export default cssModules(Menu, styles);
