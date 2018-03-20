import React from 'react';

export default (props) => {
    return (<button onClick={props.onClick} className={'button'}>{props.text}</button>)
}