import { FC } from 'react'
import '../assets/styles/timer.css'

type TimerProps = {
    ms: number
}


export const Timer: FC<TimerProps> = ({ ms }) => {
    
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const miliseconds = Math.floor((time % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(miliseconds).padStart(2, '0')}`;
    }
    
    return (
        <div className='timer'>
            <p className='timer__text'>{formatTime(ms)}</p>
        </div>
    )
}