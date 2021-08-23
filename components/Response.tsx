import ResponseModel from "../model/responseModel";
import styles from '../styles/Response.module.css'

interface ResponseProps {
    valor: ResponseModel
    indice: number
    letra: string 
    corFundoLetra: string
    repostasFornecida: (indice: number) => void
}

export default function Response(props: ResponseProps){

    const resposta = props.valor

    return(
        <div className={styles.response}
        onClick={() => props.repostasFornecida(props.indice)}>
            <div className={styles.responseContent}>
                {!resposta.revelada
                ?   (
                    <div className={styles.cardFront}>
                        <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>
                            {props.letra}
                        </div>
                        <div className={styles.valor}>
                            {resposta.valor}
                        </div>
                    </div>
                ) : (
                    <div className={styles.cardBack}>
                        {resposta.certa 
                        ?   (
                            <div className={styles.certa}>
                                <div>A Resposta certa é...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        ) : (
                            <div className={styles.errada}>
                                <div>A Resposta informada está errada...</div>
                                <div className={styles.valor}>{resposta.valor}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}