import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

import { MdOutlineCatchingPokemon } from 'react-icons/md';
import './home.css';

export default function Home(){

    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
        console.log(response.data.results);

        setPokemons(response.data.results);
        })
        .catch((err)=>{
        console.log(err);
        })

    }, []);


    return(
        <div className="pokemon-list">
            {pokemons.map((poke) => {
                return(
                    <Link to={`/pokemons/${poke.name}`}>
                        <ul>
                            <MdOutlineCatchingPokemon size={25} color='#FFF'/>
                            <li key={poke.name}>{poke.name}</li>
                        </ul>
                    </Link>
                    
                )
            })}
        </div>
    )
}