import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ashwin Preetham Lobo</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <strong>Ashwin Preetham Lobo</strong>
        <div>Principal Engineer at Envestnet | Yodlee</div>
      </main>

     
    </div>
  )
}
