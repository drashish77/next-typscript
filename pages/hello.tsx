import Head from 'next/head'

const hello = () => {
  return (
    <div>
      <Head>
        <title>Next Tutorial | Hello</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <h1>this is hello page</h1>
    </div>
  )
}

export default hello
