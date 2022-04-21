const answer = [
  "Sim!",
  "Não!",
  "Tente mais tarde.",
  "Pergunte novamente.",
  "Talvez",
  "Não sou capaz de opinar.",
  "Melhor não.",
  "Acho uma boa ideia.",
  "Tem certeza disso?",
  "Pense mais um pouco.",
  "De forma alguma!",
  "Deixa de drama.",
  "Você poderia fazer uns exercícios.",
  "Não se precipite",
  "Não sinto muita segurança sobre isso.",
  "Melhor você adiar mais um pouco.",
  "Tenha paciência!",
  "Calma.",
  "A vida pode ser mais do que isso.",
  "Não se limite a esse tipo de coisa",
  "Entenda o que seu corpo quer te dizer",
  "Aceite o que está sentindo.",
  "Autoconhecimento!",
  "É o quê? Não entendi.",
  "Tá tudo bem!",
  "Não espere pela aprovação dos outros",
  "Bebe uma aguinha e relaxa.",
  "Esquece isso! Sabia que treinar os superiores ajuda na postura e aumenta a força melhorando o desempenho no treino de inferiores?",
];

function makeQuestion(question) {
  if (!question) return alert("Faça uma pergunta");

  const index = Math.floor(Math.random() * answer.length);
  console.log(index.length);
  alert("Resposta: " + answer[index]);
}
