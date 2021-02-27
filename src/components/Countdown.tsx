import { useContext, useEffect, useState } from 'react';
// import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25*60)
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time%60

    // const [
    //     minutes,
    //     seconds,
    //     hasFinished,
    //     isActive,
    //     startCountdown,
    //     resetCountdown
    // ] = [25, 0, false, false, false, false]//useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setActive(true)
    }

    useEffect(()=>{
        if(active && time){
            setTimeout(()=>{
                setTime(time-1)
            }, 1000)
        }
    }, [active])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>{secondLeft}</div>
                <div>{secondRight}</div>
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <div className={styles.countdownContainer}>
    //             <div>
    //                 <span>{minuteLeft}</span>
    //                 <span>{minuteRight}</span>
    //             </div>
    //             <span>:</span>
    //             <div>
    //                 <span>{secondLeft}</span>
    //                 <span>{secondRight}</span>
    //             </div>
    //         </div>

    //         { hasFinished ? (
    //             <button
    //                 disabled
    //                 className={styles.countdownButton}
    //             >
    //                 Ciclo encerrado
    //             </button>
    //         ) : (
    //                 <>
    //                     { isActive ? (
    //                         <button
    //                             type="button"
    //                             className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
    //                             onClick={resetCountdown}
    //                         >
    //                             Abandonar ciclo
    //                         </button>
    //                     ) : (
    //                             <button
    //                                 type="button"
    //                                 className={styles.countdownButton}
    //                                 onClick={startCountdown}
    //                             >
    //                                 Iniciar um ciclo
    //                             </button>
    //                         )}
    //                 </>
    //             )}

    //     </div>
    // )
}