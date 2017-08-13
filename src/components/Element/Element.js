import React from 'react';
import cssModules from 'react-css-modules';
import pageDataShape from '../../utilities/pageDataShape';
import styles from './Element.scss';

class Element extends React.PureComponent {
    getTagName = (node, tag) => {
        switch (node) {
        case 'root':
            return 'div';
        case 'text':
            return 'span';
        default:
            return tag;
        }
    };

    getText = content => (
        content ?
            (<span>{content}</span>) :
            null
    );

    sanitizeAttributes = (attributes = {}) => {
        const { class: styleName = null, style = '', ...rest } = attributes;
        return Object.assign(
            {},
            {
                styleName,
                style: this.sanitizeStyles(style),
            },
            rest,
        );
    };

    sanitizeStyles = styleStr => styleStr.split(';').reduce(
        (acc, style) => {
            const [name, value] = style.split(':');
            const sanitizedName = this.trimString(this.camelCase(name));
            const sanitizedValue = this.trimString(value);
            return Object.assign(acc, { [sanitizedName]: sanitizedValue });
        },
        {});

    camelCase = text => text.replace(/-([a-z])/g, srch => srch[1].toUpperCase());

    trimString = (str = '') => str.trim();

    mapChildren = (children = []) => children.map(
        el => {
            const { text, child, ...rest } = el;
            return el ?
                (
                    <Element
                        key={`${text}-${JSON.stringify(child)}`}
                        text={text}
                        child={child}
                        {...rest}
                    />
                ) :
                null;
        },
    );

    render() {
        const { attr, child, node, tag, text } = this.props; // eslint-disable-line
        const attributes = this.sanitizeAttributes(attr);
        const TagName = this.getTagName(node, tag);
        const childNodes = this.getText(text) || this.mapChildren(child);

        return childNodes ? (
            <TagName {...attributes}>{childNodes}</TagName>
        ) : null;
    }
}

Element.propTypes = pageDataShape.getShape();
Element.defaultProps = {
    attr: {},
    child: [],
    node: 'tag',
    tag: 'div',
    text: null,
};
Element.displayName = 'Element';

export default cssModules(Element, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
