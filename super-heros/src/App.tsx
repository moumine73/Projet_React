import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Router from './routes/Router';

function App() {
  
  

  return (
    <>
      <Header />
      {/*<HeroLists/>*/}
      <Router />
      
      <Footer />
      
    </>
  );
}

export default App;
