import React, { useContext, useState, useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MissionDetails from "./pages/MissionDetails/MissionDetails";
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import GoToTop from './components/GoToTop/GoToTop';
import { Context } from './context/Context';
import NotFound from './pages/NotFound/NotFound';


const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#2C3333",
      secondary: "#395B64",
    },
    secondary: {
      main: "#A5C9CA",
      secondary: "#E7F6F2",
    },
  },
});

function App() {
  
  const { missions } = useContext(Context)

  const [scrollVal, setScrollVal] = useState(false)

  useEffect(() => {
     window.addEventListener("scroll", () => {
       const y = window.scrollY;
       y > 300 ? setScrollVal(true) : setScrollVal(false)
     })
     
  }, [])

  return (

    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/missionDetails/:id" element={<MissionDetails/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {!missions.length && <Loader/>}
        {scrollVal && <GoToTop/>}
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
