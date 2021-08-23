import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
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
                ["#15c515", 0.33],
                ["#d8d81e", 0.33],
                ["#d61414", 0.33],
            ]}>
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}