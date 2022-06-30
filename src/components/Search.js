import {Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Container } from "./Styles/StyledContainer"
const Search = () => {
    const [searched, setSearched] = useState([])
    const [data, setData] = useState(false)
    const { search } = useParams()
    useEffect(() => {
        const getCuisine = async (name) => {
            try {
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bf644fb4e022468fa632e58a5fe2701d&query=${name}`)
                const recipes = await data.json()
                if (recipes.results) {
                    setData(true)
                }
                setSearched(recipes.results)
                console.log(recipes.results)

            } catch (err) {
                setData(false)
                console.log(err.message)
            } finally {

            }
        }
        getCuisine(search)
        console.log(search)
    }, [search])
    return (
        <Container>
            {data &&
                <Grid>
                    {searched.map(item => (
                        <Link
                            key={item.id}
                            to={`/recipe/${item.id}`}>
                            <Card >
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Card>
                        </Link>
                    ))}
                </Grid>
            }
            {!data &&
                <>
                    <p>Your Post Not Found</p>
                    <Link to="/">Please visit our home page</Link>
                </>
            }
        </Container>
    )
}

const Grid = styled.div`
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
export default Search
