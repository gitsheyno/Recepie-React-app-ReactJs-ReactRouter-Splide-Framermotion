import { Splide, SplideSlide } from '@splidejs/react-splide';
import content from './Content';
import { Container } from './Styles/StyledContainer';
import Popular from './Popular';
import '@splidejs/react-splide/css'
import styled from 'styled-components';
import Veji from './Veji';

const Home = ({width}) => {

  return (

    <>
      <Popular
        width={width}
      />
      <Veji />
    </>

  )
}
const StyledPouplar = styled.div`
min-height: 20rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

border:1px solid red;
p{
 position: absolute;
 z-index: 100;
 left: 50%;

}
`
const Wrapper = styled.div`
margin: 4rem 0;
display: flex;
width:100%;
height:100px;
border: 1px solid teal;
`
export default Home
