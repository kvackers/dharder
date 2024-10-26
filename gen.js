const tables = {
  room: [
    "Uma sala vazia com uma porta rangente",
    "Um corredor de hotel infinito",
    "Uma sala com teto em cúpula e várias portas",
    "Um salão de arquitetura anã cheio de estátuas",
    "Uma escadaria em espiral que leva para o abismo",
    "Um refeitório de escola",
    "Sala de espera de um hospital",
    "Uma cela suja",
    "Set de Filmagem (Do filme preferido ou mais detestado do mestre)",
    "Plataforma de pedra pontuda sob uma cachoeira épica",
    "A sala de conferências de uma grande empresa de tecnologia",
    "Pista de boliche na noite do campeonato",
    "Parque aquático deserto",
    "Igreja de um deus esquecido",
    "Caminhar por uma câmara frigorífica a pedido de um chefe famoso",
    "Armazém de mobílias",
    "Clareira na floresta",
    "Pista de obstáculos de um programa cafona",
    "O deck de um iate em uma festa de 18 anos",
    "Uma liquidação numa casa funerária",
    "Zoologico interativo para animais nervosos",
    "Uma aula de pintura amadora de natureza morta",
    "O fundo de uma piscina com drenagem",
    "Um cassino no meio de um assalto mal planejado",
    "Centro do palco no clímax de um musical famoso",
    "O centro de uma cidade medieval em dia de feira",
    "Uma taverna sombria ocupada exclusivamente por grupos de aventureiros que estão se encontrando pela primeira vez.",
    "Um barulhento casamento de goblins",
    "A linha de partida da fórmula 1 de dragões",
    "Uma exposição de museu extremamente valiosa cercada por armadilhas laser",
    "Uma dicoteca de patins estilo anos 80, na noite dos cachorros quentes compre 1 leve 2",
    "Supermercado em um apocalipse zumbi",
    "Uma fila imóvel numa agência dos correios",
    "Loja mística de artigos exotéricos",
    "Laboratório de um cientista maligno",
    "Casa do Dave",
  ],
  description: [
    "Viscoso, escorregadio e com cheiro de mofo, com cogumelos crescendo nas paredes",
    "Chão, mobília e ar empoeirados, coberto em teias de aranha e difícil de respirar",
    "Chão de lava com pedras para caminhar em cima mas bolhas de magma estourando perto dos seus pés",
    "Cheio de sons de palhaços chorando",
    "Gelo cobrindo as paredes, cheiro gelado no ar",
    "Verdejante, flores e musgo crescem livremente, com cheiro de grama recém cortada",
    "Cheira a pipoca e algodão doce, com uma sensação geral de felicidade recobrindo o ar",
    "Se parece com seu quarto de adolescente",
    "Coberto com manequins, do teto ao piso, o cheiro de vazio preenche o ar, por acaso algum deles acabou de mover?",
    "Um fedor forte de desodorante barato, com meias jogadas pelo chão",
    "Sombrio, as sombras parecem se mexer sozinhas",
    "Quente e fechado, você sente o suor escorrer por sua testa",
    "É apenas estranho",
    "Um canto de sereia recobre o ar, fascinante, lindo, porém assustador",
    "Um cheiro de sal preenche o ar, você consegue escutar ao longe o som de ondas quebrando",
    "Os uivos de feras famintas pode ser ouvido à distância, você sente o pânico crescendo",
    "O cheiro de pão recém assado no ar, o seu estômago ronca",
    "Luzes fortes te ofuscam, te atrapalhando de enxergar",
    "Que fedor é esse? Seus olhos começam a lacrimejar e algum líquido desconhecido escorre das paredes",
    "Pilhas de cabelo recém cortado cobrem o chão",
    "Glitter cobre todas as superfícies, seus ovidos escutam uma música nostalgica",
    "Você é súbitamente preenchido por uma sensação de pavor",
    "Você sente um frio na barriga e tem certeza que esse local é assombrado",
    "Um milhão de olhos, cobrindo as paredes e o chão, se voltam você, fitando-o",
    "Tudo está limpo e novo, o local inteiro cheira como recém decorado",
    "Tudo parece assutadoramente artificial",
    "Assim que você entra uma voz começa a narrar tudo o que você faz",
    "Algo esteve aqui recentemente, você sente o ar voltando para preencher o vácuo",
    "Você ouve ao longe alguém batendo seu próprio recorde no Tetris",
    "Tudo está um pouco fora de proporção",
    "Tudo aqui foi feito para uma criatura absurdamente maior do que você",
    "Luzes neon piscam no teto, provendo uma luz inconstânte",
    "O cheiro de animais de fazenda recobre o ar, calorento e doce ao mesmo tempo",
    "Sons feitos aqui ecoam para sempre",
    "As coisas de Dave estão espalhadas pelo chão e o local cheira a pipoca fresca.",
  ],
  adjective: [
    "Atrevido",
    "Colorido",
    "Sexy",
    "Deprimido",
    "Entusiasmado",
    "Irritado",
    "Agressivo",
    "Selvagem",
    "Sonolento",
    "Glamuroso",
    "Fabuloso",
    "Sábio",
    "Masculinizado",
    "Bonito",
    "Desinteressado",
    "Doloroso",
    "Rimante",
    "Profissional",
    "Perturbadoramente peludo",
    "Vários olhos",
    "Baixo orçamento",
    "Recém divorsiado",
    "Pixelado",
    "Infiél à descrição do livro",
    "Altamente cafeinado",
    "Pacifista",
    "Oleado (Coberto em Óleo)",
    "Entediado",
    "Brega",
    "Fortemente sedado",
    "Meio esquisito",
    "Assustador",
    "Estranhamente acolhedor",
    "Assustadoramente familiar",
    "Vestido identicamente",
    "Posado desconfortávelmente",
  ],
  monster: [
    "Orc",
    "Goblin",
    "Dragão",
    "Kobold",
    "Esqueleto",
    "Bugbear",
    "Lobo",
    "Pantera",
    "Leão",
    "Urso-coruja",
    "Bebê humano",
    "Galinha",
    "Hamster",
    "Cocatriz",
    "Hidra",
    "Urso",
    "Águia gigante",
    "Morcego gigante",
    "Cubo gelatinoso",
    "Avós",
    "Oficial do governo",
    "Tartaruga",
    "Monstro de espagueti voador",
    "Pantera deslocadora",
    "Esquilo",
    "Demônio",
    "Cobra",
    "Fada",
    "Verme",
    "Urubu",
    "Bode",
    "Vaca",
    "Troll",
    "Fantasma",
    "Saci",
    "Professor",
  ],
  situation: [
    "Banho com capivaras",
    "Declarando imposto de renda",
    "Encontro de negócios",
    "Discussão",
    "Encontro às cegas",
    "Jogo de cartas",
    "Ensaio de uma peça",
    "Debate de quem paga a conta",
    "Despedida de solteiro(a)",
    "Fazendo um ritual",
    "Construindo um celeiro",
    "Protegendo um baú",
    "Primeiro encontro",
    "Briga",
    "Refeição",
    "Vestindo roupas roubadas",
    "Fazendo uma escultura complexa",
    "Treinando movimentos",
    "Karaokê competitivo",
    "Sequência de treinamento de um filme dos anos 80",
    "Festa do pijama",
    "Audição de um show de talentos",
    "Meio de um Makeover",
    "Batalha no topo de um vulcão",
    "Festa de marketing multi-nível",
    "Teleton",
    "Dia de auto cuidado",
    "Terapia de casal",
    "Pedido de comida pra viagem",
    "Invocando um demônio",
    "Fazendo uma apresentação",
    "Noite de jogos",
    "Proposta de casamento",
    "Andando de patins",
    "Aula de circo",
    "Sauna",
  ],
  loot: [
    "Um peixão molhado",
    "Um milhão de velas",
    "O anel de casamento da sua avó",
    "Uma cópia autografada por Michael Keaton do clássico da comédia horror, BeetleJuice",
    "A enciclopédia britânica",
    "A rainha dos baixinhos, Xuxa",
    "Trinta caranguejos pequenos num balde",
    "Seu salgadinho favorito, mas, senciente",
    "Um instrumento muscial amaldiçoado",
    "Um convite para um casamento Goblin",
    "Uma placa do Youtube de um milhão de inscritos para um canal chamado 'Jardinagem Jardineira'",
    "Um saco de cabelo humano",
    "Uma estátua de um dragão que você levou na CCXP pra ele assinar",
    "Um esfregão multi uso",
    "Um leque decorativo antigo que mostra uma imagem sua quando aberto",
    "Uma camisa com mangas bordadas em suas mangas",
    "Rasputin e ele sabe todos os passos da dança",
    "Um machado demoníaco chamado Douglas que conta piadas ruins para você gostar dele",
    "Cartas de amor do seu ",
    "Sangue sugas",
    "Porta temperos",
    "O aparelho dental do seu bully de escola",
    "O fantasma de William Shakespere",
    "Uma mesa de piquenique assombrada",
    "O login e senha de uma rede social de uma celebridade",
    "Vinte perucas originais usadas na peça da Broadway 'Wicked'",
    "Um café artesanal numa xícara de viagem cara que você não consegue se controlar de se gabar sobre",
    "Uma jarra de fantasmas excitados",
    "Seu conjunto de dados mais chique, geralmente usado apenas em ocasiões especiais",
    "Uma tijela com várias frutas exóticas com nomes impronunciáveis",
    "Um fidget spinner possuído pela alma de um deus antigo que tem muito enjoo de movimento",
    "Um conjunto de detetive junior, contendo talco, carimbo, lupa pequena e algemas de plástico",
    "Sr Mário, seu professor de geografia do ensino médio",
    "Mouse de computador com fio e bolinha removível",
    "Chaves do Dave, ele vai querer elas de volta em algum momento",
  ],
  boss: [
    "Observador cansado de ouvir 'A beleza está nos olhos do observador'",
    "Comitê de admissão de um clube de elite, regido por chimpanzés tentando escrever Shakespere",
    "Quatro Ursos-corujas numa fantasia de dragão e o que controla a cauda odeia isso",
    "Medusa, mas, a sala tá cheia de estátuas de entregadores e ela está morrendo de fome",
    "Um grande dragão ancião que deseja achar alguém para enfrentá-lo por quem ele é por dentro",
    "Uma fênix que renasceu das cinzas de um jantar em família arruinado",
    "Uma estátua viva coberta em graffiti que ela não compreende (mas os jogadores entendem)",
    "Um gigante inseguro sob seu tamanho por ter sido criado por elfos",
    "Um demônio que foi acidentalmente invocado por um chef que precisava de um limão",
    "Um T-rex de braços longos que constantemente se gaba por isso",
    "Uma versão do mal do grupo que está tentando acabar com o crédito do Serasa deles",
    "Uma cobra gigante que fala com um sotaque carregado",
    "O deus das masmorras, cansado do seu trabalho e querendo desesperadamente uma folga para ir no parque aquático",
    "Um anjo que veio espalhar as palavras da paz e harmonia através de sua fúria e espada flâmejante",
    "Um mago maligno que constantemente erra a pronuncia e tenta 'Disintregar' os jogadores e com isso não consegue utilizar sua magia favorita",
    "Um rei morto-vivo que só quer que as coisas voltem a ser como eram quando ele era criança",
    "Uma fada madrinha auto entitulada que não percebeu que com o título viriam tantas responsabilidades",
    "Um cão de três cabeças que só quer ser chamado de bom menino",
    "Um esquema extremamente confuso de rotatórias",
    "Um caixa de suco com canudinho de papel",
    "Problemas de conexão de rede",
    "Um elemental do fogo com uma queimadura de sol bem tensa",
    "Um vampiro que está ofendido por não ter sido reconhecido por vocês",
    "A encarnação antropomórfica do sentimento que você tem ao tocar algo molhado debaixo da sua cadeira",
    "Um milhão de abelhas chamadas Wilf",
    "Um besouro rola bosta gigante que fingiu ser um dragão online para poder enfrentar aventureiros",
    "O fantasma de um restaurante de fast food",
    "Uma pilha de contas não pagas",
    "Um sofá que seu amigo pediu ajuda para levar, mas, subestimou seu tamanho e formato esquisitos",
    "Um performance dramática amadora do musical 'O rei do show'",
    "Um cogumelo senciente que tá realmente interessado em vídeos de auto ajuda",
    "Um raça de alienígenas com tecnologia avançada que não estão irritados, estão desapontados",
    "Um ser celestial incompreensível com o sonho de se apresentar num palco",
    "A rainhas das fadas e sua corte numa batalha de paintball",
    "Um kraken fúrioso que não fazem nada que ele possa utilizar",
    "Dave",
  ],
  life: [null, null, 250, 450, 650, 700, 1000],
};

