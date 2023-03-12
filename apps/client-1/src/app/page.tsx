import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./utils/auth'),
  { ssr: false } // <-- not including this component on server-side
)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      Client 1
    </main>
  )
}
