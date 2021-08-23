import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Question from '../components/Question'
import QuestionModel from '../model/questionModel'
import ResponseModel from '../model/responseModel'
import { useState } from 'react'

    const questionMold = new QuestionModel(1, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.errada('123'),
        ResponseModel.errada('456'),
        ResponseModel.errada('789'),
        ResponseModel.certa('certa')
    ])

export default function Home() {
    
    const [question, setQuestion] = useState(questionMold)

    function repostasFornecida(indice: number) {
        setQuestion(question.responderCom(indice))
    }

    return (
        <div className={styles.container}>
            <Head>  
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/questionmark_icon.svg" />
            </Head>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <Question valor={question} repostasFornecida={repostasFornecida}></Question>
            </div>
    </div>
    )
}
