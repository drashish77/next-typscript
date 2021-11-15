import { Character } from '../../types'
import Image from 'next/image'
import imageLoader from '../../imageLoader'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styles from '../../styles/Character.module.css'

const CharacterPage = ({ character }: { character: Character }) => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className=''>
        <h3>{character.name}</h3>
        <Image
          src={character.image}
          alt={character.name}
          width='500'
          height='500'
          loader={imageLoader}
          unoptimized
        />
      </div>
    </div>
  )
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  )
  const character = await res.json()
  return { props: { character } }
}

export default CharacterPage