function sample(list) {
  console.log(list);
  const max = list.length;
  const idx = Math.floor(Math.random() * max);
  return list[idx];
}

function clamp(min, x, max) {
  if (x < min) {
    return min;
  }

  if (x > max) {
    return max;
  }

  return x;
}

function genDungeon() {
  const rooms = document.getElementById("rooms");

  for (let i = 0; i < 10; ++i) {
    const room = {
      room: sample(tables.room),
      description: sample(tables.description),
      numMonsters: Math.floor(Math.random() * 6 + 1),
      adjective: sample(tables.adjective),
      monster: sample(tables.monster),
      situation: sample(tables.situation),
      loot: sample(tables.loot),
    };

    const alert = buildRoom(room);
    rooms.append(alert);
  }

  const boss = document.createElement("div");
  boss.classList.add("alert", "alert-danger");
  boss.setAttribute("role", "alert");

  const numPlayers = clamp(2, document.getElementById("players").value, 6);
  boss.innerHTML =
    `<p><strong>Chefe</strong>: ${sample(tables.boss)}</p>` +
    `<p><strong>Vida</strong>: ${tables.life[numPlayers]}</p>`;

  rooms.append(boss);
}

function buildRoom(room) {
  const div = document.createElement("div");
  div.classList.add("alert", "alert-warning");
  div.setAttribute("role", "alert");

  let text =
    `<p><strong>Sala</strong>: ${room.room}</p>` +
    `<p><strong>Descrição</strong>: ${room.description}</p>` +
    `<p><strong>Monstro(s)</strong>: ${room.monster} ${room.adjective} (${room.numMonsters})</p>` +
    `<p><strong>Situação</strong>: ${room.situation}</p>` +
    `<p><strong>Recompensa</strong>: ${room.loot}</p>`;

  div.innerHTML = text;
  return div;
}

