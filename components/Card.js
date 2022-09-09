import styles from "../styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

function Card({ pokemon }) {
  const src = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`;

  return (
    <div className={styles.card}>
      <Image
        loader={() => src}
        src={src}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}

export default Card;
