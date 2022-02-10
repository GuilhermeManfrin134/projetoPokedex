import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Routex from './rotas/Routex';

//https://pokeapi.co/api/v2/pokemon/


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routex />  
    </BrowserRouter>
  );
}

export default App;
