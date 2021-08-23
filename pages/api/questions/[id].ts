import questoes from "../dataBaseQuestions"

export default (req,res) => {

    const idSelecionado = +req.query.id

    const filtroQuestao = questoes.filter(questao => questao.id === idSelecionado)

    if(filtroQuestao.length === 1){
        const mainQuestion = filtroQuestao[0].shuffleResponses() 
        res.status(200).json(mainQuestion.paraObjeto())
    }else{
        res.status(404).send()
    }
}
