import { useState, useEffect } from "react";

import axios from 'axios';

export default function Home(){

    const [pokemon, setPokemon] = useState([]);
  
    useEffect(() => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
        console.log(response.data.results);

        setPokemon(response.data.results);
        })
        .catch((err)=>{
        console.log(err);
        })

    }, []);


    return(
        <div className="pokemon-lis">
            {pokemon.map((poke) => {
                return(
                    <ul>
                        <li key={poke.name}>{poke.name}</li>
                    </ul>
                )
            })}
        </div>
    )
}