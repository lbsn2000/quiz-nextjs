import QuestionModel from "../../model/questionModel"
import ResponseModel from "../../model/responseModel"

const questoes: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        ResponseModel.errada('Abelha'),
        ResponseModel.errada('Barata'),
        ResponseModel.errada('Pulga'),
        ResponseModel.certa('Barbeiro'), 
    ]),

    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.errada('Caju'),
        ResponseModel.errada('Mandioca'),
        ResponseModel.errada('Chuchu'),
        ResponseModel.certa('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        ResponseModel.errada('Manada'),
        ResponseModel.errada('Alcateia'),
        ResponseModel.errada('Rebanho'),
        ResponseModel.certa('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.errada('Equilátero'),
        ResponseModel.errada('Isóceles'),
        ResponseModel.errada('Trapézio'),
        ResponseModel.certa('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        ResponseModel.errada('Castro Alves'),
        ResponseModel.errada('Manuel Bandeira'),
        ResponseModel.errada('Carlos Gomes'),
        ResponseModel.certa('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        ResponseModel.errada('Perder'),
        ResponseModel.errada('Fracassar'),
        ResponseModel.errada('Desprezar'),
        ResponseModel.certa('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        ResponseModel.errada('Argentina'),
        ResponseModel.errada('Espanha'),
        ResponseModel.errada('Brasil'),
        ResponseModel.certa('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        ResponseModel.errada('Costa e Silva'),
        ResponseModel.errada('Emílio Médici'),
        ResponseModel.errada('Ernesto Geisel'),
        ResponseModel.certa('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        ResponseModel.errada('Ás'),
        ResponseModel.errada('Nove'),
        ResponseModel.errada('Rei'),
        ResponseModel.certa('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        ResponseModel.errada('Vela'),
        ResponseModel.errada('Vento'),
        ResponseModel.errada('Vênia'),
        ResponseModel.certa('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        ResponseModel.errada('Abrupção'),
        ResponseModel.errada('Abolição'),
        ResponseModel.errada('Abnegação'),
        ResponseModel.certa('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        ResponseModel.errada('Monte Branco'),
        ResponseModel.errada('Monte Fuji'),
        ResponseModel.errada('Monte Carlo'),
        ResponseModel.certa('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        ResponseModel.errada('Estômago'),
        ResponseModel.errada('Pâncreas'),
        ResponseModel.errada('Rim'),
        ResponseModel.certa('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        ResponseModel.errada('Déficit'),
        ResponseModel.errada('Indexação'),
        ResponseModel.errada('Indébito'),
        ResponseModel.certa('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        ResponseModel.errada('Cuca'),
        ResponseModel.errada('Curupira'),
        ResponseModel.errada('Boitatá'),
        ResponseModel.certa('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        ResponseModel.errada('Marechal Deodoro'),
        ResponseModel.errada('Barão de Mauá'),
        ResponseModel.errada('Marquês de Pombal'),
        ResponseModel.certa('Duque de Caxias'),
    ]),
]

export default questoes