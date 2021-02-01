import React, { useEffect, useState } from 'react'
import TaskListContextProvider from '../context/TaskListContext'
//import Form from './Form'


export default function TimingManage (){
    //for use the context hook

    const calculateTimeElapsed = () => {
        let year = new Date().getFullYear();
        
        //difference take final time minus initial time 
        const difference = +new Date(`10/01/${year}`) - +new Date();
        let timeElapsed = {};
        if (difference > 0) {
            timeElapsed = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeElapsed;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeElapsed());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeElapsed());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
            {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    
    return (
        <div>
            <TaskListContextProvider />
            
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );

    
};



