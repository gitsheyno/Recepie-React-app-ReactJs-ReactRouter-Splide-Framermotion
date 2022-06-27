import { Routes, Route, useNavigate } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import About from './components/About';
import { GlobalStyles } from './components/Styles/GlobalSyleComponent'
import Cusine from './components/Cusine';
import Search from './components/Search';
import Dec from './components/Dec';
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../src/hooks/useWindowSize';
import { useState } from 'react'
function App() {
  const width = useWindowSize()
  const theme = {
    mobile: '768px'
  }
  const [id, setId] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home

              width={width} />} />
            <Route path="cuisine">
              <Route path=":type" element={<Cusine
                setId={setId}
              />} />
            </Route>
            <Route path="searched">
              <Route path=":search" element={<Search
                setId={setId}
              />} />
            </Route>
            <Route path="recipe/:name" element={<Dec />} />
          </Route>
        </Routes>

      </>
    </ThemeProvider>
  );
}

export default App;
