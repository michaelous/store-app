import styled from 'styled-components'

export const PageArrow = styled.span`
    display: block;
    width: 5px;
    height: 5px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    margin: 4px;
    position: relative;
    bottom: 1px;
    opacity:${props => props.disabled ? ' 0.1' : '1'};
    cursor: ${props => props.disabled ? ' not-allowed' : 'pointer'};   
    transform: ${props => props.direction === 'right' ? 'rotate(135deg)' : 'rotate(-45deg)'};
`;

