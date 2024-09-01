// pages/pokemon.tsx
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon: any, index: number) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
