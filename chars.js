const classes = [
  {
    name: "Mago Sombrio",
    bonus: "Ganhe um dado para ações que você dá uma descrição mágica.",
    equipment: [
      "Cajado mágico",
      "Livro enorme",
      "Pochete de ingredientes",
      "O olhar distante de alguém que quer se lembrar o nome de alguém",
    ],
    special: [
      "Míssil Distraído",
      "Você solta os poderes do caos mas algo brilhante te distrai enquanto conjura.\n" +
        "Role todos os dados que coletou até agora: para cada 6 você ganha um dado, e para cada 1 você perde um dado.",
    ],
    id: 0,
  },
  {
    name: "Bruxo Estranho",
    bonus: "Ganhe um dado para ações que você culpa outra em outra pessoa",
    equipment: [
      "uma adaga ornada",
      "um bastão estranho",
      "jóias que dão calafrios em todos",
      "um hábito de ter conversas inteiras com o nada",
    ],
    special: [
      "Praguejar",
      "Você amaldiçoa um grupo de monstros em nome do seu patrono.\n" +
        "O DM põe um timer de 60 s, você ganha um dado para cada insulto único que fizer. Cada vez que alguém cuspir a bebida, você ganha um dado extra.",
    ],
    id: 1,
  },
  {
    name: "Guerreiro Padrão",
    bonus: "Ganhe um dado para ações chatas ou padrão",
    equipment: [
      "Espada enorme",
      "Armadura brilhante",
      "Uma receita de guisado encorpada",
      "Músculos",
      "Uma história sobre seus músculos",
      "Um treino para ter músculos como ele",
    ],
    special: [
      "Sabre Sem Sal",
      "Você solta sua habilidade marcial em uma mostra de monotonia que faz monstros soltarem dados.\n" +
        "Escolha um número de dados da sua pilha e os role. Para cada 6, role o dado de novo: se der 3 ou menos, você ganha um dado adicional.",
    ],
    id: 2,
  },
  {
    name: "Bardo Presunçoso",
    bonus: "Ganhe um dado para ações que tem uma letra de música nela",
    equipment: [
      "Um instrumento musical estranho",
      "Um baralho",
      "Um nível inexplicável de auto-confiança",
      "Um chapeu que ninguém mais consegue vestir bem",
    ],
    special: [
      "Chiclete",
      "Você solta todo seu potencial musical.\n" +
        "O DM põe um timer de 60 s. Para cada linha de músicas diferentes que você falar, você ganha um dado adicional. Ganhe um dado extra toda vez que alguém começar a cantar com você.",
    ],
    id: 3,
  },
  {
    name: "Druída Natureba",
    bonus: "Ganhe um dado quando animais ajudam você a fazer ações",
    equipment: [
      "Uma foice",
      "Pelo de animal",
      "O cheiro avassalador de cachorro molhado",
    ],
    special: [
      "Chamado da Natureza",
      "Você usa seu conhecimento para chamar guerreiros animais para te ajudar com a batalha final.\n" +
        "O DM põe um timer de 60 s. Para cada barulho de animal diferente que fizer, ganhe um dado. Os animais também podem ser míticos, imaginários ou uma combinação horrorosa que você sonhou enquanto tinha uma febre de 40 graus.",
    ],
    id: 4,
  },
  {
    name: "Clérigo de Suporte",
    bonus: "Ganhe um dado quando ajudar alguém com suas ações",
    equipment: [
      "Arma sagrada",
      "Um colar enorme dificil de se ignorar",
      "Um senso de auto-importância geralmente reservado para professores de teatro",
    ],
    special: [
      "Instruir Mortos-Vivos",
      "Você educa um grupo de monstros com o conhecimento do seu grupo.\n" +
        "O DM põe um timer de 120 s. Para cada fato interessante que seu grupo dizer, ganhe um dado.",
    ],
    id: 5,
  },
  {
    name: "Patrulheiro Ardente",
    bonus: "Ganhe um dado para ações desnecessariamente complicadas",
    equipment: [
      "Um arco ornado",
      "Uma aljava cheia de flechas",
      "Uma quantidade não saudável de carisma",
      "Gel de cabelo",
    ],
    special: [
      "Flechas demais",
      "Você tira uma quantidade impossível de flechas da aljava e tenta atirar de uma maneira desnecessariamente complicada.\n" +
        "Você tem 20 s para empilhar quantos dados (ou tokens) de sua pilha, mas pode parar de empilhar quando quiser.\n" +
        "Quando o tempo acabar, o DM conta até 10 e você ganha um dado adicional para cada dado que continuar na pilha, e perde um dado para cada que tiver caído.",
    ],
    id: 6,
  },
  {
    name: "Ladino Trevoso",
    bonus: "Ganhe um dado para ações que te lembram do seu passado",
    equipment: [
      "Adagas",
      "Facas de atirar",
      "Uma mochila fedorenta",
      "Um bigode charmoso",
      "Um passado tão edgy que você pode usá-lo pra se barbear",
    ],
    special: [
      "Ataque Furtivo",
      "Você tenta roubar dados de um monstro.\n" +
        "Secretamente pegue um número de dados (ou tokens) de sua pilha e os esconda.\n" +
        "O DM deve chutar quantas você escondeu: se acertar, você perde todos os dados escondidos, se não, você ganha um dado adicional para cada dado escondido.",
    ],
    id: 7,
  },
];

function makeClass(klass) {
  const container = document.createElement("div");

  const header = document.createElement("h2");
  header.textContent = klass.name;
  container.append(header);

  const bonus = document.createElement("p");
  bonus.textContent = klass.bonus;
  container.append(bonus);

  const equipment = document.createElement("h3");
  equipment.textContent = "Equipamento";
  container.append(equipment);

  const list = document.createElement("ul");
  for (elem of klass.equipment) {
    const item = document.createElement("li");
    item.textContent = elem;
    list.append(item);
  }
  container.append(list);

  container.append(document.createElement("br"));

  const special = document.createElement("h3");
  special.textContent = klass.special[0];
  container.append(special);

  const specialDescription = document.createElement("p");
  specialDescription.textContent = klass.special[1];
  container.append(specialDescription);

  return container;
}

function buildAccordion(klasses) {
  const accordion = document.createElement("div");
  accordion.classList.add("accordion", "accordion-flush");
  accordion.setAttribute("id", "accordion");

  function makeAccordionItem(klass) {
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const header = document.createElement("h2");
    header.classList.add("accordion-header");

    const button = document.createElement("button");
    button.classList.add("accordion-button", "collapsed");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#flush-${klass.id}`);
    button.textContent = klass.name;

    header.append(button);

    const elemContainer = document.createElement("div");
    elemContainer.setAttribute("id", `flush-${klass.id}`);
    elemContainer.classList.add("accordion-collapse", "collapse");
    elemContainer.setAttribute("data-bs-parent", "#accordion");

    const elem = makeClass(klass);
    elem.classList.add("accordion-body");

    elemContainer.append(elem);

    item.append(header);
    item.append(elemContainer);

    return item;
  }

  for (klass of klasses) {
    const item = makeAccordionItem(klass);
    accordion.append(item);
  }

  return accordion;
}

const classDiv = document.getElementById("classes");
const accordion = buildAccordion(classes);

classDiv.append(accordion);
