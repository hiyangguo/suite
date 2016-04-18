import React from 'react';
import classNames from 'classnames';
import Button from './Button';

const CARET = <span> <span className="caret" /></span>;

let DorpdownToggle = React.createClass({
    propTypes: {
        noCaret: React.PropTypes.bool,
        open: React.PropTypes.bool,
        title: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            open: false,
            noCaret: false
        };
    },
    render() {

        let caret = this.props.noCaret ? null : CARET ;
        let classes = {
            ['dropdown-toggle'] : true
        };

        return (
            <Button
                {...this.props}
                className = {classNames(classes, this.props.className)}
                type = "button"
                role = "toggle"
            >
                {this.props.title || this.props.children  }{caret}
            </Button>
        );
    }

});

export default DorpdownToggle;
