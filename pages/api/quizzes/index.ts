import questoes from "../dataBaseQuestions"
import { randomSort } from "../../../functions/randomArray"

export default (req,res) => {
    const ids = questoes.map(questions => questions.id)
    res.status(200).json(randomSort(ids))
}