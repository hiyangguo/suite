import React from 'react';
import classNames from 'classnames';


let ButtonToolbar = React.createClass({

    render() {

        let { children, className,...props} = this.props;
        let classes = classNames({
            'btn-toolbar': true
        }, className);

        return (
            <div
                role="toolbar"
                className={classes}
                {...props}
                >
                {children}
            </div>
        );
    }
});

export default ButtonToolbar;
