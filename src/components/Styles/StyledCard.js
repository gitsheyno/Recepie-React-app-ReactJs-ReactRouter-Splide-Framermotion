import styled from "styled-components";

export const StyledCard = styled.div`
min-height: 15rem;

border-radius: 2rem;
overflow: hidden;
position: relative;


img{
    /* width:100%; */
      
border-radius:2rem;
position:relative;
object-fit:cover;

}
p{
position:absolute;
z-index:100;
left:50%;
bottom:0;
transform:translateX(-50%);
color:white;
font-weight:600;
height:40%;
width:100%;
text-align:center;
font-size:1.1rem;
display:flex;
align-items:center;
justify-content:center;

}

@media(max-width:${({ theme }) => theme.mobile}){
   
   p{
       font-size: 0.8rem;
   }
}
`