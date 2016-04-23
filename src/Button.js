import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

let Button = React.createClass({
    mixins:[ClassNameMixin],
    propTypes: {
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        block: React.PropTypes.bool,
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        component: React.PropTypes.node,
        type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
    },
    getDefaultProps() {
        return {
            classPrefix: 'btn',
            active: false,
            disabled: false,
            block: false
        };
    },
    renderAnchor(classes) {
        let Component = this.props.component || 'a';
        let href = this.props.href || '#';

        return (
            <Component
              {...this.props}
              href={href}
              className={classes}
              role="button" >
              {this.props.children}
            </Component>
        );

    },
    renderButton(classes) {
        let Component = this.props.component || 'button';
        return (
            <Component
                {...this.props}
                className={classes}
            >
                {this.props.children}
            </Component>
        );
    },
    render() {
        let classes = classNames({
            btn: true,
            active: this.props.active,
            disabled: this.props.disabled,
            block: this.props.block
        }, ...this.getClassNames(), this.props.className);

        let renderName = this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
        return this[renderName](classes);
    }
});

export default Button;
