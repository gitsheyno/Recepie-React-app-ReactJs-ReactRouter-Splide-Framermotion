import { Routes, Route, useNavigate } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import About from './components/About';
import { GlobalStyles } from './components/Styles/GlobalSyleComponent'
import Cusine from './components/Cusine';
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/cuisine">
            <Route path="/cuisine/:type" element={<Cusine />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