function rollDice(event) {
  const number = document.getElementById("dice").value;

  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-success");
  alert.setAttribute("role", "alert");

  const rolls = [];
  let total = 0;
  let ones = 0;
  let sixes = 0;
  for (let i = 0; i < number; ++i) {
    const roll = Math.floor(Math.random() * 6 + 1);
    total += roll;

    if (roll == 1) {
      ones += 1;
    }

    if (roll == 6) {
      sixes += 1;
    }

    rolls.push(roll);
  }

  let text = "<p>Os valores são: [";
  for (roll of rolls) {
    text += `${roll}, `;
  }

  text += `].</p><p>A soma é ${total}. Tiveram ${ones} 1s rolados e ${sixes} 6s rolados.</p>`;
  text = text.replace(", ]", "]");
  alert.innerHTML = text;

  const removeButton = document.createElement("span");
  removeButton.textContent = "❌";
  removeButton.onclick = () => alert.remove();
  alert.append(removeButton);

  const container = document.getElementById("rolls");
  if (container.childElementCount < 8) {
    container.prepend(alert);
  } else {
    const children = container.children;
    const last = children[children.length - 1];
    last.remove();

    container.prepend(alert);
  }
}

const dice = document.getElementById("dice-btn");
dice.onclick = rollDice;

const gen = document.getElementById("gen-btn");
gen.onclick = genDungeon;
