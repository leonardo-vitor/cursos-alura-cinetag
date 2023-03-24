import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Player.module.css';
import NaoEncontrada from 'pages/NaoEncontrada';

export default function Player() {
  const parametros = useParams();
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/leonardo-vitor/cinetag-api/filmes?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setFilme(...dados);
      })
  }, []);

  if (!filme) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo><h1>Player</h1></Titulo>
      <section className={styles.container}>
        <iframe
          width="560"
          height="315"
          src={filme.link}
          title={filme.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  )
}
