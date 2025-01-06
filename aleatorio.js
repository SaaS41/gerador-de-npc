// Arrays com informações para os NPCs
const nomes = [
    "Ana",
    "João",
    "Maria",
    "Pedro",
    "Luiz",
    "Lucas",
    "Sofia",
    "Gabriel",
    "Júlia",
    "Rafael",
    "Camila",
    "Carlos",
    "Beatriz",
    "Marcos",
    "Laura",
    "Fernando",
    "Carolina",
    "Daniel",
    "Isabel",
    "Felipe",
    "Helena",
    "Gustavo",
    "Renata",
    "Bruno",
    "Larissa",
    "Henrique",
    "Mariana",
    "Diego",
    "Aline",
    "Thiago",
    "Priscila",
    "Rodrigo",
    "Bianca",
    "Vinícius",
    "Viviane",
    "Roberto",
    "Fernanda",
    "Ricardo",
    "Tatiane",
    "Felipe",
    "Elaine",
    "Anderson",
    "Cristiane",
    "André",
    "Larissa",
    "Evelyn",
    "Alexandre",
    "Vanessa",
    "Leonardo",
    "Simone",
    "Rafael",
    "Roberta",
    "Caio",
    "Fabiana",
    "Paulo",
    "Mariana",
    "Sérgio",
    "Natália",
    "Ivan",
    "Letícia",
    "Júlio",
    "Débora",
    "Marcelo",
    "Luana",
    "Otávio",
    "Juliana",
    "Fábio",
    "Alice",
    "Samuel",
    "Vanessa",
    "Wallace",
    "Cecília",
    "Rodrigo",
    "Milena",
    "Arthur",
    "Gisele",
    "Jorge",
    "Tatiane",
    "Matheus",
    "Cláudia",
    "César",
    "Beatriz",
    "José",
    "Gabriela",
    "Leandro",
    "Larissa",
    "Alan",
    "Isabela",
    "Felipe",
    "Renata",
    "Marcos",
    "Lúcia",
    "Samuel",
    "Letícia",
    "David",
    "Patrícia",
    "Wellington",
    "Roberta",
    "Tiago",
    "Vitória",
    "Enzo",
    "Victor",
    "Lauro"
];
const sobrenomes = [
    "Silva",
    "Santos",
    "Oliveira",
    "Costa",
    "Pereira",
    "Almeida",
    "Carvalho",
    "Souza",
    "Martins",
    "Lima",
    "Rocha",
    "Ribeiro",
    "Fernandes",
    "Araújo",
    "Melo",
    "Nogueira",
    "Gonçalves",
    "Monteiro",
    "Freitas",
    "Cardoso",
    "Farias",
    "Vieira",
    "Cunha",
    "Moreira",
    "Castro",
    "Dias",
    "Campos",
    "Andrade",
    "Barbosa",
    "Lopes",
    "Teixeira",
    "Mendes",
    "Marques",
    "Santiago",
    "Batista",
    "Antunes",
    "Correia",
    "Brito",
    "Pires",
    "Leite",
    "Bezerra",
    "Moraes",
    "Fonseca",
    "Neves",
    "Tavares",
    "Reis",
    "Guimarães",
    "Dutra",
    "Borges",
    "Azevedo",
    "Franco",
    "Barreto",
    "Bastos",
    "Brandão",
    "Ferreira",
    "Assis",
    "Pontes",
    "Dornelles",
    "Maia",
    "Amaral",
    "Pinheiro",
    "Sales",
    "Aguiar",
    "Beltrão",
    "Dantas",
    "Nunes",
    "Rezende",
    "Bueno",
    "Lemos",
    "Vianna",
    "Prado",
    "Siqueira",
    "Lacerda",
    "Paiva",
    "Villar",
    "Rangel",
    "Seixas",
    "Madureira",
    "Henriques",
    "Miranda",
    "Queiroz",
    "Barreiro",
    "Xavier",
    "Machado",
    "Vilela",
    "Figueiredo",
    "Coutinho",
    "Gama",
    "Braga",
    "Arantes",
    "Alencar",
    "Jordão",
    "Valente",
    "Linhares",
    "Peixoto",
    "Sabino",
    "Toscano",
    "Girão",
    "Arruda",
    "Miranda",
    "Bernardes",
    "Anacleto",
    "Filho"
];

