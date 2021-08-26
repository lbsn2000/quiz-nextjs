import { useRouter } from "next/dist/client/router"
import styles from '../styles/results.module.css'
export default function result() {
    
    const router = useRouter()

    const total = +router.query.toral
    const certas = +router.query.certas
    const percentual = Math.round((certas/total) * 100)

    return(
        <div>
            <div className={styles.result}>Resultado</div>
            <div>{total}</div>
            <div>{certas}</div>
            <div>{`${percentual}%`}</div>
        </div>
    )
}