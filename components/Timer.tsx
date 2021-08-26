import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
    key: any
    duration: number
    endTime: () => void
}

export default function Timer(props: TimerProps){
    return(
        <div className={styles.timer}>
            <CountdownCircleTimer size={100} 
            isPlaying
            duration={props.duration}
            onComplete={props.endTime}
            colors={[
                ["#00ff00", 0.33],
                ["#ffff00", 0.33],
                ["#ff0000", 0.33],
            ]}>
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}