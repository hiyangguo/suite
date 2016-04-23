import React from 'react';

const SIZES = ['lg', 'md', 'sm', 'xs'];
const SHAPES = ['default', 'primary', 'link', 'inverse','success', 'warning', 'danger', 'info'];

let ClassNameMixin = {
    propTypes: {
        size: React.PropTypes.oneOf(SIZES),
        shape: React.PropTypes.oneOf(SHAPES)
    },
    getClassNames() {
        let classes = [];
        let { shape, size, state} = this.props;

        shape && classes.push(this.prefix(shape));
        size && classes.push(this.prefix(size));

        return classes;
    },
    prefix(className) {
        let { classPrefix } = this.props;
        let prefix = classPrefix ? classPrefix + '-' : '' ;
        return prefix + className;
    },
    hasClass: function(element, className) {
        if (element.classList) {
          return !!className && element.classList.contains(className);
        }
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    },
    addClass: function(element, className) {
        if (className) {
            if (element.classList) {
                element.classList.add(className);
            } else if (!this.hasClass(element, className)) {
                element.className = element.className + ' ' + className;
            }
        }
        return element;
    },
    removeClass: function(element, className) {
        if (className) {
            if (element.classList) {
                element.classList.remove(className);
            } else if (CSSCore.hasClass(element, className)) {
                element.className = element.className
                .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
                .replace(/\s+/g, ' ') // multiple spaces to one
                .replace(/^\s*|\s*$/g, ''); // trim the ends
            }
        }
        return element;
    },
    toggleClass: function(element, className) {
        return this.hasClass(element, className) ?
          this.removeClass(element, className) :
          this.addClass(element, className);
    }
};

export default ClassNameMixin;
