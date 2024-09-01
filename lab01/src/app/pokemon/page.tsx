'use client';

import Navbar from '../../components/Navbar';
import Link from 'next/link'; 
import { useEffect, useState } from 'react';
import styles from './pokemon.module.css';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState<{ name: string, url: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      let allPokemons: { name: string, url: string }[] = [];
      let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

      try {
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const data = await response.json();
          allPokemons = allPokemons.concat(data.results);
          nextUrl = data.next;
        }
        setPokemons(allPokemons);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Pokemon List</h1>
      <ul className={styles.list}>
        {pokemons.map((pokemon, index) => (
          <li key={index} className={styles.listItem}>
            <Link href={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
