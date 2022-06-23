import styled from "styled-components";

export const StyledForm = styled.form`

width:800px;
margin: 0 auto;
display: flex;
align-items: center;
position: relative;
input{
    background-color: #333;
    border: none;
    outline: none;
    padding:10px 50px;
    border-radius: 10px;
    width:400px;
    font-size: 1.3rem;
    color:white;
    width: 100%;
}
`

export const Search = styled.div`
position: absolute;
top:50%;
left:0 ;
color:white;
transform: translate(100%,-50%);
`