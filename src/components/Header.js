import { NavLink } from 'react-router-dom'
import { Container } from './Styles/StyledContainer'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import Filter from './Filter'
import { StyledUl, Slink } from './Styles/StyledNav'
const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Filter />
          <StyledUl>
              <Slink to="cuisine/italian">
                <FaPizzaSlice />
                <h4>Italian</h4>
              </Slink>
           
              <Slink to="cuisine/American">
                <FaHamburger />
                <h4>American</h4>
              </Slink>
           
              <Slink to="cuisine/Thai">
                <GiNoodles />
                <h4>Thai</h4>
              </Slink>
            
            
              <Slink to="cuisine/Chinese">
                <GiChopsticks />
                <h4>Japanese</h4>
              </Slink>
          
          </StyledUl>
        </Container>
      </header>

    </>

  )
}

export default Header
