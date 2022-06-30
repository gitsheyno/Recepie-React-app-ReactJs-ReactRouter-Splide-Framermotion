import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from './Styles/StyledContainer';
import '@splidejs/react-splide/css'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
const Veji = () => {
    const [popular, setPopular] = useState([])
    const [amount, setAmount] = useState(3)
    useEffect(() => {

        const fetchData = async () => {
            try {

                const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=bf644fb4e022468fa632e58a5fe2701d&number=9&tag=vegetarian`)
                const data = await res.json()
                setPopular(data.recipes)
                console.log(data)

            } catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    }, [])

    const update = (e) => {
        if (window.innerWidth > 900) {
            setAmount(3)
        }
        else if (window.innerWidth > 700) {
            setAmount(2)
        }
        else {
            setAmount(1)
        }

        console.log(window.innerWidth)
    }
    return (
        <Container>
            <Wrapper>
                <h3>Vegeterian picks</h3>
                <Splide
                    onResize={(e) => update(e)}
                    options={{
                        perPage: amount,
                        gap: '2rem',
                        pagination: false,
                        drag: 'free',
                        arrows: false
                    }}>
                    {popular.map(recepie => (
                        <SplideSlide
                            key={recepie.id}
                        >
                            <Link to={`/recipe/${recepie.id}`}>
                                <Card>
                                    <Gradient />

                                    <p
                                    >{recepie.title}</p>
                                    <img src={recepie.image} alt={recepie.title} />
                                </Card>
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </Wrapper>
        </Container>
    )
}
const Wrapper = styled.div`
margin:4rem 0;
padding: 20px;
h3{
    margin-bottom: 20px;
}
`
const Card = styled.div`
min-height: 20rem;

border-radius: 2rem;
overflow: hidden;
position: relative;


img{

border-radius:2rem;
position:relative;
object-fit: cover;
object-position: center;
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
`


const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`
export default Veji
