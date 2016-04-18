import React from 'react';
import { render } from 'react-dom';
import Button from '../src/Button';

render(
    <div className='btn-toolbar'>

        <h2>bsStyle</h2>
        <Button bsStyle='default' >default</Button>
        <Button bsStyle='primary' >primary</Button>
        <Button bsStyle='link' >link</Button>

        <h2>bsState</h2>
        <Button bsState='success' >success</Button>
        <Button bsState='warning' >warning</Button>
        <Button bsState='danger' >danger</Button>
        <Button bsState='info' >info</Button>

        <h2>bsSize</h2>
        <Button bsSize='lg' >lg</Button>
        <Button bsSize='md' >md</Button>
        <Button bsSize='sm' >sm</Button>
        <Button bsSize='xs' >xs</Button>

    </div>,
    document.getElementById('app-root')
);
