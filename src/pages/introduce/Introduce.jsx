import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {

    const difficulty = ["easy","medium","hard"]
    const [difficultyChange,setDifficultyChange] = useState("easy")
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange,"difficultyChange")

    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
        }
    }

  return (
    <div className='introduce'>
        <div className="introduce-container">
            <div>
                <h3 className='ıntroduce-h3'>Dünyanın En İyi Quiz Testleri .com.tr</h3>
                <p className='ıntroduce-p'>made with Furkan Çolak</p>   
            </div>
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
            <p className='basla-p'>lütfen en az bir kere seçim yapıp başlaya basın</p>
            <div onClick={startQuiz} className='introduce-btn'>Quize Başla</div>
        </div>
    </div>
  )
}

export default Introduce
