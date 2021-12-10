import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles/Home.module.css'

const NotFound = () => {

const router = useRouter();   

useEffect(() => {
    setTimeout(() => {
        router.push('/')
    },3000)
},[])

    return (
        <div className={styles.notFound}>
            <h1>Ooooops.....  404</h1>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound
