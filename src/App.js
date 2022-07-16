import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import CheckEmail from './pages/Check-Email';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MKBox from "components/MKBox";

// Material Kit 2 React themes
import theme from "./assets/theme";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/Honey.jpg";

const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import("./pages/Contact"));
const CheckEmail = React.lazy(() => import("./pages/Check-Email"));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <MKBox component="header" position="relative">
          <DefaultNavbar routes={routes} transparent light />
          <MKBox
            display="flex"
            alignItems="center"
            minHeight="100vh"
            sx={{
              backgroundImage: ({
                palette: { gradients },
                functions: { linearGradient, rgba },
              }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.5),
                  rgba(gradients.dark.state, 0.5)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Suspense fallback={<div className="center"><p></p></div>}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Check-Email" element={<CheckEmail />} />
              </Routes>
            </Suspense>
            <MKBox
              width="100%"
              position="absolute"
              zIndex={2}
              bottom="1.625rem"
            >
              <SimpleFooter light />
            </MKBox>
          </MKBox>
        </MKBox>
      </div>
    </ThemeProvider>
  );
}

export default App;
