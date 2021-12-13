import Head from 'next/head'
import Link from 'next/link'
import Card from './components/Card'
import styles from './styles/Home.module.css'
import ScrollToTop from './scrolltotop/ScrollToTop'
// import FileUpload from './components/FileUpload'

export default function Home() {
 
  return (
    <div className={styles.mainDivHome}>
      <Head>
        <title>Posts App | Home </title>
      </Head>
      {/* <FileUpload /> */}
     <Card />
          <Link href="/ninjas">
            <a className={styles.btn}>All posts</a>
          </Link>
          <ScrollToTop />
    </div>
  )
}
