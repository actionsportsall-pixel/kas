import {
  ServiceCardItem,
  BootCampDetail,
  TournamentRound,
  SergioCostaBio,
  TestimonialItem,
  GalleryItem,
  FutureServiceItem,
} from '../types';

// Image constants with local generated assets as high-priority
export const HERO_IMAGE = '/images/surf.png';
export const SERGIO_PORTRAIT = '/images/sergio.jpeg';
export const PADEL_ACTION_IMAGE = '/images/padel-1.JPG';
export const SURF_BOOTCAMP_IMAGE = '/images/surftrip group .JPG';
export const SURF_TRIP_IMAGE = '/images/surftrip goup 2.jpg';
export const SURF_GROUP_EXPERIENCE_IMAGE = '/images/surf_group_experience_1787149621419.jpg';
export const SUP_PADDLE_IMAGE = '/images/secret_spot_3.jpg';
export const SECRET_SPOT_IMAGE = '/images/secret_spots.jpg';
export const SECRET_SPOT_3_IMAGE = '/images/secret_spot_3.jpg';
export const PRIVATE_SURF_IMAGE = '/images/privada 2 pessoas.JPG';
export const SUNSET_IMAGE = '/images/por_do_sol.jpg';
export const PRIVATE_SURF_SUNSET_IMAGE = '/images/por_do_sol.jpg';
export const GOOGLE_BOOKING_FORM_URL = 'https://docs.google.com/forms/d/1Lcga3lFaORHgvOl0-BfV-gdReDnfCPVhr1JxBnl1z0M/edit';

// KAS Brand Text Constants
export const KAS_MANIFESTO = {
  tagline: "Beyond Sport. Beyond Expectations.",
  signature: "Luxury Outdoor Experiences",
  subtitle: "Crafted Around You. Inspired by Nature.",
  intro:
    "A KAS nasceu da convicção de que as melhores experiências não se medem pelo tempo que duram, mas pelas memórias que deixam. Somos uma marca portuguesa especializada na criação de experiências premium de desporto, aventura e natureza, concebidas para quem procura muito mais do que uma simples atividade. Criamos momentos autênticos, exclusivos e cuidadosamente desenhados, onde cada detalhe é pensado para proporcionar conforto, segurança, excelência e emoção.",
  introEn:
    "KAS was born from the conviction that the finest experiences are not measured by how long they last, but by the memories they create. We are a Portuguese brand specializing in creating premium sports, adventure, and nature experiences, designed for those seeking far more than a simple activity. We craft authentic, exclusive, and meticulously tailored moments where every detail ensures comfort, safety, excellence, and excitement.",
  introDe:
    "KAS entstand aus der Überzeugung, dass die besten Erlebnisse nicht an ihrer Dauer gemessen werden, sondern an den Erinnerungen, die sie hinterlassen. Wir sind eine portugiesische Marke, die auf erstklassige Sport-, Abenteuer- und Naturerlebnisse spezialisiert ist – entwickelt für Menschen, die weit mehr als eine gewöhnliche Aktivität suchen. Wir schaffen authentische, exklusive und sorgfältig gestaltete Momente, bei denen jedes Detail auf Komfort, Sicherheit, Exzellenz und Emotion ausgelegt ist.",
  origin:
    "O oceano é a nossa origem. A natureza é o nosso palco. A paixão pelo desporto é aquilo que nos define. Através do surf, padel, ciclismo, motociclismo de aventura e outras experiências outdoor, aproximamos pessoas de lugares únicos, promovendo um estilo de vida ativo, equilibrado e em sintonia com a natureza.",
  originEn:
    "The ocean is our origin. Nature is our stage. The passion for sport is what defines us. Through surf, padel, cycling, adventure motorcycling, and other outdoor experiences, we connect people with unique places, fostering an active, balanced lifestyle in harmony with nature.",
  originDe:
    "Der Ozean ist unser Ursprung. Die Natur ist unsere Bühne. Die Leidenschaft für den Sport definiert uns. Durch Surfen, Padel, Radfahren, Abenteuer-Motorradfahren und weitere Outdoor-Erlebnisse bringen wir Menschen an einzigartige Orte und fördern einen aktiven, ausgewogenen Lebensstil im Einklang mit der Natur.",
  philosophy:
    "Na KAS acreditamos que o verdadeiro luxo está no tempo de qualidade, na autenticidade das experiências e na atenção dedicada a cada pessoa. Por isso, trabalhamos com uma abordagem totalmente personalizada. Cada programa é desenvolvido de acordo com o perfil, os objetivos e as expectativas de cada cliente.",
  philosophyEn:
    "At KAS, we believe true luxury lies in quality time, authentic experiences, and dedicated personal attention. Thus, we work with a fully customized approach. Every program is developed around the profile, goals, and expectations of each client.",
  philosophyDe:
    "Bei KAS glauben wir, dass wahrer Luxus in wertvoller Zeit, authentischen Erlebnissen und persönlicher Betreuung liegt. Daher arbeiten wir mit einem vollständig maßgeschneiderten Ansatz. Jedes Programm wird individuell auf das Profil, die Ziele und die Erwartungen jedes Kunden abgestimmt.",
};

