import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledUl = styled.ul`
display: flex;
margin-top: 40px;
list-style-type: none;
text-align: center;
width:100%;
justify-content: center;

`

export const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
width: 6rem;
height: 6rem;
background-color: #444;

cursor: pointer;
transform: scale(0.8);

h4{
    font-size: 1.2rem;
    color:white   
}
svg{
    font-size: 1.5rem;
    color:white  

}

&.active{
    background:linear-gradient(to right,#f27121,#e94057);
    svg{
        color:black
    }
    h4{
        color:black
    }
}

`