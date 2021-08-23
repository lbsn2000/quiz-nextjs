import QuestionModel from "../model/questionModel"
import styles from "../styles/Question.module.css"
import Enunciate from '../components/Enunciate'
import Response from  './Response'

const letras = [
    {valor: 'A', cor: 'orange'},
    {valor: 'B', cor: 'darkorchid'},
    {valor: 'C', cor: 'dodgerblue'},
    {valor: 'D', cor: 'darkgreen'},
]

interface QuestionProps {
    valor: QuestionModel
    repostasFornecida: (indice: number) => void
}

export default function Question(props: QuestionProps){
    
    const question = props.valor

    function renderizarRespostas(){
        return question.respostas.map((resp,i) => {
            return <Response
                key={i}
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
            {renderizarRespostas()}
        </div>
    )
}