const racas = [
    "Tiefling",
    "Goblin",
    "Meio-Orc",
    "Humano",
    "Meio-Elfo",
    "Anão",
    "Halfling",
    "Gnomo",
    "Orc",
    "Draconato",
    "Tabaxi",
    "R A T O",
    "Elfo",
    "Elfo Negro",
    "Elfo da Floresta"
];

const caracteristicas = [
    //Chat gepeto
    "Olhos dourados",
    "Pele escamosa",
    "Cauda peluda",
    "Garras afiadas",
    "Orelhas pontudas",
    "Pele translúcida",
    "Asas de morcego",
    "Dentes afiados",
    "Focinho de leão",
    "Chifres curvados",
    "Pele metálica",
    "Cicatriz no rosto",
    "Pele rochosa",
    "Peles com pigmentação vibrante",
    "Garras de ferro",
    "Pele coberta de pelos finos",
    "Sombra que se move sozinha",
    "Auras brilhantes ao redor",
    "Lábios com brilho prateado",
    "Cicatrizes de batalha",
    "Superforça nos braços",
    "Corpo esquelético",
    "Rosto anguloso",
    "Unhas que brilham no escuro",
    "Pescoço longo e fino",
    "Escamas que mudam de cor",
    "Olhos que brilham no escuro",
    "Olhos múltiplos",
    "Nariz longo e afilado",
    "Pele dourada",
    "Asas de águia",
    "Peles cobertas por tatuagens místicas",
    "Boca cheia de dentes de tubarão",
    "Dentes caninos alongados",
    "Cabelos que se movem sozinhos",
    "Crânio parcialmente exposto",
    "Olhos de felino",
    "Focinho curto de raposa",
    "Corpo com tentáculos",
    "Pele que se transforma conforme o humor",
    "Corpos de pedras pequenas que se movem como areia",
    "Pele coberta de runas",
    "Garras que emitem faíscas",
    "Membros extras, como tentáculos",
    "Um só olho centralizado",
    "Aparência etérea, quase invisível",
    "Corpo com forma de nuvem",
    "Pelos que brilham com energia",
    "Pele enrugada como couro velho",
    "Asas que se desintegram em partículas de luz",
    "Pés de passarinho",
    "Padrões geométricos que se movem pela pele",
    "Ombros largos como rochas",
    "Barriga pronunciada de dragão",
    "Olhos de águia",
    "Espinhos que saem das costas",
    "Corpo coberto de pelo esponjoso",
    "Cabeça de lobo, corpo humano",
    "Coloração de pele prateada",
    "Asa mecânica de ferro",
    "Pele em tons de azul neon",
    "Olhos com pupilas verticais",
    "Pele de aparência enrijecida",
    "Braços musculosos com marcas",
    "Corpo coberto de marcas mágicas",
    "Cicatrizes místicas brilhantes",
    "Olhos com pupilas de serpente",
    "Barba longa e espessa",
    "Dedo extra em cada mão",
    "Pele áspera de crocodilo",
    "Cabeça de veado, corpo humano",
    "Unhas de dragão",
    "Pele que brilha quando tocada",
    "Queimaduras visíveis de magia",
    "Olhos totalmente brancos",
    "Presas que se projetam da boca",
    "Olhos de cores cambiantes",
    "Mãos cobertas de tatuagens que se movem",
    "Membros de animais (como patas de leão ou cervo)",
    "Pele de textura de seda",
    "Cabeça cheia de tentáculos",
    "Rosto coberto por uma máscara permanente",
    "Pele como vidro, quebradiça",
    "Dentes de marfim",
    "Membros de pedra",
    "Corpo que emite luz suave",
    "Olhos cegos, mas com percepção extra",
    "Lábios azuis brilhantes",
    "Pele com aspecto cristalino",
    "Nariz semelhante ao de um pássaro",
    "Fendas que atravessam a pele",
    "Padrões de energia flutuando ao redor do corpo",
    "Ombros cobertos de penas",
    "Face com formato de uma caveira",
    "Músculos visíveis e proeminentes",
    "Língua longa e serpenteante",
    "Dentes de vampiro",
    "Corpos elásticos",
    "Ombros cobertos de algas marinhas",
    "Corpos que mudam de tamanho conforme a vontade",

    //eu
    "Tapa-Olho",
    "Cicatriz no rosto",
    "Cicatriz no corpo",
    "Olhos brancos (cego)",
    "Queimaduras no rosto",
    "Queimaduras no corpo",
    "Musculoso",
    "Cabelos longos",
    "Cabelos curtos",
    "Cabelos brancos"
];
const trabalhos = [
    "Ferreiro",
    "Carpinteiro",
    "Pedreiro",
    "Alfaiate",
    "Sapateiro",
    "Padeiro",
    "Ferreiro de armas",
    "Cervejeiro",
    "Agricultor",
    "Pastor de ovelhas",
    "Taverneiro",
    "Lenhador",
    "Pescador",
    "Mercador",
    "Caçador",
    "Curandeiro",
    "Escultor",
    "Guarda",
    "Cozinheiro",
    "Babá",
    "Carpinteiro de móveis",
    "Músico",
    "Poeta",
    "Artista",
    "Dançarino",
    "Médico",
    "Professor",
    "Escriba",
    "Arqueólogo",
    "Bibliotecário",
    "Cartógrafo",
    "Engenheiro",
    "Inventor",
    "Matemático",
    "Astrônomo",
    "Linguista",
    "Comerciante de especiarias",
    "Vendedor ambulante",
    "Boticário (farmacêutico medieval)",
    "Dono de estalagem",
    "Corretor de imóveis (ou terras)",
    "Banqueiro",
    "Joalheiro",
    "Fabricante de instrumentos",
    "Vendedor de peles",
    "Leiloeiro",
    "Soldado",
    "Cavaleiro",
    "Arqueiro",
    "Espadachim",
    "Sentinela",
    "Xerife",
    "Guarda-caça",
    "Detetive",
    "Mercenário",
    "Investigador particular",
    "Sacerdote",
    "Monge",
    "Missionário",
    "Profeta",
    "Exorcista",
    "Clérigo",
    "Adivinho",
    "Alquimista",
    "Oráculo",
    "Esotérico",
    "Bardo",
    "Acrobata",
    "Ilusionista",
    "Contador de histórias",
    "Mestre de cerimônias",
    "Marqueteiro (vendedor de feiras)",
    "Malabarista",
    "Jogador profissional",
    "Ator",
    "Escultor de máscaras",
    "Ladrão",
    "Contrabandista",
    "Falsificador",
    "Espião",
    "Assassino",
    "Informante",
    "Contratador de mercenários",
    "Charlatão",
    "Vidente falso",
    "Caçador de recompensas",
    "Herborista",
    "Druida",
    "Apicultor",
    "Guarda-florestal",
    "Adestrador de animais",
    "Pescador de pérolas",
    "Escultor de madeira",
    "Criador de cavalos",
    "Minerador",
    "Navegador"
];