export const KAS_METHOD = [
  {
    step: "01",
    title: "Discover",
    titleEn: "Discover",
    titleDe: "Entdecken",
    description: "Conhecemos cada cliente, os seus objetivos, o seu nível de experiência e aquilo que pretende viver.",
    descriptionEn: "We get to know each client, their goals, experience level, and what they wish to experience.",
    descriptionDe: "Wir lernen jeden Kunden, seine Ziele, sein Erfahrungsniveau und seine Wünsche kennen.",
  },
  {
    step: "02",
    title: "Design",
    titleEn: "Design",
    titleDe: "Gestalten",
    description: "Criamos uma experiência personalizada, ajustada ao ritmo, interesses e expectativas de cada participante.",
    descriptionEn: "We craft a personalized experience tailored to the rhythm, interests, and expectations of each participant.",
    descriptionDe: "Wir kreieren ein maßgeschneidertes Erlebnis, angepasst an Rhythmus, Interessen und Erwartungen jedes Teilnehmers.",
  },
  {
    step: "03",
    title: "Experience",
    titleEn: "Experience",
    titleDe: "Erleben",
    description: "Cada momento é acompanhado por profissionais experientes, garantindo um serviço de excelência, segurança e atenção permanente.",
    descriptionEn: "Every moment is guided by experienced professionals, ensuring service excellence, safety, and constant care.",
    descriptionDe: "Jeder Moment wird von erfahrenen Profis begleitet, was höchste Servicequalität, Sicherheit und dauerhafte Aufmerksamkeit garantiert.",
  },
  {
    step: "04",
    title: "Remember",
    titleEn: "Remember",
    titleDe: "Erinnern",
    description: "Acreditamos que as melhores experiências permanecem na memória muito depois de terminarem.",
    descriptionEn: "We believe the best experiences linger in your memory long after they conclude.",
    descriptionDe: "Wir glauben, dass die besten Erlebnisse noch lange nach ihrem Ende im Gedächtnis bleiben.",
  },
];


export const KAS_VALUES = [
  { title: "Excelência", description: "Compromisso absoluto com a qualidade em cada detalhe." },
  { title: "Autenticidade", description: "Experiências genuínas, ligadas ao território, ao mar e às pessoas." },
  { title: "Segurança", description: "Planeamento rigoroso, profissionais certificados e equipamentos de excelência." },
  { title: "Personalização", description: "Cada cliente é único. Cada experiência também." },
  { title: "Sustentabilidade", description: "Respeitamos o oceano, a natureza e as comunidades onde desenvolvemos a nossa atividade." },
  { title: "Paixão", description: "Vivemos aquilo que fazemos e transmitimos essa energia em cada experiência." },
];

