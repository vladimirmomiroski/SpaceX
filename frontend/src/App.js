import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MissionDetails from "./pages/MissionDetails/MissionDetails";

function App() {
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

  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/missionDetails/:id" element={<MissionDetails/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
