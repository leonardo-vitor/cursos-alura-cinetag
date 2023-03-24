import React from 'react';
import { useFavoritoContext } from 'contextos/Favoritos';

import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeFavorito from './favorito.png';
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa, link }) {
  const { favoritos, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favoritos.some(favorito => favorito.id === id);
  const icone = ehFavorito ? iconeFavorito : iconeFavoritar;

  return (
    <div className={styles.container}>

      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {
        adicionarFavorito({ id, titulo, capa, link })
      }} />
    </div>
  )
}
