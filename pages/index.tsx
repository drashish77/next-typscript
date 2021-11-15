import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Character, GetCharacterResults } from '../types'
import styles from '../styles/Home.module.css'
import imageLoader from '../imageLoader'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Tutorial</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <h3 className={styles.title}>This is Next Js tutorial</h3>
      <div className={styles.grid}>
        {characters.map((character) => {
          return (
            <div key={character.id} className={styles.card}>
              <Link href={`/characters/${character.id}`}>
                <a>
                  <h3>{character.name}</h3>
                </a>
              </Link>
              <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width='200'
                height='200'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character')

  const { results }: GetCharacterResults = await res.json()
  return {
    props: {
      characters: results,
    },
  }
}
export default Home
