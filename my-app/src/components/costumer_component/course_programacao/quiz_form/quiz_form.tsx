import React, { useState } from "react";
import './quiz_form.css'; // Importando o CSS para estilização

type Question = {
  id: number;
  pergunta: string;
  alternativas: string[];
  resposta_correta: number;
};

const questions: Question[] = [
  {
    id: 1,
    pergunta: "O que é um algoritmo?",
    alternativas: [
      "Um tipo de linguagem de programação",
      "Um software de computador",
      "Uma sequência lógica de instruções para resolver um problema",
      "Uma variável especial",
    ],
    resposta_correta: 2,
  },
  {
    id: 2,
    pergunta: "Qual destas é uma estrutura condicional?",
    alternativas: ["if/else", "for", "while", "switch"],
    resposta_correta: 0,
  },
  {
    id: 3,
    pergunta: "Qual é a principal finalidade de um loop (laço)?",
    alternativas: [
      "Armazenar dados",
      "Repetir um bloco de código várias vezes",
      "Comparar duas variáveis",
      "Executar funções matemáticas",
    ],
    resposta_correta: 1,
  },
  {
    id: 4,
    pergunta: "Em qual linguagem de programação usamos 'Console.WriteLine' para exibir algo?",
    alternativas: ["Python", "Java", "C#", "JavaScript"],
    resposta_correta: 2,
  },
  {
    id: 5,
    pergunta: "Qual é o tipo de dado que representa texto em C#?",
    alternativas: ["int", "float", "bool", "string"],
    resposta_correta: 3,
  },
];

function QuizForm() {
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (questionId: number, alternativeIndex: number) => {
    setAnswers({ ...answers, [questionId]: alternativeIndex });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let correct = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.resposta_correta) {
        correct++;
      }
    });
    setScore(correct);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Questionário de Programação</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <h5>{question.pergunta}</h5>
            {question.alternativas.map((alt, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.id}`}
                  id={`question-${question.id}-alt-${index}`}
                  value={index}
                  checked={answers[question.id] === index}
                  onChange={() => handleChange(question.id, index)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`question-${question.id}-alt-${index}`}
                >
                  {alt}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Enviar Respostas
        </button>
      </form>

      {score !== null && (
        <div className="alert alert-info mt-4">
          Você acertou {score} de {questions.length} perguntas!
        </div>
      )}
    </div>
  );
}

export default QuizForm;
