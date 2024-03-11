import Image from 'next/image'
import styles from './page.module.css'
import Works from './components/works/works'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/data/discography.json',
    'utf8'
  )
  const data = JSON.parse(file)

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/kmpiekarski.svg"
          alt="K.M. Piekarski Logo"
          width={152}
          height={29}
          priority
        />
      </div>
      <Works {...data.discography} />
    </main>
  )
}
