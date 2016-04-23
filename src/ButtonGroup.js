import React from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

let ButtonGroup = React.createClass({
    mixins:[ClassNameMixin],
    propTypes: {
        type: React.PropTypes.oneOf(['radio', 'checkbox'])
    },
    handleClick(event){
        let target = event.target;
        let type = this.props.type;
        let refs = this.refs;
        if(type === 'checkbox'){
            this.toggleClass(target,'active');
        }else if(type === 'radio'){
            for(let key in refs){
                let ref = findDOMNode(refs[key]);
                let toggle = target === ref ? 'addClass' : 'removeClass';
                this[toggle](ref,'active');
            }
        }
    },
    render() {

        let { children, className } = this.props;
        let classes = classNames({
            'btn-group': true
        }, className);
        let items = React.Children.map(children,(item, index) => {
            return React.cloneElement(item, {
                key : index,
                ref : 'btn_' + index
            }, item.props.children);
        });

        return (
            <div className='btn-group' onClick={this.handleClick}>
                 {items}
            </div>
        );
    }
});

export default ButtonGroup;
