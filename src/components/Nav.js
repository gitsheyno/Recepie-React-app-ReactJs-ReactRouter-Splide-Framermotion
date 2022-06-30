import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi"
const Nav = () => {
    return (
        <nav>
            <StyledNav>
                <GiKnifeFork />
                <Logo to="/">Delisousss</Logo>
            </StyledNav>
        </nav>
    )
}

export default Nav

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 400;
    color:black;
    font-family: cursive;
    
`
const StyledNav = styled.div`
    padding:4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`