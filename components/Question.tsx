import QuestionModel from "../model/questionModel"
import styles from "../styles/Question.module.css"
import Enunciate from '../components/Enunciate'
import Response from  './Response'
import Timer from "./Timer"

const letras = [
    {valor: 'A', cor: 'rgb(216, 56, 35)'},
    {valor: 'B', cor: 'rgb(31, 133, 235)'},
    {valor: 'C', cor: 'rgb(12, 134, 12)'},
    {valor: 'D', cor: 'rgb(138, 10, 138)'},
]

interface QuestionProps {
    valor: QuestionModel
    repostasFornecida: (indice: number) => void
    endTime: () => void
    responseTime?: number
}

export default function Question(props: QuestionProps){
    
    const question = props.valor

    function renderizarRespostas(){
        return question.respostas.map((resp,i) => {
            return <Response
                key={`${question.id}${i}`}
                valor={resp}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                repostasFornecida={props.repostasFornecida}
            />
        })
    }
    
    return(
        <div className={styles.question}>
            <Enunciate text={question.enunciado}/>
            <Timer key={question.id} duration={props.responseTime ?? 10} endTime={props.endTime}/>
            {renderizarRespostas()}
        </div>
    )
}