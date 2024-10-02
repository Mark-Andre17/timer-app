import { FC, useState } from 'react'
import '../assets/styles/button.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import ClearIcon from '@mui/icons-material/Clear';

type ButtonProps = {
    setMiliseconds: (value: number) => void
    ms: number
}

export const Button: FC<ButtonProps> = ({ setMiliseconds, ms }) => {

    const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null)
    
    const startTimer = (): void => {
        if (intervalId === null) {
            const newInterval = setInterval(() => {
                setMiliseconds(ms = ms + 10);
            }, 10)
        setIntervalId(newInterval)
        } 
    }
    
    const stopTimer = (): void => {
        if (intervalId!== null) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
        setMiliseconds(0)
    }

    const pauseTimer = (): void => {
        if (intervalId!== null) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    return (
        <div className="buttons">
            {/* <div className="wrapper"></div>
            <div className="wrapper"></div>
            <div className="wrapper"></div> */}
            <button className='btn' onClick={startTimer}><PlayArrowIcon/></button>
            <button className='btn' onClick={stopTimer}><ClearIcon/></button>
            <button className='btn' onClick={pauseTimer}><PauseIcon/></button>
        </div>
    )
}