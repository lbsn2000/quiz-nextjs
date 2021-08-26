import { randomSort } from "../functions/randomArray"
import ResponseModel from "./responseModel"

export default class QuestionModel {
    #id: number
    #enunciado: string
    #respostas: ResponseModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, repostas: any[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = repostas
        this.#acertou = acertou        
    }    

    get id(){
        return this.#id
    }
    
    get enunciado(){
        return this.#enunciado
    }
    
    get respostas(){
        return this.#respostas
    }
    
    get acertou(){
        return this.#acertou
    }

    get naoRespondida(){
        return !this.respondida
    }

    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true
        }
        return false
    }

    responderCom(indice: number): QuestionModel{
        const correta = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i)=> {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestionModel(this.#id, this.#enunciado, respostas, correta)
    }

    shuffleResponses(): QuestionModel{
        let sortResponses = randomSort(this.#respostas)
        return new QuestionModel(this.#id, this.#enunciado, sortResponses, this.#acertou)
    }

    static criarUsandoObjeto(obj: QuestionModel): QuestionModel {
        const respostas = obj.respostas.map(resp => ResponseModel.criarUsandoObjeto(resp))
        return new QuestionModel(obj.id, obj.enunciado, respostas, obj.acertou)
    } 

    paraObjeto(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            acertou: this.#acertou,
            respondida: this.respondida,
            respostas: this.#respostas.map(r => r.paraObjeto()),
    
        }        
    }
}
