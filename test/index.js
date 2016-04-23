import React from 'react';
import { render } from 'react-dom';
import {Button,ButtonGroup, Dropdown,ButtonToolbar,ButtonCheckbox} from '../src/index';

render(
    <div className="row">
        <h1 className="page-header">Button</h1>
        <ButtonToolbar>
            <h2>shape</h2>
            <Button shape='default' >default</Button>
            <Button shape='primary' >primary</Button>
            <Button shape='success' >success</Button>
            <Button shape='warning' >warning</Button>
            <Button shape='danger' >danger</Button>
            <Button shape='info' >info</Button>
            <Button shape='link' >link</Button>

            <h2>Size</h2>
            <Button size='lg' >large</Button>
            <Button size='md' >medium</Button>
            <Button size='sm' >small</Button>
            <Button size='xs' >xsmall</Button>

        </ButtonToolbar>
    </div>,
    document.getElementById('button_wrapper')
);


render(
    <div className="row">
        <h1 className="page-header">ButtonGroup</h1>
        <ButtonToolbar>
            <ButtonGroup>
                <Button shape="default">Left</Button>
                <Button shape="default">Middle</Button>
                <Button shape="default">Right</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button shape="primary">Left</Button>
                <Button shape="primary">Middle</Button>
                <Button shape="primary">Right</Button>
            </ButtonGroup>

            <ButtonGroup type='checkbox'>
                <Button shape="default">Checkbox</Button>
                <Button shape="default">Checkbox</Button>
                <Button shape="default">Checkbox</Button>
            </ButtonGroup>

            <ButtonGroup type='radio'>
                <Button shape="default">Radio</Button>
                <Button shape="default">Radio</Button>
                <Button shape="default">Radio</Button>
            </ButtonGroup>
        </ButtonToolbar>




    </div>,
    document.getElementById('button_group_wrapper')
);




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
    <div className="row">
        <h1 className="page-header">Dropdown</h1>
        <ButtonToolbar>
            <h2>Shape</h2>
            <Dropdown shape='default'  items={items} >Default</Dropdown>
            <Dropdown shape='primary'  items={items} onSelect={handleSelect}>Primary</Dropdown>
        </ButtonToolbar>
        <ButtonToolbar>
            <h2 className='clear'>Rename</h2>
            <Dropdown shape='default'  items={items} rename>Rename</Dropdown>
        </ButtonToolbar>
    </div>,
    document.getElementById('dropdown_wrapper')
);