export const KAS_MISSION_VISION = {
  mission:
    "Inspirar pessoas através do desporto, da aventura e da natureza, proporcionando experiências memoráveis com elevados padrões de qualidade, segurança e hospitalidade.",
  vision:
    "Ser uma referência nacional e internacional na criação de experiências premium de desportos de ação, estabelecendo parcerias com hotéis, resorts, destinos turísticos e marcas de excelência.",
};

// Ocean Collection
export const SURF_SERVICES: ServiceCardItem[] = [
  {
    id: 'aula-privada-surf',
    title: 'Experiências Privadas & Exclusivas',
    description:
      'Sessões individuais e personalizadas, adaptadas ao nível, ritmo e objetivos de cada participante. Evolução acelerada com foco total e atendimento 1:1.',
    image: PRIVATE_SURF_IMAGE,
    category: 'surf',
    activityKey: 'aula_privada_surf',
    tag: 'Experiência de Surf',
    highlights: ['Acompanhamento 1:1', 'Análise em tempo real', 'Equipamento premium incluído', 'Horário flexível'],
  },
  {
    id: 'surf-guiding',
    title: 'Guia de Surf & Spots Secretos',
    description:
      'Acompanhamento personalizado para descobrir as melhores ondas de Portugal, de acordo com as marés, vento e o teu nível de experiência.',
    image: SECRET_SPOT_IMAGE,
    category: 'surf',
    activityKey: 'surf_guide',
    tag: 'Guia de Surf',
    highlights: ['Conhecimento local profundo', 'Escolha das melhores ondas', 'Transporte privativo', 'Acompanhamento na água'],
  },
  {
    id: 'stand-up-paddle',
    title: 'Locais Secretos',
    description:
      'Passeios e descoberta em locais secretos e águas costeiras preservadas. Uma experiência autêntica de silêncio e profunda ligação com o oceano.',
    image: SUP_PADDLE_IMAGE,
    category: 'surf',
    activityKey: 'outra_atividade',
    tag: 'Locais Secretos',
    highlights: ['Ondas recônditas e autênticas', 'Guia e acompanhamento local', 'Material de segurança completo', 'Experiência personalizada'],
  },
  {
    id: 'sunset-sessions',
    title: 'Sessões ao Pôr do Sol',
    description:
      'Sessões exclusivas ao fim do dia no mar, combinando surf ou SUP sob as cores do pôr do sol, seguidas de momento de relaxamento e hospitalidade KAS.',
    image: SUNSET_IMAGE,
    category: 'surf',
    activityKey: 'outra_atividade',
    tag: 'Sessões ao Pôr do Sol',
    highlights: ['Pôr do sol', 'Ambiente descontraído', 'Registo fotográfico'],
  },
  {
    id: 'grupos-pequenos-surf',
    title: 'Surf para Grupos Reduzidos',
    description:
      'Aulas de surf para grupos privados de amigos ou família (máximo 4 a 6 pessoas), mantendo a atenção personalizada e o máximo conforto.',
    image: SURF_GROUP_EXPERIENCE_IMAGE,
    category: 'surf',
    activityKey: 'surf_grupos_pequenos',
    tag: 'Grupos Surf',
    highlights: ['Máximo 4 a 6 pessoas', 'Ambiente de cumplicidade', 'Material adequado', 'Instrução dedicada'],
  },
  {
    id: 'boot-camp-card',
    title: 'Surf Boot Camp (Imersão 5 Dias)',
    description:
      'Programas intensivos de aperfeiçoamento com treino diário, vídeo-análise técnica, SurfSkate e preparação física orientada.',
    image: SURF_BOOTCAMP_IMAGE,
    category: 'surf',
    activityKey: 'boot_camp',
    tag: 'Boot Camp',
    highlights: ['Imersão completa de 5 dias', 'Análise técnica de vídeo', 'Treino funcional', 'Experiência de grupo VIP'],
  },
  {
    id: 'viagens-surf',
    title: 'Viagens de Surf',
    description:
      'Água quente, sol e boas ondas. Expedições de surf inesquecíveis organizadas com todo o conforto, acompanhamento e orientação.',
    image: SURF_TRIP_IMAGE,
    category: 'surf',
    activityKey: 'boot_camp',
    tag: 'Viagens de Surf',
    highlights: ['Água quente, sol e boas ondas', 'Guia e acompanhamento experiente', 'Logística e alojamento selecionado', 'Para todos os níveis'],
  },
];

