import ResponseModel from "./responseModel"

export default class QuestionModel {
    #id: number
    #enunciado: string
    #respostas: ResponseModel[]
    #acertou: boolean
    //#respondida: boolean

    constructor(id: number, enunciado: string, repostas: any[], acertou= false){
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

    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true
        }
        return false
    }

    paraObjeto(){
        return{
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(r => r.paraObjeto()),
            acertou: this.#acertou
    
        }        
    }
}
