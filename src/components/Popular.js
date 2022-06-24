import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from './Styles/StyledContainer';
import '@splidejs/react-splide/css'
import styled from 'styled-components';
import { StyledCard } from './Styles/StyledCard';
import { useState, useEffect } from 'react';
const Popular = ({ width }) => {
    const [popular, setPopular] = useState([])
    const [amount, setAmount] = useState(3)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=bf644fb4e022468fa632e58a5fe2701d&number=9`)
                const data = await api.json()
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
        console.log(width)
        console.log(window.innerWidth)
    }
    return (

        <Container>

            <Wrapper>

                <h3
                    style={{ marginBottom: '20px' }}
                >Popular pics</h3>

                <Splide
                    onResize={(e) => update(e)}
                    style={{ display: 'flex' }}
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
                            <StyledCard>
                                <Gradient />

                                <p
                                >{recepie.title}</p>
                                <img src={recepie.image} alt={recepie.title} />
                            </StyledCard>
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
`



const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`
export default Popular
