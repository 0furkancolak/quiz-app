import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { useParams } from 'react-router-dom'
import * as api from '../../api/Api'
import QuestionsCard from '../../components/questionsCard/QuestionsCard'
import Model from '../../components/model/Model.jsx'

const Quiz = () => {
    const {difficulty,amount} = useParams()
    const [questionsData,setQuestionsData] = useState([])
    const [score,setScore] = useState(0)
    const [count,setCount] = useState(0)
    const [model,setModel] = useState(false)

    useEffect(() => {
      const getData = async() => {
        const data = await api.fetchQuizData(difficulty,amount)
        setQuestionsData(data)
      }
      getData()
    },[])

    console.log(questionsData)

  return (
    <div className='quiz'>
      {
        model ? <Model score={score} /> : <QuestionsCard
        questionsData={questionsData}
        score = {score}
        setScore = {setScore}
        count = {count}
        setCount = {setCount}
        model = {model}
        setModel = {setModel}
      />
      }
    </div>
  )
}

export default Quiz
