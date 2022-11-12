import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
        <h1 className={styles.title}>
          ドミニオンを作ろう！
        </h1>

        <Link
            href="/development-diary"
            className={styles.description}>
          細く長く頑張ろう！
        </Link>

        <div className={styles.grid}>
            <Link
                href="/game"
                className={styles.card}
            >
                <h2>Game &rarr;</h2>
                <p>ゲームを開始する</p>
            </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
