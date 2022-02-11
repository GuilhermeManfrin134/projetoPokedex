import { Routes, Route, Navigate} from 'react-router-dom';

import Home from '../paginas/Home';
import Poke from '../paginas/Poke';

export default function Routex(){
    return(
        <Routes>
            <Route exact path='/pokemons/' element={<Home />} />
            <Route exact path='/pokemons/:name' element={<Poke />}/>
            <Route exact path='/' element={<Navigate replace to="/pokemons/" />} />
        </Routes>
    )
}