import htmlparser from 'htmlparser2';

const serviceName = 'page';
const makeUri = params => {
    const { name } = params;
    return `https://www.otisfield.org/wp-json/wp/v2/pages?slug=${name}`;
};
const options = {};

const htmlSanitizer = (arr = []) => arr.map(obj => {
    const { type: node, data: text, name: tag, attribs: attr, children: child } = obj;
    return (text && text.trim().length) || child ?
        {
            node,
            text,
            tag,
            attr,
            child: htmlSanitizer(child),
        } : null;
});

const transform = obj => {
    const pageInfo = obj[0] || {};
    const { title: pageTitle = {}, content: pageContent = {} } = pageInfo;
    const { rendered: title } = pageTitle;
    const { rendered: content = '' } = pageContent;
    return {
        title,
        content: htmlSanitizer(htmlparser.parseDOM(content.replace(/\n/g, ''))),
    };
};

export default {
    serviceName,
    makeUri,
    options,
    transform,
};
