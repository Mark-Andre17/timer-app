import { FC, useState, useCallback } from 'react'
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
    
    function startTimer(): void {
        if (intervalId === null) {
            const newInterval = setInterval(() => {
                setMiliseconds(ms = ms + 10);
            }, 10)
        setIntervalId(newInterval)
        } 
    }

    function pauseTimer(): void  {
        if (intervalId !== null) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    function stopTimer(): void {
        if (intervalId !== null && ms > 0) {
            pauseTimer()
            clearInterval(intervalId)
            setIntervalId(null)
        }else if(ms){
            setMiliseconds(0)
        }
    }

    const start = useCallback(() => startTimer(),[])

    return (
        <div className="buttons">
            {/* <div className="wrapper"></div>
            <div className="wrapper"></div>
            <div className="wrapper"></div> */}
            <button className='btn' onClick={start}><PlayArrowIcon/></button>
            <button className='btn' onClick={stopTimer}><ClearIcon/></button>
            <button className='btn' onClick={pauseTimer}><PauseIcon/></button>
        </div>
    )
}