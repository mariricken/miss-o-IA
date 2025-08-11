const caixaPrincipal = document.querySelector('.caixa-principal');

const caixaPerguntas = document.querySelector('.caixa-perguntas');

const caixaAlternativas = document.querySelector('.caixa-alternativas');

const caixaResultado = document.querySelector('.caixa-resultado');

const caixaResultado = document.querySelector('.caixa-Resultado');

const lista = [];
const perguntas [
    {
        enunciado: "Pergunta 1",
        Alternativas: [ "Alternativa 1","Alternativas 2"]
 }

{
    enunciado: "Pergunta 2",
        Alternativas: ["Alternativa 1","Alternativas 2"]
    }
{

    enunciado: "Pergunta 3",
        Alternativas: ["Alternativa 1","Alternativas 2"]
    }

    {

    enunciado: "Pergunta 4",
        Alternativas: ["Alternativa 1","Alternativas 2"]
    }

    {

    enunciado: "Pergunta 5",
        Alternativas: ["Alternativa 1","Alternativas 2"]
    }


];

let atual = 0
let perguntaAtual;

function mostraPergunta{
   perguntaAtual = pergunta[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
