import React from 'react';
import styled from 'styled-components';

const SimpleButton = styled.button`
    background-color: ${props => props.outlined ? 'transparent' : '#0077b6'};
    font-weight: bold;
    color: ${props => props.outlined ? '#0077b6' : 'white'};
    padding: 0.5rem 0.8rem;
    margin: 0.5rem;
    border: ${props => props.outlined ? ' 2px #0077b6 solid' : '2px #0077b6 solid'};
    border-radius: 5px;
    outline: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: .2s;
    &:hover {
        background-color: ${props => props.outlined ? '#0077b6': '#023e8a'};
        border: ${props => props.outlined ? ' 2px #0077b6 solid' : '2px #023e8a solid'};
        color: ${props => props.outlined && 'white'};
        ${props => !props.disabled && 'transform: scale(1.2)'};
    }
    &:active, &:focus {
        outline: none !important;
    }
`;

const Button = (props) => {

    return (
        <SimpleButton
            type="button"
            disabled={props.disabled}
            outlined={props.outlined}
            onClick={props.onClick}
        >
            {props.children}
        </SimpleButton>
    );
}

export default Button;