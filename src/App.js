import './App.css';
import Main from './homeSite/Main';
// import About from './homeSite/About';
import Header from './homeSite/components/Header';
import ContactMe from './homeSite/contactForm/ContactMe';
import Footer from './homeSite/components/Footer';
import Prices from './homeSite/prices/Prices';
import ThreeSteps from './homeSite/steps/ThreeSteps';

import theme from './homeSite/theme/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BSHeader from './homeSite/components/BSHeader';


const App = () => {

  return (
    <div className="App">
      {/* <Header /> */}
      <BSHeader />
      <Main />
      {/* <About /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThreeSteps />

      </ThemeProvider>
      <Prices />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
