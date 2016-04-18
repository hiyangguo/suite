import React from 'react';

const STATE = ['success', 'warning', 'danger', 'info'];
const SIZES = ['lg', 'md', 'sm', 'xs'];
const STYLES = ['default', 'primary', 'link', 'inverse'];

let ClassNameMixin = {
    propTypes: {
        bsStyle: React.PropTypes.oneOf(STYLES),
        bsSize: React.PropTypes.oneOf(SIZES),
        bsState: React.PropTypes.oneOf(STATE),
    },
    getClassNames() {
        let classes = [];
        let { bsStyle, bsSize, bsState} = this.props;

        bsStyle && classes.push(this.prefix(bsStyle));
        bsSize && classes.push(this.prefix(bsSize));
        bsState && classes.push(this.prefix(bsState));

        return classes;
    },
    prefix(className) {
        let { classPrefix } = this.props;
        let prefix = classPrefix ? classPrefix + '-' : '' ;
        return prefix + className;
    }
};



export default ClassNameMixin;
