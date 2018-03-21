import React from 'react';

export default (props) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={'button'}>

                {props.text}

        </button>)
}