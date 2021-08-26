import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/questionModel";
import Question from './Question';
import Button from './Button';
 
interface QuizProps {
    question: QuestionModel
    last: boolean
    questionResp: (question: QuestionModel) => void
    goNext: () => void
}

export default function Quiz(props: QuizProps){

    function repostasFornecida(indice: number){
        if(props.question.naoRespondida){
            props.questionResp(props.question.responderCom(indice))
        }
    }

    return(
        <div className={styles.quiz}>
            {props.question ?
                <Question
                    valor={props.question}
                    responseTime={10}
                    endTime={props.goNext}
                    repostasFornecida={repostasFornecida}
                    />
            : false
            } 
            <Button
                onClick={props.goNext}
                text={props.last ? 'Finalizar' : 'Próxima'}    
            />
        </div>
    )
}