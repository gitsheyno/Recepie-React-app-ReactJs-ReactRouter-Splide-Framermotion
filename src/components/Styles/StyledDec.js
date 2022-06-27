import styled from "styled-components";

export const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;

display: flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color:white
    }
h2{
    margin-bottom: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
h3{
    margin-top: 40px;
    a{
        color:black
    }
}

@media(max-width:1400px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width:100%
    }       
}
`

export const StyledButton = styled.button`
padding: 1rem 2rem;
color:#313131;
background-color: white;
border: 2px solid black;
font-weight: 600;
margin-right: 2rem;
margin-top: 40px;
`

export const Info = styled.div`
margin-left: 10rem;

@media(max-width:1400px){
    margin-left: initial;
}
`