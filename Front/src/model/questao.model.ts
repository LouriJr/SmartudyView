import { Resposta } from "./resposta.model";

export class Questao {
    id_questao: string;
    texto_professor: string;
    texto_questao: string;
    data: string;
    respostas: Array<Resposta>;
}