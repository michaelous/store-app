import styled from 'styled-components'

export const CloseBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    height: 24px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    font-size: 19px;
    padding: 0 15px 0 15px;
    cursor: pointer;
    position: absolute;
    top: 0%;
    right: 0;
    height: ${props => props.size === 'large' ? '24px' : '20px'};
    width: ${props => props.size === 'large' ? '38px' : '18px'};
`;

