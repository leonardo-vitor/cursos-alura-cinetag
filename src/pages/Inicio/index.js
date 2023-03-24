import React, { useEffect, useState } from 'react';

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

import styles from './Inicio.module.css';

export default function Inicio() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/leonardo-vitor/cinetag-api/filmes")
      .then(resposta => resposta.json())
      .then(dados => {
        setFilmes(dados)
      })
  }, []);

  return (
    <>
      <Banner imagem="home" />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {filmes.map((filme) => <Card key={filme.id} {...filme} />)}
      </section>
    </>
  )
}
