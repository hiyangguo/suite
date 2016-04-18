import React from 'react';
import { render } from 'react-dom';
import Dropdown from '../src/Dropdown';

var items = [{
    label:'Active Item',
    value:'Active',
    active : true
},{
    label:'Disabled Item',
    value:'Disabled',
    disabled:true
},{
    label:'Default Item',
    value:'Default',
},{
    divider:true
},{
    label:'Link Item',
    value:'Link',
    href:'http://www.pagurian.com'
}];

function handleSelect(props,target,event){
    console.log(props);
}

render(
    <div className='btn-toolbar'>
        <h2>bsStyle</h2>
        <Dropdown bsStyle='default'  items={items} >Default</Dropdown>
        <Dropdown bsStyle='primary'  items={items} onSelect={handleSelect}>Primary</Dropdown>
        <Dropdown bsStyle='default'  items={items} rename>Rename</Dropdown>
    </div>,
    document.getElementById('app-root')
);
