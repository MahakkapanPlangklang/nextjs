'use client';

import Navbar from '../../../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './pokemonDetail.module.css';

const PokemonDetail = ({ params }: { params: { id: string } }) => {
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokemon not found</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.header}>{pokemon.name}</h1>
        <img className={styles.image} src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className={styles.info}>
          <p>Height: {pokemon.height / 10} m</p>
          <p>Weight: {pokemon.weight / 10} kg</p>
          <p>Types: {pokemon.types.map((typeInfo: any) => typeInfo.type.name).join(', ')}</p>
          <p>Abilities: {pokemon.abilities.map((abilityInfo: any) => abilityInfo.ability.name).join(', ')}</p>
        </div>
        <button className={styles.button} onClick={() => router.push('/pokemon')}>Back to list</button>
      </main>
    </div>
  );
};

export default PokemonDetail;
