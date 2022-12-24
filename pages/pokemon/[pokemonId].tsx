import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Pokemon.module.css";


export const getStaticPaths = async () => {

  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //params
  const paths = data.results.map((pokemon: any, index: any) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    }
  });

  return {


    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json();

  return {
    props: {
      pokemon: data
    }
  }
}

export default function Pokemon({ pokemon }: any) {
  return (
    <div className={styles.pokemon_container}>
      <Link href="/"><a className={styles.link}>Voltar</a></Link>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número: </h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo: </h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: any, index: any) => (
            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>

    </div>
  )

}