// Land Collection
export const PADEL_SERVICES: ServiceCardItem[] = [
  {
    id: 'aulas-padel',
    title: 'Padel Experiences & Aulas Privadas',
    description:
      'Aulas individuais ou de duplas focadas no aperfeiçoamento técnico, tático e posicionamento em campo com treinadores certificados.',
    image: PADEL_ACTION_IMAGE,
    category: 'padel',
    activityKey: 'aula_padel',
    highlights: ['Técnica avançada', 'Estratégia de dupla', 'Vídeo-análise tática', 'Campos de elevada qualidade'],
  },
  {
    id: 'torneios-padel',
    title: 'Torneios Express & Eventos',
    description:
      'Organização completa de torneios de padel de 2 horas com formato dinâmico de rotação, contagem imediata de pontos e ambiente de prestígio.',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    category: 'padel',
    activityKey: 'torneio_padel',
    highlights: ['Duração otimizada 2h', 'Garantia de múltiplos jogos', 'Regra Ponto de Ouro', 'Troféus e hospitalidade'],
  },
];

// Signature Collection (Corporate, VIP, Bespoke)
export const SIGNATURE_SERVICES: ServiceCardItem[] = [
  {
    id: 'private-experiences',
    title: 'Private & Family Experiences',
    description:
      'Dias desenhados exclusivamente para si, para a sua família ou grupo de amigos. Combinação de oceano, terra, gastronomia e momentos inesquecíveis.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    category: 'teambuilding',
    activityKey: 'team_building',
    highlights: ['100% Personalizado', 'Atendimento privativo', 'Aconselhamento VIP', 'Hospitalidade premium'],
  },
  {
    id: 'executive-retreats',
    title: 'Executive Retreats & Corporate',
    description:
      'Programas outdoor para quadros empresariais e equipas de topo, unindo desporto, coesão de liderança e bem-estar na natureza.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    category: 'teambuilding',
    activityKey: 'team_building',
    highlights: ['Retiros executivos', 'Coesão estratégica', 'Serviço de transfer & catering', 'Flexibilidade total'],
  },
  {
    id: 'bespoke-outdoor',
    title: 'Bespoke Programmes & Trips',
    description:
      'Viagens e programas de aventura em Portugal e no estrangeiro com itinerários sob medida para quem exige o máximo padrão de qualidade.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    category: 'teambuilding',
    activityKey: 'outra_atividade',
    highlights: ['Viagens nacionais e internacionais', 'Alojamento boutique', 'Guia dedicado 24/7', 'Logística integral'],
  },
];

export const INITIAL_BOOTCAMP_DETAILS: BootCampDetail = {
  duration: '5 Dias / Imersão Total de Treino (ou Fim-de-semana Intensivo)',
  schedule: 'Horários adaptados às melhores marés e luz do dia',
  maxParticipants: 'Apenas grupos exclusivos de 4 a 6 participantes por treinador',
  surfSessions: 'Sessões diárias com acompanhamento 1:1 e gravação em vídeo 4K',
  physicalPrep: 'Treino funcional, mobilidade, pop-up de precisão e prevenção de lesões',
  technicalAnalysis: 'Sessões diárias de vídeo-correção e briefing tático pós-surf',
  extraActivities: 'SurfSkate carving, leitura avançada de mapas de previsão de ondas e Sunset Lounge',
  materialIncluded: 'Equipamento topo de gama personalizado para cada tipo de onda e nível',
  lodgingMeals: 'Alojamento em hotéis/resorts parceiros e serviço de nutrição desportiva',
  prerequisites: [
    'Qualquer nível de experiência de surf (da iniciação ao nível avançado)',
    'Capacidade de nadar com autonomia no mar',
    'Espírito de superação, respeito pela natureza e camaradagem',
    'Disponibilidade para imersão total e aprendizagem intensiva',
  ],
};

