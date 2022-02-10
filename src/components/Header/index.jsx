import { Link } from "react-router-dom";

import { SiPokemon } from 'react-icons/si';
import './header.css';

export default function Header(){
    return(
        <header>
            <Link to='/'>
                POKEDEX
                <SiPokemon size={60} color='#FFF'/>
             </Link>
        </header>
    )
}