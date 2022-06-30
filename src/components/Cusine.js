import { useParams, Link } from "react-router-dom"
import { Container } from "./Styles/StyledContainer"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from 'framer-motion'

const Cusine = ({ setId }) => {
    const { type } = useParams()
    const [cuisine, setCuisine] = useState([])
    useEffect(() => {
        const getCuisine = async (name) => {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bf644fb4e022468fa632e58a5fe2701d&cuisine=${name}`)
            const recipes = await data.json()
            setCuisine(recipes.results)
            console.log(recipes)

        }
        getCuisine(type)
        console.log(type)
    }, [type])

    const handleSet = (e) => {
        console.log(e.target)
    }
    return (
        <Container>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {cuisine.map(item => (
                    <Link
                        onClick={(e) => handleSet(e)}
                        key={item.id}
                        to={`/recipe/${item.id}`}>
                        <Card >
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                ))}
            </Grid>
        </Container>
    )
}

const Grid = styled(motion.div)`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem
`

const Card = styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}
`
export default Cusine