export const TOURNAMENT_SCHEDULE: TournamentRound[] = [
  {
    time: '00:00 - 00:15',
    title: 'Boas-Vindas & Briefing KAS',
    description: 'Receção personalizada aos participantes, apresentação do quadro competitivo e aquecimento guiado.',
    details: ['Boas-vindas VIP', 'Sorteio de duplas', 'Aquecimento específico'],
    activeGroup: 'Todos os participantes',
    restingGroup: '-',
  },
  {
    time: '00:15 - 00:25',
    title: 'Ronda 1 — Fase de Grupos',
    description: 'Jogos de abertura de 10 minutos com contagem em tempo real e apoio de juízes de campo.',
    details: ['Campo 1: Grupo A - Jogo 1', 'Campo 2: Grupo A - Jogo 2'],
    activeGroup: 'Grupo A (em jogo)',
    restingGroup: 'Grupo B (descanso & arbitragem)',
  },
  {
    time: '00:25 - 00:35',
    title: 'Ronda 2 — Fase de Grupos',
    description: 'Entrada em campo do Grupo B para os encontros decisivos.',
    details: ['Campo 1: Grupo B - Jogo 1', 'Campo 2: Grupo B - Jogo 2'],
    activeGroup: 'Grupo B (em jogo)',
    restingGroup: 'Grupo A (descanso & arbitragem)',
  },
  {
    time: '00:35 - 01:15',
    title: 'Rondas 3 a 6 — Qualificação',
    description: 'Duelos intensos pela liderança dos grupos e acesso à fase final.',
    details: ['Rotação de campos', 'Pontuação em tempo real'],
    activeGroup: 'Grupos A & B alternados',
    restingGroup: 'Restantes equipas',
  },
  {
    time: '01:15 - 01:30',
    title: 'Apuramento dos Finalistas',
    description: 'Cálculo da classificação e preparação da Grande Final KAS Padel.',
    details: ['Quadro de finais', 'Hospitalidade e bebidas KAS'],
    activeGroup: 'Organização',
    restingGroup: 'Todos os participantes',
  },
  {
    time: '01:30 - 02:00',
    title: 'Grandes Finais & Pódio KAS',
    description: 'Finais de elevado nível seguidas de entrega de prémios, troféus e momento de celebração.',
    details: ['Disputa do 1.º, 2.º e 3.º lugar', 'Cerimónia de prémios & Fotografia oficial'],
    activeGroup: 'Finalistas',
    restingGroup: 'Público & Convidados',
  },
];

export const SERGIO_BIO: SergioCostaBio = {
  title: 'Liderança, Experiência & Paixão pelo Movimento',
  intro:
    'Sérgio Costa lidera a equipa de profissionais da KAS, garantindo que cada experiência outdoor responde aos mais elevados padrões de rigor, segurança, personalização e exclusividade.',
  mainText:
    'Com mais de 15 anos dedicados ao desporto náutico e de raquete, Sérgio Costa desenha experiências que transformam o contacto com a natureza em momentos memoráveis. A sua abordagem foca-se na atenção ao detalhe, na escuta ativa de cada cliente e na procura constante pela excelência técnica e humana.',
  experienceYears: '15+ Anos',
  certifications: [
    'Treinador Credenciado de Surf (Grau II / FPS)',
    'Treinador e Monitor de Padel Certificado',
    'Certificação em Primeiros Socorros & Nadador Salvador',
    'Especialista em Análise Técnica e Vídeo-Correção',
  ],
  modalities: ['Surf', 'Padel', 'Cycling', 'Adventure Motorcycling', 'Team Building'],
  quote: '"Na KAS acreditamos que o verdadeiro luxo está no tempo de qualidade, na autenticidade das experiências e na atenção dedicada a cada pessoa."',
};

