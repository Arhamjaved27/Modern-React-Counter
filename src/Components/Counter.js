import React, { useState, useEffect } from 'react'
import "./Counter.css"

function Counter() {

    const [count, setCount] = useState(0);
    const [totalgoal, setTotalGoal] = useState(10);
    const [isBouncing, setIsBouncing] = useState(false);
    const [message, setMessage] = useState("Set your goal and start counting!");

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }


    useEffect(() => {
        setIsBouncing(true);
        const id = setTimeout(() => setIsBouncing(false), 500);

        const percentage = (count / totalgoal) * 100;
        if (percentage >= 0 && percentage < 10) {
            document.body.style.backgroundColor = ''; // default color
            setMessage("Set your goal and start counting!");
        } else if (percentage >= 10 && percentage < 30) {
            document.body.style.backgroundColor = '#1d1955ff';
            setMessage("Keep going, you're doing great!");
        } else if (percentage >= 30 && percentage < 50) {
            document.body.style.backgroundColor = '#003553ff';
            setMessage("You're almost halfway there!");
        } else if (percentage >= 50 && percentage < 70) {
            document.body.style.backgroundColor = ' #810041ff';
            setMessage("More than halfway done, keep it up!");
        } else if (percentage >= 70 && percentage < 100) {
            document.body.style.backgroundColor = '#6d1a1aff';
            setMessage("Just a little more to reach your goal!");
        } else {
            document.body.style.backgroundColor = '#005e43ff';
            setMessage("Congratulations! You've reached your goal!");
        }

        return () => clearTimeout(id);
    }, [count, totalgoal]);

const handleTotalGoalChange = (e) => {
    const val = Number(e.target.value);
    if (isNaN(val)) return;
    setTotalGoal(val < 1 ? 1 : val);
};

return (

    <div className='main-counter'>
        <span className='Blur-circle'></span>

        <div className='dec-btn-contaner btn-contaner'>
            <button className='dec-btn op-btn' onClick={handleDecrement}>-</button>
        <span className='Blur-circle'></span>

        </div>

        <div className="counter-contaner">
            <h1 className='modern-counter'> Modern Counter </h1>
            <h2 className="toatl-counter">Total Goal</h2>
            <div className='goal-contaner'>
                <input type='number' value={totalgoal} className='goal-input' onChange={handleTotalGoalChange} />
                <h2 className='counts'>Counts</h2>
            </div>
            <h1 className={`counter-number ${isBouncing ? 'bounce' : ''}`}>{count}</h1>

            <h3 className='message'>{(() => {
                const pct = Number(((count / totalgoal) * 100).toFixed(0));
                if (pct <= 0) {
                    return ""
                } else if (pct >= 100) {
                    return "100%";
                } else {
                    return `${pct}%`;
                }

            })()} {message}</h3>

            <button className='reset-btn' onClick={() => { setCount(0); setTotalGoal(10); }}>Reset</button>

        </div>

        <div className='inc-btn-contaner btn-contaner'>
            <button className='inc-btn op-btn' onClick={handleIncrement}>+</button>
            <span className='Blur-circle'></span>

        </div>
    </div>

)
}

export default Counter