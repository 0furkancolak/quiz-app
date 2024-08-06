import React, { useEffect, useState } from 'react'
import './QuestionsCard.css'

const QuestionsCard = ({ questionsData, score, setScore, count, setCount, model, setModel }) => {
    const [timer, setTimer] = useState(60)

    const approvedChoice = (e) => {
        console.log(e.currentTarget.value)
        const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer
        console.log(checkAnswer)
        if (checkAnswer) {
            setScore(score + 100)
        }
        setCount(count + 1)
        if (count === 9) setModel(true)
        setTimer(60)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
            if (timer === 0 && count < 10) {
                setCount(count + 1)
                setTimer(60)
            } else if (count >= 10) {
                setModel(true)
            }

        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [timer])

    return (
        <div className='questionsCard'>
            <div className='questionsCard-timer'>{timer}</div>
            <p className='questionsCard-title'>
                {count + 1}/10 - <span
                    dangerouslySetInnerHTML={{ __html: questionsData[count]?.question }}
                />
            </p>
            {
                questionsData[count]?.answers.map((answer, i) => (
                    <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
                ))
            }
        </div>
    )
}

export default QuestionsCard
