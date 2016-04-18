import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';
import ClassNameMixin from './mixins/ClassNameMixin';
import keycode from './utils/keycode';


let DorpdownMenu = React.createClass({
    mixins:[ClassNameMixin],
    propTypes: {
        pullRight: React.PropTypes.bool,
        onClose: React.PropTypes.func,
        onSelect: React.PropTypes.func,
        items: React.PropTypes.array.isRequired,
    },
    getDefaultProps() {
        return {
            classPrefix: 'dropdown',
            pullRight: false
        };
    },
    getPropsValidItems(){
        let items=[];
        this.props.items.map((item,index) => {
            if(!item.divider){items.push(item)}
        });
        return items;
    },
    getFocusableMenuItems() {
        let menuNode = ReactDOM.findDOMNode(this);
        if (menuNode === undefined) { return []; }
        return Array.from(menuNode.querySelectorAll('[role="menu-item"]'));
    },
    getItemsAndActiveIndex() {
        let items = this.getFocusableMenuItems();
        let activeItemIndex = items.indexOf(document.activeElement);

        return {
            items,
            activeItemIndex
        };
    },
    handleSelect(event){
        let allItems = this.getFocusableMenuItems();
        let activeItemIndex = allItems.indexOf(document.activeElement);
        let items = this.getPropsValidItems();
        let itemProps = items[activeItemIndex];

        let { onSelect, onClose } = this.props;
        onSelect && onSelect(itemProps, event.target, event);
        onClose && onClose();
    },
    handleKeyDown(event) {
        switch (event.keyCode) {
            case keycode.codes.down:
                this.focusNext();
                event.preventDefault();
                break;
            case keycode.codes.up:
                this.focusPrevious();
                event.preventDefault();
                break;
            case keycode.codes.esc:
            case keycode.codes.tab:
                this.props.onClose(event);
                break;
            default:
        }
    },
    focusNext(){
        let { items, activeItemIndex } = this.getItemsAndActiveIndex();

        if (items.length === 0) {
          return;
        }

        if (activeItemIndex === items.length - 1) {
          items[0].focus();
          return;
        }

        items[activeItemIndex + 1].focus();
    },
    focusPrevious(){
        let { items, activeItemIndex } = this.getItemsAndActiveIndex();
        if (activeItemIndex === 0) {
          items[items.length - 1].focus();
          return;
        }
        items[activeItemIndex - 1].focus();
    },
    render(){

        let {items = [], pullRight, className, ...props} = this.props;
        let dropdownMenuItems = items.map((itemProps,index) => {
            return (
                <DropdownMenuItem
                    key={this.prefix(index)}
                    {...itemProps}
                    onKeyDown={this.handleKeyDown}
                    onSelect={this.handleSelect}
                    >
                    {itemProps.label}
                </DropdownMenuItem>);
        });

        let classes = {
            [this.prefix('menu')] : true,
            [this.prefix('menu-right')]: pullRight
        };

        return (
            <ul
                {...props}
                className = {classNames(className, classes)}
                role = "menu"
            >
                {dropdownMenuItems}
            </ul>
        );


    }

});

export default DorpdownMenu;