export const FUTURE_SERVICES: FutureServiceItem[] = [
  {
    id: 'cycling-collection',
    title: 'Experiências de Bicicleta',
    description: 'Rotas de estrada e montanha pelas mais belas paisagens de Portugal com suporte total.',
    iconName: '',
    badge: '',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'moto-collection',
    title: 'Aventura Passeio de Mota',
    description: 'Expedições em moto de aventura com itinerários cénicos, gastronomia e dormidas de charme.',
    iconName: '',
    badge: '',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nature-walks',
    title: 'Caminhadas e Trilhos na Natureza',
    description: 'Caminhadas guiadas ao longo de falésias e parques naturais para contemplar a biodiversidade.',
    iconName: '',
    badge: '',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'international-trips',
    title: 'Viagens Internacionais KAS',
    description: 'Destinos exclusivos de surf, padel e aventura pelo mundo com curadoria e acompanhamento KAS.',
    iconName: '',
    badge: '',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Gonçalo Ribeiro',
    activity: 'Private Surf Experience',
    rating: 5,
    comment:
      'A atenção e o rigor da equipa da KAS fizeram toda a diferença! Uma experiência verdadeiramente premium no mar com total conforto e segurança.',
    date: 'Agosto 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-2',
    name: 'Margarida & Pedro Santos',
    activity: 'Corporate Padel Retreat',
    rating: 5,
    comment:
      'Organizámos o nosso retiro executivo com a KAS. O nível de personalização, o cuidado com os detalhes e a hospitalidade superaram todas as expetativas.',
    date: 'Julho 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-3',
    name: 'Sofia Almeida',
    activity: 'Surf Boot Camp KAS',
    rating: 5,
    comment:
      'O Boot Camp de 5 dias foi transformador. A combinação de surf, análise de vídeo e o cuidado constante do Sérgio Costa tornou esta semana inesquecível.',
    date: 'Junho 2026',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'test-4',
    name: 'Ricardo Martins (TechCorp Executive)',
    activity: 'Signature Team Experience',
    rating: 5,
    comment:
      'A KAS proporcionou-nos um evento corporativo memorável. Discrição, profissionalismo e uma ligação à natureza simplesmente espetacular.',
    date: 'Maio 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Surf Privado ao Pôr do Sol',
    category: 'surf',
    type: 'image',
    src: PRIVATE_SURF_SUNSET_IMAGE,
    caption: 'Experiência privada de surf a 2 ao pôr do sol na costa portuguesa.',
  },
  {
    id: 'gal-2',
    title: 'Padel Experience',
    category: 'padel',
    type: 'image',
    src: PADEL_ACTION_IMAGE,
    caption: 'Partida decisiva em torneio express com duplas exclusivas.',
  },
  {
    id: 'gal-3',
    title: 'KAS Surf Boot Camp',
    category: 'bootcamp',
    type: 'image',
    src: SURF_BOOTCAMP_IMAGE,
    caption: 'Celebrando a superação e amizade ao final de 5 dias de treino.',
  },
  {
    id: 'gal-4',
    title: 'Signature Experience — Executive Retreat',
    category: 'teambuilding',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Momentos de coesão empresarial num ambiente natural exclusivo.',
  },
  {
    id: 'gal-5',
    title: 'Land Experience — Cycling & Nature',
    category: 'bike',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80',
    caption: 'A descoberta da costa sobre duas rodas com guias peritos.',
  },
  {
    id: 'gal-6',
    title: 'Locais Secretos',
    category: 'surf',
    type: 'image',
    src: SUP_PADDLE_IMAGE,
    caption: 'Descoberta de ondas autênticas e locais secretos da costa portuguesa.',
  },
  {
    id: 'gal-7',
    title: 'Viagens de Surf',
    category: 'surf',
    type: 'image',
    src: SURF_TRIP_IMAGE,
    caption: 'Água quente, sol e boas ondas.',
  },
];
