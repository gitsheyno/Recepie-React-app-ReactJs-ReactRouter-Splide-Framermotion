import { Routes, Route, useNavigate } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import About from './components/About';
import { GlobalStyles } from './components/Styles/GlobalSyleComponent'
import Cusine from './components/Cusine';
import Dec from './components/Dec';
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../src/hooks/useWindowSize';
function App() {
  const width = useWindowSize()
  const theme = {
    mobile: '768px'
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home

              width={width} />} />
            <Route path="cuisine">
              <Route path=":type" element={<Cusine />} />
              <Route path=':type/dec' element={<Dec />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>

      </>
    </ThemeProvider>
  );
}

export default App;
