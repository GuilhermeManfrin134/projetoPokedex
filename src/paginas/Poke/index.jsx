import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import './poke.css';

export default function Poke(){

    
    const [pokemon, setPokemon] = useState([]);

    const { name } = useParams();
  
    useEffect(() => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
        console.log(response.data);

        setPokemon(response.data);
        })
        .catch((err)=>{
        console.log(err);
        })

    }, [name]);

    return(
        <div key={pokemon.name} className="pokemon-perfil">
            <div className="name-img">
                <h1>{pokemon.name}</h1>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </div>
            <div className="description">
                <h2>Abilities</h2>
                <ul>
                    {pokemon.abilities.map((item) => (
                        <li>{item.ability.name}</li>
                    ))}
                </ul>   
            </div>
        </div>
    )
}