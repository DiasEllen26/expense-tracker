import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.div`
background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 33%,
    hsl(337deg 100% 43%) 44%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%;
    height: 150px;
    text-align: center;
`;
export const HeaderText = styled.h1`
    margin:0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;
`;
export const Body = styled.div`
    margin: auto;
    max-width: 980px;  
    margin-bottom: 50px; 
`;