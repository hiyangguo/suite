import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import RootCloseWrapper from './RootCloseWrapper';

const Dropdown = React.createClass({
    mixins:[ClassNameMixin],
    propTypes: {
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        block: React.PropTypes.bool,
        dropup: React.PropTypes.bool,
        role: React.PropTypes.string,
        onClose: React.PropTypes.func,
        onOpen: React.PropTypes.func,
        onToggle: React.PropTypes.func,
        onSelect: React.PropTypes.func,
        items: React.PropTypes.array,
        /*
         * If 'rename' is true , title will be updated after the 'onSelect' trigger .
         */
        rename : React.PropTypes.bool
    },
    getDefaultProps(){
        return {
            active: false,
            disabled: false,
            block: false
        };
    },
    getInitialState: function() {
        return {
            title: null,
            open: false
        };
    },
    toggle(isOpen) {
        let open = isOpen || !this.state.open;
        let handleToggle = open ? this.props.onOpen : this.props.onClose;

        this.setState({
            open: open
        }, function() {
            handleToggle && handleToggle();
        });

        this.props.onToggle && this.props.onToggle();
    },
    handleClick() {
        if (this.props.disabled) {
            return;
        }
        this.toggle();
    },
    handleSelect(props, target, event){
        this.props.rename && this.setState({ title : props.label });
        this.props.onSelect && this.props.onSelect(props,target,event);
    },
    render(){

        let { items, children, title, className, ...props } = this.props;
        let Toggle = (
            <DropdownToggle
                {...props}
                onClick = {this.handleClick}
            >
                {this.state.title || title || children }
            </DropdownToggle>
        );
        let Menu = (
            <DropdownMenu
                items={items}
                onClose={this.toggle}
                onSelect={this.handleSelect}
                ref='menu'
            />
        );

        if(this.state.open){
            Menu = (
                <RootCloseWrapper onRootClose={this.toggle}>
                    {Menu}
                </RootCloseWrapper>
            );
        }

        let classes = {
            'dropdown': true,
            'btn-group': true,
            'open': this.state.open
        };

        return (
            <div
                {...props}
                className = {classNames(className, classes)}
                role = "dropdown"
            >
                {Toggle}
                {Menu}
            </div>
          );
    }
});


export default Dropdown;
