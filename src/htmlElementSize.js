/**
 * @param {HtmlElement} element
 * @param {Object} [options]
 * @param {String|Array} [options.removeClass]
 * @param {String|Array} [options.addClass]
 * @returns {Number}
 */
export default function htmlElementSize(element, options) {
    const clonedElement = element.cloneNode(true);

    options = options || {};

    let classNames = clonedElement.className ? clonedElement.className.split(' ') : [];

    let removeClass = options.removeClass || '';
    if (removeClass) {
        if (!(removeClass instanceof Array)) {
            removeClass = removeClass.split(' ');
        }
        classNames = classNames.filter(className => !removeClass.includes(className));
    }

    let addClass = options.addClass || '';
    if (addClass) {
        if (!(addClass instanceof Array)) {
            addClass = addClass.split(' ');
        }
        addClass.forEach(className => {
            if (!classNames.includes(className)) {
                classNames.push(className);
            }
        });
    }

    clonedElement.className = classNames.join(' ');

    if (clonedElement.style.height) {
        delete clonedElement.style.height;
    }

    if (element.offsetWidth > 0) {
        clonedElement.style.width = element.offsetWidth + 'px';
    }

    document.body.appendChild(clonedElement);
    const width = clonedElement.offsetWidth;
    const height = clonedElement.offsetHeight;
    document.body.removeChild(clonedElement);

    return {
        width,
        height
    };
}
