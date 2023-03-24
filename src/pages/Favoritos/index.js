import React from 'react';
import { useFavoritoContext } from 'contextos/Favoritos';
import Titulo from 'components/Titulo';
import Banner from 'components/Banner';
import Card from 'components/Card';

import styles from './Favoritos.module.css';

export default function Favoritos() {
  const { favoritos } = useFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos" />

      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {favoritos.map((filme) => <Card key={filme.id} {...filme} />)}
      </section>
    </>
  )
}
