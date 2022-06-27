import React from 'react'
import { Container } from './Styles/StyledContainer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailWrapper, StyledButton, Info } from './Styles/StyledDec'
const Dec = () => {
  let { name } = useParams()
  const [data, setData] = useState({})
  const [activeTabs, setActiveTabs] = useState('Instructions')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=bf644fb4e022468fa632e58a5fe2701d`)
        const dataDetail = await res.json()
        console.log(dataDetail)
        setData(dataDetail)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData()
  }, [])
  return (
    <Container>
      <DetailWrapper>
        <div>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.title} />
        </div>
        <Info>
          <StyledButton className={activeTabs === 'Instructions' ? 'active' : ''} onClick={() => setActiveTabs('Instructions')}>
            Instructions
          </StyledButton>
          <StyledButton className={activeTabs === 'Ingridients' ? 'active' : ''} onClick={() => setActiveTabs('Ingridients')} >
            Ingridients
          </StyledButton>
          {activeTabs === 'Instructions' &&
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: data.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{ __html: data.instructions }}></h3>
            </div>
          }
          {activeTabs === 'Ingridients' &&
            <ul>
              {data.extendedIngredients.map(item => (
                <li
                  key={item.id}
                >
                  {item.original}
                </li>
              ))}
            </ul>
          }
        </Info>
      </DetailWrapper>
    </Container>
  )
}

export default Dec
