import styled from 'styled-components'

export const RemoveBtn = styled.button`
     background: white;
     outline: none;
     cursor: pointer;
     bottom: 10px;
     right: 10px;
     border: 2px solid #e0e0e0;
     position: absolute;
     color: black;
     width: ${props => props.size === 'small' ? '64px' : '80px'};
     height: ${props => props.size === 'small' ? '23px' : '28px'};
`;