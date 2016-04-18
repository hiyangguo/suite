import React from 'react';
import classNames from 'classnames';

let DorpdownMenuItem = React.createClass({
    propTypes: {
        href: React.PropTypes.string,
        divider: React.PropTypes.bool,
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        onSelect: React.PropTypes.func,
        onKeyDown: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            active: false,
            disabled: false,
            divider:false
        };
    },

    handleClick(event){

        let { onSelect } = this.props;
        if(this.props.disabled){
            event.preventDefault();
            return;
        }
        
        onSelect && onSelect(event);
    },

    handleKeyDown(event){
        event.preventDefault();
    },

    render: function() {

        let {children, divider, onSelect, onKeyDown, ...props } = this.props;
        let classes = classNames({
            active : this.props.active ,
            disabled : this.props.disabled
        });

        if(divider){
            return <li role="separator" className="divider"></li>;
        }

        return (
            <li role="presentation" className = {classes} >
                <a
                    {...props}
                    role="menu-item"
                    tabIndex="-1"

                    onClick={this.handleClick }
                    onKeyDown={onKeyDown || this.handleKeyDown }
                  >
                  {children}
                </a>
            </li>
        );
    }

});

export default DorpdownMenuItem;