// Função para atualizar o texto fixo e dinâmico
function atualizarElemento(elemento, textoDinamico) {
    const valueElement = elemento.querySelector(".value");
    valueElement.textContent = ` ${textoDinamico}`;
}

// Função para gerar um NPC aleatório
function gerarNpc() {
    // Gerar nome e sobrenome
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
    
    // Gerar duas características aleatórias
    const caracteristica1 = caracteristicas[Math.floor(Math.random() * caracteristicas.length)];
    const caracteristica2 = caracteristicas[Math.floor(Math.random() * caracteristicas.length)];

    // Garantir que as duas características são diferentes
    while (caracteristica1 === caracteristica2) {
        caracteristica2 = caracteristicas[Math.floor(Math.random() * caracteristicas.length)];
    }

    // Gerar a raça e o trabalho aleatório
    const raca = racas[Math.floor(Math.random() * racas.length)];
    const trabalho = trabalhos[Math.floor(Math.random() * trabalhos.length)];

    // // Exibe as informações do NPC nos respectivos elementos <p>
    // document.getElementById("npc_name").textContent = `Nome: ${nome} ${sobrenome}`;
    // document.querySelector(".npc_race").textContent = `Raça: ${raca}`;
    // document.querySelector(".npc_caracteristica").textContent = `Características físicas: ${caracteristica1}, ${caracteristica2}`;
    // document.querySelector(".npc_trabalho").textContent = `Profissão: ${trabalho}`;

    // Atualiza os elementos com as novas informações
    atualizarElemento(document.getElementById("npc_name"), `${nome} ${sobrenome}`);
    atualizarElemento(document.querySelector(".npc_race"), raca);
    atualizarElemento(document.querySelector(".npc_caracteristica"), `${caracteristica1}, ${caracteristica2}`);
    atualizarElemento(document.querySelector(".npc_trabalho"), trabalho);
}

// Evento para o botão gerar
document.getElementById("gerar").addEventListener("click", gerarNpc);
