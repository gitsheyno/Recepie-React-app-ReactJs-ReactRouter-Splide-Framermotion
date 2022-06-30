import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import { GlobalStyles } from './components/Styles/GlobalSyleComponent'
import Cusine from './components/Cusine';
import Search from './components/Search';
import Dec from './components/Dec';
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../src/hooks/useWindowSize';
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
function App() {
  const width = useWindowSize()
  const theme = {
    mobile: '768px'
  }
  const [id, setId] = useState('')
  const location = useLocation()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
      </>
    </ThemeProvider>
  );
}

export default App;
