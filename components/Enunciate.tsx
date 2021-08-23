import styles from '../styles/Enunciate.module.css'

interface EnunciateProps {
    text: string
}

export default function Enunciate(props: EnunciateProps) {
    return(
        <div className={styles.enunciate}>
            <span className={styles.text}>{props.text}</span>
        </div>
    )
}