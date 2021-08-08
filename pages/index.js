import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { getPrimaria } from '../utils/primaria';

export default function Home() {

  useEffect(() => {
    getPrimaria();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Residencias</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido!
        </h1>

        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Administrador &rarr;</h2>
            <p>Registro y control</p>
          </a>

          <a href="/scanner" className={styles.card}>
            <h2>Escanear &rarr;</h2>
            <p>Verficación de Activos</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}
