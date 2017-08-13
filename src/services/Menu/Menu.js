const serviceName = 'menu';
const makeUri = () => 'https://www.otisfield.org/wp-json/ohs/v1/menu';
const options = {};
const transform = obj => {
    const { logo, navigation = [], homeLink } = obj;
    return {
        logo,
        navigation: navigation.map(nav => {
            const { url, title } = nav;
            return {
                title,
                url: url.replace(homeLink, ''),
            };
        }),
    };
};

export default {
    serviceName,
    makeUri,
    options,
    transform,
};
