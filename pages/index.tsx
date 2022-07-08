import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item: any, index: any) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons: data.results,
    }
  }
}

const Home: NextPage = ({ pokemons }: any) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokeball"
        />
      </div>
      <div className={styles.pokemon_container}>
        {
          pokemons.map((pokemon: any) => (
            <Card key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
    </>
  )
}

export default Home
