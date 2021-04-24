import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barrakuda Sushi - Home</title>
        <link rel="icon" href="/sushi.svg" />
      </Head>

      <main className={styles.main}>
        <h1>Aqui aqui aqui</h1>
      </main>
    </div>
  )
}
