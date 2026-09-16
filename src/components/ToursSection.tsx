import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  CheckCircle2,
  Send,
  Calendar,
  Sparkles,
  Clock,
  Users,
  Info,
  X,
  ShieldCheck,
  Wine,
  Ship,
  Car,
  Utensils,
  XCircle,
  AlertCircle,
  Sun
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TOURS_NORTE_IMAGE } from '../data/mockData';

interface ToursProps {
  onOpenBookingModal: (activityKey?: string) => void;
  onOpenBudgetModal?: (serviceName: string) => void;
}

interface DestinationItem {
  id: string;
  title: string;
  location: string;
  badge: string;
  image: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  desc: string;
  highlights: string[];
  narrative?: string[];
  included?: string[];
  exclusions?: string[];
  notes?: string[];
  whatToBring?: string[];
}

export const ToursSection: React.FC<ToursProps> = ({
  onOpenBookingModal,
  onOpenBudgetModal,
}) => {
  const { t } = useLanguage();
  const [selectedTour, setSelectedTour] = useState<DestinationItem | null>(null);

  const destinations: DestinationItem[] = [
    {
      id: 'douro',
      title: t(
        'VALE DO DOURO: Tour Premium em Grupo Pequeno com Degustação de Vinhos, Almoço em Vinícola e Cruzeiro Privado',
        'DOURO VALLEY: Small-Group Premium Tour with Wine Tasting, Winery Lunch & Private Cruise',
        'DOURO-TAL: Premium-Kleingruppentour mit Weinverkostung, Mittagessen & privater Bootsfahrt'
      ),
      location: 'Douro / Pinhão',
      badge: 'UNESCO World Heritage',
      image: '/images/douro.jpg',
      duration: t('10 horas', '10 hours', '10 Stunden'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Pequeno grupo até 8 pessoas', 'Small group up to 8 guests', 'Kleine Gruppe bis zu 8 Personen'),
      desc: t(
        'Descubra o melhor do Douro connosco, num pequeno grupo de até 8 pessoas, incluindo um cruzeiro, almoço e uma visita a uma adega com degustação de vinhos de alta qualidade.',
        'Discover the best of the Douro with us, in a small group of up to 8 guests, including a cruise, lunch, and winery visit with high-quality wine tastings.',
        'Entdecken Sie das Beste des Douro-Tals mit uns in einer kleinen Gruppe von bis zu 8 Personen, inklusive Schifffahrt, Mittagessen und Weingutbesuch mit erstklassiger Weinverkostung.'
      ),
      highlights: [
        t('Cruzeiro de 1 hora em Pinhão em barco privativo para nossa empresa, com guia e bebida a bordo', '1-hour private boat cruise in Pinhão with drinks on board', '1-stündige private Bootsfahrt in Pinhão mit Getränken an Bord'),
        t('Almoço harmonizado com vinhos em vinícola familiar e visita à adega (comida caseira na brasa)', 'Wine-paired lunch with grilled homemade cuisine at a family estate & cellar visit', 'Weinbegleitetes Mittagessen mit Spezialitäten vom Grill auf einem Familienweingut'),
        t('Degustação de 10 tipos diferentes de vinho (DOC, Porto, Moscatel, LBV e Porto Vintage) & azeite', 'Tasting of 10 distinct wines (DOC, Port, Moscatel, LBV & Vintage Port) & olive oil', 'Verkostung von 10 Weinsorten (DOC, Port, Moscatel, LBV & Vintage) und Olivenöl'),
        t('Van Mercedes com A/C, rota panorâmica N222 e miradouros para fotos', 'Mercedes A/C van, panoramic scenic road N222, and viewpoint photo stops', 'Klimatisierter Mercedes-Van, Panoramastraße N222 und Aussichtspunkte für Fotos'),
      ],
      narrative: [
        t(
          'Delicie-se com este exclusivo passeio de um dia inteiro com guia, partindo da cidade do Porto, em uma van Mercedes com ar-condicionado para grupos de até 8 pessoas, e conheça o Vale do Douro, a principal região vinícola de Portugal.',
          'Delight in this exclusive full-day guided tour departing from Porto city in an air-conditioned Mercedes van for groups of up to 8 guests, exploring the Douro Valley, Portugal’s premier wine region.',
          'Genießen Sie diese exklusive ganztägige geführte Tour ab Porto im klimatisierten Mercedes-Van für bis zu 8 Personen und entdecken Sie das Douro-Tal.'
        ),
        t(
          'Surpreenda-se com a visita a uma adega familiar com mais de um século de história e deguste o azeite e os vinhos do Porto e DOC, produzidos de forma tradicional.',
          'Be captivated by a visit to a family winery with more than a century of history, tasting olive oil alongside Port and DOC wines crafted in traditional style.',
          'Besuchen Sie ein traditionsreiches Familienweingut und verkosten Sie Olivenöl sowie traditionell hergestellte Port- und DOC-Weine.'
        ),
        t(
          'Deixe-se encantar pelas magníficas vistas e não perca a oportunidade de tirar fotos incríveis.',
          'Let yourself be enchanted by magnificent terraced views and capture breathtaking photographs.',
          'Lassen Sie sich von den herrlichen Ausblicken verzaubern und halten Sie unvergessliche Fotomomente fest.'
        ),
        t(
          'Desfrute de um fabuloso almoço harmonizado em uma segunda adega, com comida caseira preparada na brasa. Aprecie a degustação dos vinhos produzidos na adega, como DOC, Porto, Moscatel, LVB e Porto Vintage.',
          'Savor a fabulous wine-paired lunch at a second wine estate, featuring home-cooked cuisine prepared over embers, paired with DOC, Port, Moscatel, LBV, and Vintage Port wines.',
          'Genießen Sie ein fantastisches weinbegleitetes Mittagessen auf einem zweiten Weingut mit Grillspezialitäten und Verkostung von DOC-, Port-, Moscatel-, LBV- und Vintage-Weinen.'
        ),
        t(
          'Visite o Pinhão, um magnífico cais, e relaxe em um cruzeiro privativo exclusivo para nossos hóspedes, com guia e um pequeno grupo, com bebidas a bordo.',
          'Visit Pinhão’s historic pier and relax on a private cruise exclusive to our guests, accompanied by your guide and drinks on board.',
          'Besuchen Sie Pinhão und entspannen Sie bei einer privaten Bootsfahrt exklusiv für unsere Gäste mit Guide und Getränken an Bord.'
        ),
        t(
          'Não poderíamos deixar de passar pela famosa N222, considerada uma das estradas mais bonitas do mundo.',
          'We make sure to travel along the famous N222, widely celebrated as one of the world’s most scenic driving routes.',
          'Fahren Sie entlang der berühmten N222, die als eine der schönsten Straßen der Welt gilt.'
        ),
        t(
          'Retorne ao seu hotel no centro do Porto com lembranças inesquecíveis.',
          'Return comfortably to your hotel in central Porto with unforgettable memories.',
          'Kehren Sie mit unvergesslichen Erinnerungen zu Ihrem Hotel im Zentrum von Porto zurück.'
        ),
      ],
      included: [
        t('Comida e bebidas', 'Food and beverages', 'Speisen und Getränke'),
        t('Veículo com ar condicionado (Van Mercedes)', 'Air-conditioned vehicle (Mercedes Van)', 'Klimatisiertes Fahrzeug (Mercedes-Van)'),
        t('Água mineral', 'Bottled mineral water', 'Mineralwasser'),
        t('Almoço harmonizado com vinhos em uma vinícola familiar e visita à adega', 'Wine-paired lunch at a family winery with cellar visit', 'Weinbegleitetes Mittagessen auf einem Familienweingut mit Kellerbesuch'),
        t('Cruzeiro de 1 hora em Pinhão em barco privativo para nossa empresa, com guia e bebida a bordo', '1-hour private boat cruise in Pinhão for our company with guide & onboard drinks', '1-stündige private Bootsfahrt in Pinhão exklusiv mit Guide und Getränken'),
        t('Visita à vinícola bicentenária e degustação de vinhos, com produção tradicional', 'Visit to bicentennial winery with traditional production wine tasting', 'Besuch eines 200 Jahre alten Weinguts mit traditioneller Weinverkostung'),
        t('Degustação de 10 tipos diferentes de vinho DOC, Porto, Moscatel, LBV e Porto Vintage durante o passeio', 'Tasting of 10 distinct wines (DOC, Port, Moscatel, LBV & Vintage Port)', 'Verkostung von 10 verschiedenen Weinen (DOC, Port, Moscatel, LBV & Vintage)'),
        t('Traslado de ida e volta do hotel (opcional)', 'Round-trip hotel pickup and drop-off (optional)', 'Hin- und Rücktransfer ab/bis Hotel (optional)'),
        t('Paradas em mirantes para fotos', 'Viewpoint photo stops', 'Fotostopps an Aussichtspunkten'),
        t('Visita guiada', 'Guided tour', 'Geführte Tour'),
        t('Grupo pequeno de até 8 pessoas', 'Small group up to 8 guests', 'Kleine Gruppe bis zu 8 Personen'),
        t('Opções de menu para restrições alimentares (vegetarianos, alérgicos, pescetarianos)', 'Dietary restriction options (vegetarians, allergies, pescatarians)', 'Menüoptionen für Ernährungsbedürfnisse (vegetarisch, Allergien, pescetarisch)'),
      ],
      exclusions: [
        t('Gorjetas', 'Gratuities / Tips', 'Trinkgelder'),
      ],
      notes: [
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('Não acessível para carrinhos de bebê.', 'Not stroller accessible.', 'Nicht für Kinderwagen geeignet.'),
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não há transporte público por perto.', 'No public transit immediately nearby.', 'Keine unmittelbaren öffentlichen Verkehrsmittel.'),
        t('Bebês não devem sentar no colo.', 'Infants must not sit on laps.', 'Kleinkinder dürfen nicht auf dem Schoß sitzen.'),
        t('Cadeiras infantis indisponíveis.', 'Infant seats unavailable.', 'Kindersitze nicht verfügbar.'),
        t('No dia anterior à excursão, às 19h, o cliente será informado do horário correto de embarque e do contato do guia.', 'The day prior to the tour, at 7 PM, guests receive exact pickup time and guide contact info.', 'Am Vortag der Tour um 19:00 Uhr werden die genaue Abholzeit und der Kontakt des Guides mitgeteilt.'),
      ],
      whatToBring: [
        t(
          'Nos dias de verão, esta região é muito quente. É recomendável levar protetor solar, chapéu, calçado confortável e roupas adequadas.',
          'During summer days, this region gets very hot. We recommend bringing sunscreen, a hat, comfortable walking shoes, and suitable clothing.',
          'An Sommertagen ist diese Region sehr heiß. Es wird empfohlen, Sonnenschutzmittel, Hut, bequeme Schuhe und passende Kleidung mitzubringen.'
        ),
      ],
    },
    {
      id: 'braga_guimaraes',
      title: t(
        'BRAGA E GUIMARÃES: Tour Histórico Privado saindo do Porto',
        'BRAGA & GUIMARÃES: Private Historic Tour from Porto',
        'BRAGA & GUIMARÃES: Private historische Tour ab Porto'
      ),
      location: 'Braga & Guimarães',
      badge: t('Tour Histórico Privado', 'Private Historic Tour', 'Private historische Tour'),
      image: '/images/castelo_guimaraes.jpg',
      duration: t('8 horas', '8 hours', '8 Stunden'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Totalmente privado', 'Fully private', 'Vollständig privat'),
      desc: t(
        'Explore as cidades de Braga e Guimarães com um almoço de luxo e visitas incluídas aos monumentos mais importantes da história do local.',
        'Explore the historic cities of Braga and Guimarães with luxury dining and visits included to the most important monuments in local history.',
        'Erkunden Sie die historischen Städte Braga und Guimarães mit erstklassigem Mittagessen und Besichtigungen der bedeutendsten Denkmäler.'
      ),
      highlights: [
        t('Visita ao Santuário do Bom Jesus e Sé de Braga', 'Visit to Bom Jesus Sanctuary and Braga Cathedral', 'Besuch des Heiligtums Bom Jesus und der Kathedrale von Braga'),
        t('Castelo de Guimarães, Capela de São Miguel e Paço dos Duques', 'Guimarães Castle, São Miguel Chapel and Palace of the Dukes', 'Burg Guimarães, São-Miguel-Kapelle und Herzogspalast'),
        t('Centro Histórico UNESCO: Largo da Oliveira e Praça de São Tiago', 'UNESCO Historic Center: Largo da Oliveira & São Tiago Square', 'UNESCO-Altstadt: Largo da Oliveira und Praça de São Tiago'),
        t('Tour 100% privado com transporte A/C e recolha no hotel', '100% private tour with A/C vehicle and hotel pickup', '100 % private Tour mit klimatisiertem Fahrzeug und Hotelabholung'),
      ],
      narrative: [
        t(
          'Explore as cidades de Braga e Guimarães, Património Mundial da UNESCO, de forma totalmente privada.',
          'Explore the UNESCO World Heritage cities of Braga and Guimarães in a completely private experience.',
          'Erkunden Sie die UNESCO-Welterbestädte Braga und Guimarães auf völlig private Weise.'
        ),
        t(
          'Comece o dia com o nosso serviço de recolha no seu hotel ou alojamento, de forma tranquila e organizada.',
          'Start your day with seamless, organized pickup directly from your hotel or accommodation.',
          'Beginnen Sie den Tag entspannt mit unserer bequemen Abholung direkt an Ihrem Hotel.'
        ),
        t(
          'Ao chegar a Braga, o passeio inicia-se com uma visita ao Santuário do Bom Jesus e à sua majestosa escadaria, com tempo livre para explorar o santuário.',
          'Arriving in Braga, the tour begins with a visit to the monumental Bom Jesus Sanctuary and its majestic staircase, with free time to explore the grounds.',
          'In Braga angekommen, beginnt die Tour mit dem monumentalen Heiligtum Bom Jesus und freier Zeit zur Erkundung.'
        ),
        t(
          'Surpreenda-se com a visita opcional à catedral mais antiga do país, a Sé de Braga.',
          'Be captivated by an optional visit to the oldest cathedral in Portugal, the historic Sé de Braga.',
          'Lassen Sie sich von der ältesten Kathedrale Portugals, der Sé de Braga, begeistern.'
        ),
        t(
          'Desfrute de uma caminhada livre pelo centro de Braga.',
          'Enjoy a delightful stroll through the lively pedestrian streets and squares of central Braga.',
          'Genießen Sie einen entspannten Spaziergang durch die historische Altstadt von Braga.'
        ),
        t(
          'Aproveite o tempo livre para o almoço.',
          'Take advantage of dedicated free time to savor a memorable luxury lunch.',
          'Nutzen Sie die Zeit für ein exzellentes Mittagessen.'
        ),
        t(
          'Comece a tarde com uma visita ao Castelo de Guimarães, à Igreja de São Miguel e ao luxuoso Paço dos Duques (opcional).',
          'Begin the afternoon visiting iconic Guimarães Castle, the historic Romanesque São Miguel Chapel, and the grand Palace of the Dukes (optional).',
          'Am Nachmittag besuchen Sie die Burg Guimarães, die romanische São-Miguel-Kapelle und den herzoglichen Palast (optional).'
        ),
        t(
          'Desfrute de um belo passeio pedonal pelas ruas mais históricas da cidade, como o Largo da Oliveira, a Igreja de Nossa Senhora da Oliveira e a Praça de São Tiago.',
          'Enjoy a guided walking route through the town’s most evocative medieval squares, including Largo da Oliveira, Our Lady of Oliveira Church, and Praça de São Tiago.',
          'Freuen Sie sich auf einen Spaziergang durch mittelalterliche Gassen, den Largo da Oliveira und die Praça de São Tiago.'
        ),
        t(
          'Regresse ao seu alojamento com o nosso serviço de transporte.',
          'Return comfortably and safely to your accommodation with our private transfer service.',
          'Kehren Sie mit unserem bequemen Privattransfer zu Ihrer Unterkunft zurück.'
        ),
      ],
      included: [
        t('Visita exterior à Catedral de Braga', 'Exterior visit to Braga Cathedral', 'Außenbesichtigung der Kathedrale von Braga'),
        t('Visita ao Santuário do Bom Jesus', 'Visit to Bom Jesus Sanctuary', 'Besuch des Heiligtums Bom Jesus'),
        t('Visita à Capela de São Miguel', 'Visit to São Miguel Chapel', 'Besuch der Kapelle São Miguel'),
        t('Visita exterior ao Paço dos Duques', 'Exterior visit to Palace of the Dukes', 'Außenbesichtigung des Herzogspalastes'),
        t('Visita ao Castelo de Guimarães', 'Visit to Guimarães Castle', 'Besuch der Burg Guimarães'),
        t('Transporte de ida e volta do hotel', 'Round-trip hotel pickup and drop-off', 'Hin- und Rücktransfer ab/bis Hotel'),
        t('Veículo com ar condicionado', 'Air-conditioned private vehicle', 'Modernes, klimatisiertes Privatfahrzeug'),
        t('Tempo livre para almoço', 'Free time for lunch', 'Freizeit für das Mittagessen'),
      ],
      exclusions: [
        t('Gorjetas', 'Gratuities / Tips', 'Trinkgelder'),
        t('Almoço', 'Lunch', 'Mittagessen'),
        t('Entrada para os monumentos', 'Entrance tickets to monuments', 'Eintrittsgelder für Sehenswürdigkeiten'),
      ],
      notes: [
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('Buscaremos e levaremos o cliente ao local onde ele estiver hospedado. Informe-nos o endereço completo caso não esteja listado.', 'We provide pickup and drop-off at guest accommodation. Please provide full address if not listed.', 'Wir holen Sie an Ihrer Unterkunft ab und bringen Sie zurück. Bitte vollständige Adresse angeben.'),
      ],
    },
    {
      id: 'barcelos_lima_viana',
      title: t(
        'BARCELOS, PONTE LIMA e VIANA CASTELO: Tour Privado saindo do Porto',
        'BARCELOS, PONTE DE LIMA & VIANA DO CASTELO: Private Tour from Porto',
        'BARCELOS, PONTE DE LIMA & VIANA DO CASTELO: Private Tour ab Porto'
      ),
      location: 'Barcelos, Ponte de Lima & Viana',
      badge: t('Tour Privado', 'Private Tour', 'Private Tour'),
      image: '/images/viana_barcelos_lima.jpg',
      duration: t('9 horas', '9 hours', '9 Stunden'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Transporte privado', 'Private transport', 'Privater Transport'),
      desc: t(
        'Viva um dia memorável no coração do Minho, onde tradição, história e sabores se unem numa experiência única.',
        'Experience an unforgettable day in the heart of Minho, where tradition, history, and authentic flavors unite.',
        'Erleben Sie einen unvergesslichen Tag im Herzen des Minho, wo sich Tradition, Geschichte und Aromen vereinen.'
      ),
      highlights: [
        t('Barcelos: berço do famoso Galo e do seu vibrante artesanato', 'Barcelos: birthplace of the famous Rooster & vibrant crafts', 'Barcelos: Wiege des berühmten Hahns & Handwerks'),
        t('Ponte de Lima: a vila mais antiga do país com a sua ponte histórica', 'Ponte de Lima: oldest town in Portugal with historic bridge', 'Ponte de Lima: älteste Stadt Portugals mit historischer Brücke'),
        t('Viana do Castelo: Monte de Santa Luzia e centro histórico', 'Viana do Castelo: Monte de Santa Luzia & historic center', 'Viana do Castelo: Monte de Santa Luzia & historisches Zentrum'),
        t('Transporte privado com A/C, guia local e ambiente autêntico', 'Private A/C transport with local guide and authentic vibe', 'Privater klimatisierter Transport mit Guide'),
      ],
      narrative: [
        t(
          'Viva um dia memorável no coração do Minho, onde tradição, história e sabores se unem numa experiência única.',
          'Experience an unforgettable day in the heart of Minho, where tradition, history, and flavors unite in a unique experience.',
          'Erleben Sie einen unvergesslichen Tag im Herzen des Minho, wo Tradition, Geschichte und Genuss verschmelzen.'
        ),
        t(
          'Partindo do Porto, exploramos três das cidades mais encantadoras do norte de Portugal: Barcelos, berço do famoso Galo e do seu vibrante artesanato; Ponte de Lima, a vila mais antiga do país, com a sua ponte histórica e ambiente romântico junto ao rio; e Viana do Castelo, onde o Monte de Santa Luzia e o centro histórico revelam o melhor da arquitetura, cultura e fé do Minho.',
          'Departing from Porto, we explore three of Northern Portugal’s most enchanting towns: Barcelos, birthplace of the famous Rooster and vibrant crafts; Ponte de Lima, the country’s oldest charted village with its historic bridge; and Viana do Castelo, crowned by Mount Santa Luzia.',
          'Ab Porto erkunden wir drei bezaubernde Städte: Barcelos, die Wiege des berühmten Hahns; Ponte de Lima mit der historischen Brücke; und Viana do Castelo am Monte de Santa Luzia.'
        ),
        t(
          'Durante o passeio, desfrute de paisagens deslumbrantes e histórias locais. Tudo isto com transporte confortável, guia local e um ambiente autêntico e descontraído. Ideal para quem quer sair do comum e vivenciar o verdadeiro norte de Portugal num só dia.',
          'Throughout the tour, savor breathtaking landscapes and local lore, all with comfortable transport, a dedicated local guide, and a warm, relaxed atmosphere.',
          'Genießen Sie atemberaubende Landschaften, Geschichten vor Ort und den Komfort eines privaten Fahrzeugs mit Guide.'
        ),
        t(
          'Reserve já e leve para casa memórias repletas de cor, sabor e tradição!',
          'Book now and take home memories brimming with color, flavor, and authentic tradition!',
          'Buchen Sie jetzt und nehmen Sie unvergessliche Erinnerungen an Farbe, Geschmack und Tradition mit nach Hause!'
        ),
      ],
      included: [
        t('Veículo com ar condicionado', 'Air-conditioned vehicle', 'Klimatisiertes Fahrzeug'),
        t('Transporte privado', 'Private transport', 'Privater Transport'),
        t('Visita guiada', 'Guided tour', 'Geführte Tour'),
        t('Água mineral', 'Bottled mineral water', 'Mineralwasser'),
      ],
      exclusions: [
        t('Gorjetas para o almoço', 'Tips for lunch', 'Trinkgelder für das Mittagessen'),
      ],
      notes: [
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não há transporte público por perto.', 'No public transit immediately nearby.', 'Keine unmittelbaren öffentlichen Verkehrsmittel.'),
        t('Bebês não devem sentar no colo.', 'Infants must not sit on laps.', 'Kleinkinder dürfen nicht auf dem Schoß sitzen.'),
        t('No dia anterior, o cliente receberá informações sobre o horário de embarque e detalhes do guia.', 'The day prior, guests receive details regarding pickup schedule and guide contact.', 'Am Vortag erhalten die Gäste Informationen zur Abholzeit und Details zum Guide.'),
      ],
    },
    {
      id: 'porto',
      title: t(
        'PORTO-GAIA-MATOSINHOS: Tour Panorâmico Privado saindo do Porto',
        'PORTO-GAIA-MATOSINHOS: Private Scenic Tour from Porto',
        'PORTO-GAIA-MATOSINHOS: Private Panorama-Tour ab Porto'
      ),
      location: 'Porto, Gaia & Matosinhos',
      badge: t('Tour Panorâmico Privado', 'Private Panoramic Tour', 'Private Panorama-Tour'),
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80',
      duration: t('4 horas', '4 hours', '4 Stunden'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Tour Privado Exclusivo', 'Exclusive Private Tour', 'Exklusive private Tour'),
      desc: t(
        'Descubra os locais mais valiosos da cidade nesta excursão privada de meio dia pelo Porto, Gaia e Matosinhos.',
        'Discover the most cherished city locations on this half-day private tour through Porto, Gaia, and Matosinhos.',
        'Entdecken Sie die wertvollsten Orte der Stadt auf dieser halbtägigen privaten Tour durch Porto, Gaia und Matosinhos.'
      ),
      highlights: [
        t(
          'Porto: Centro histórico, Torre dos Clérigos, São Bento, Ribeira e miradouros panorâmicos',
          'Porto: Historic center, Clérigos Tower, São Bento tiles, Ribeira and scenic viewpoints',
          'Porto: Altstadt, Clérigos-Turm, São Bento, Ribeira und Panoramablicke'
        ),
        t(
          'Vila Nova de Gaia: Travessia da Ponte Luís I, caves de vinho e vistas do Jardim do Morro',
          'Vila Nova de Gaia: Dom Luís I Bridge, Port wine cellars and Jardim do Morro vistas',
          'Vila Nova de Gaia: Brücke Luís I, Weinkeller und Ausblick vom Jardim do Morro'
        ),
        t(
          'Matosinhos: Costa atlântica, brisa do mar na praia e esculturas modernas como a Anémona',
          'Matosinhos: Atlantic coast, ocean breeze at the beach, and iconic Anémona sculpture',
          'Matosinhos: Atlantikküste, Meeresbrise am Strand und Skulptur Anémona'
        ),
        t(
          'Tour 100% privado com traslado de hotel, A/C, água mineral e roteiro personalizado',
          '100% private tour with hotel transfer, A/C, bottled water and tailored itinerary',
          '100 % private Tour mit Hoteltransfer, A/C, Mineralwasser und individueller Route'
        ),
      ],
      narrative: [
        t(
          'Descubra o melhor do norte de Portugal num tour privado exclusivo que combina história, cultura, vistas deslumbrantes e o charme da costa. Este tour de meio dia leva você a explorar três cidades emblemáticas – Porto, Vila Nova de Gaia e Matosinhos – de forma confortável e personalizada.',
          'Discover the finest highlights of Northern Portugal on an exclusive private tour combining history, culture, breathtaking vistas, and coastal charm. This half-day journey explores three emblematic cities – Porto, Vila Nova de Gaia, and Matosinhos – with ultimate comfort and customization.',
          'Entdecken Sie das Beste Nordportugals auf einer exklusiven privaten Tour, die Geschichte, Kultur, atemberaubende Ausblicke und Küstenflair vereint. Erkunden Sie Porto, Vila Nova de Gaia und Matosinhos ganz komfortabel.'
        ),
        t(
          'Porto: Desfrute do centro histórico da cidade, da icônica Torre dos Clérigos, admire os painéis de azulejos da Estação de São Bento e aprecie o vibrante Cais da Ribeira, às margens do Rio Douro. Incluímos paradas em miradouros para fotografias panorâmicas inesquecíveis.',
          'Porto: Enjoy the historic city center, iconic Clérigos Tower, admire the celebrated tile panels at São Bento Station, and savor the vibrant Ribeira quay along the Douro River. We include curated viewpoint stops for unforgettable photos.',
          'Porto: Genießen Sie die historische Altstadt, den Clérigos-Turm, die Kacheln des Bahnhofs São Bento und die lebendige Ribeira am Douro-Fluss mit fantastischen Aussichtspunkten für Erinnerungsfotos.'
        ),
        t(
          'Vila Nova de Gaia: Atravesse a icônica Ponte Luís I para descobrir a cidade vizinha, famosa pelas suas caves de vinho. Relaxe no Jardim do Morro e desfrute de uma das vistas mais impressionantes da região.',
          'Vila Nova de Gaia: Cross the iconic Dom Luís I Bridge to explore the sister city renowned for its world-famous wine lodges. Unwind at Jardim do Morro and marvel at one of Portugal’s most striking panoramic vistas.',
          'Vila Nova de Gaia: Überqueren Sie die berühmte Brücke Luís I und erkunden Sie die Stadt der Portweinkeller. Entspannen Sie im Jardim do Morro mit einem der spektakulärsten Panoramablicke der Region.'
        ),
        t(
          'Matosinhos: Termine o tour com uma visita à costa atlântica, conhecida pelas suas praias e excelente gastronomia. Aproveite a brisa do mar na Praia de Matosinhos e admire atrações modernas como a Anémona.',
          'Matosinhos: Conclude the tour along the breezy Atlantic coast, famous for seafood gastronomy and golden sandy beaches. Feel the fresh ocean air at Matosinhos Beach and admire striking modern art landmarks like the Anémona.',
          'Matosinhos: Beenden Sie die Tour an der Atlantikküste, bekannt für Strände und fantastische Gastronomie. Genießen Sie die Meeresbrise am Strand von Matosinhos und bewundern Sie Skulpturen wie die Anémona.'
        ),
      ],
      included: [
        t('Traslado de ida e volta do hotel', 'Round-trip hotel pickup and drop-off', 'Hin- und Rücktransfer ab/bis Hotel'),
        t('Veículo com ar condicionado', 'Air-conditioned vehicle', 'Klimatisiertes Fahrzeug'),
        t('Água mineral', 'Bottled mineral water', 'Mineralwasser'),
        t('Visita guiada', 'Guided tour', 'Geführte Tour'),
        t('Roteiro personalizado de acordo com os interesses do cliente', 'Customized itinerary according to guest preferences', 'Individuell abgestimmter Reiseverlauf nach Gästewunsch'),
      ],
      exclusions: [
        t('Gorjetas', 'Gratuities / Tips', 'Trinkgelder'),
        t('Entrada nos monumentos', 'Entrance tickets to monuments', 'Eintrittsgelder für Sehenswürdigkeiten'),
        t('Almoço', 'Lunch', 'Mittagessen'),
      ],
      notes: [
        t('Bebês não devem sentar no colo.', 'Infants must not sit on laps.', 'Kleinkinder dürfen nicht auf dem Schoß sitzen.'),
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não há transporte público por perto.', 'No public transit immediately nearby.', 'Keine unmittelbaren öffentlichen Verkehrsmittel.'),
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('O serviço de busca e retorno é realizado no hotel do cliente. O horário de busca será informado ao cliente no dia anterior ao passeio.', 'Pickup and drop-off is provided directly at guest hotel. Exact pickup time is confirmed the day prior to tour.', 'Abholung und Rücktransfer erfolgen direkt am Hotel. Die genaue Abholzeit wird am Vortag mitgeteilt.'),
      ],
    },
    {
      id: 'douro_amarante',
      title: t(
        'VALE DO DOURO E AMARANTE: Excursão Privada com Paisagens Panorâmicas ou Experiência Enológica',
        'DOURO VALLEY & AMARANTE: Private Tour with Scenic Landscapes or Wine Experience',
        'DOURO-TAL & AMARANTE: Private Tour mit Panoramalandschaften oder Weinerlebnis'
      ),
      location: 'Douro & Amarante',
      badge: t('Excursão Privada', 'Private Tour', 'Private Tour'),
      image: '/images/amarante_douro.jpg',
      duration: t('10 horas', '10 hours', '10 Stunden'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Carro Particular', 'Private Vehicle', 'Privatfahrzeug'),
      desc: t(
        'Viaje em carro particular, prove vinhos de alta qualidade na adega, desfrute de um almoço opcional e relaxe em um pequeno cruzeiro pelo rio Pinhão.',
        'Travel in a private vehicle, taste high-quality wines at the winery, enjoy an optional lunch, and relax on a scenic Pinhão river cruise.',
        'Reisen Sie im Privatwagen, verkosten Sie erlesene Weine im Weingut, genießen Sie ein optionales Mittagessen und entspannen Sie bei einer Bootsfahrt in Pinhão.'
      ),
      highlights: [
        t(
          'Duas opções personalizadas: Opção Paisagens ou Opção Vinho e Rio',
          'Two customizable options: Scenic Landscapes or Wine & River',
          'Zwei individuelle Optionen: Panoramalandschaften oder Wein & Fluss'
        ),
        t(
          'Visita à vila histórica de Amarante, Ponte de São Gonçalo e doces conventuais',
          'Historic town of Amarante, São Gonçalo Bridge and regional conventual sweets',
          'Historisches Amarante, São Gonçalo Brücke und traditionelles Gebäck'
        ),
        t(
          'Pinhão, Peso da Régua e vinhas em socalcos do Vale do Douro',
          'Pinhão, Peso da Régua and terraced vineyards of the Douro Valley',
          'Pinhão, Peso da Régua und terrassierte Weinberge des Douro-Tals'
        ),
        t(
          'Visita guiada a adega familiar com prova de vinhos e cruzeiro no rio (opcionais)',
          'Guided visit to family winery with wine tasting and river cruise (optional)',
          'Führung durch Familienweingut mit Weinprobe und Flussfahrt (optional)'
        ),
      ],
      narrative: [
        t(
          'Descubra a beleza singular do Vale do Douro num tour privado de um dia com partida do Porto, acompanhado por um guia experiente que partilhará histórias sobre a história e a cultura local. Concebido para oferecer experiências adaptadas a diferentes interesses, este tour oferece duas opções para que possa escolher a experiência ideal.',
          'Discover the singular beauty of the Douro Valley on a full-day private tour departing from Porto, accompanied by an experienced guide sharing rich insights into local history and culture. Designed to cater to different preferences, this tour offers two options so you can select the ideal experience.',
          'Entdecken Sie die einzigartige Schönheit des Douro-Tals auf einer ganztägigen privaten Tour ab Porto, begleitet von einem erfahrenen Guide. Wählen Sie aus zwei maßgeschneiderten Optionen für Ihr ideales Erlebnis.'
        ),
        t(
          'A opção Paisagens é perfeita para quem quer concentrar-se nas paisagens e na cultura do Douro e não aprecia vinhos. Ideal para admirar as vinhas nos socalcos, explorar aldeias pitorescas como o Pinhão e o Peso da Régua e desfrutar de vistas deslumbrantes. Inclui também uma visita à vila de Amarante, onde poderá conhecer a igreja histórica, atravessar a ponte sobre o rio Tâmega e provar doces locais.',
          'The Landscapes option is perfect for travelers who wish to focus on scenic vistas and cultural heritage rather than wine. Ideal for admiring hillside terraced vineyards, exploring picturesque villages like Pinhão and Peso da Régua, and capturing breathtaking views. It also includes a visit to the charming town of Amarante to admire its historic church, cross the bridge over the Tâmega River, and sample celebrated local pastries.',
          'Die Landschaftsoption ist ideal für Gäste, die sich auf Natur und Kultur ohne Wein konzentrieren möchten: Panoramablicke auf Terrassenweinberge, Dörfer wie Pinhão und Peso da Régua sowie ein Besuch im historischen Amarante mit seiner berühmten Brücke und traditionellem Gebäck.'
        ),
        t(
          'A opção Vinho e Rio acrescenta à opção Paisagens uma visita a uma adega familiar com prova de vinhos e um passeio de barco no Pinhão, permitindo-lhe ver o vale de uma perspetiva única, entre a terra e o rio.',
          'The Wine and River option complements the Landscapes experience with a guided visit to a boutique family winery featuring curated wine tastings, along with a serene river cruise in Pinhão, offering a distinctive perspective of the valley from the water.',
          'Die Wein & Fluss-Option erweitert das Erlebnis um einen Besuch eines familiengeführten Weinguts mit Weinprobe und einer entspannenden Bootsfahrt in Pinhão.'
        ),
      ],
      included: [
        t('Veículo com ar condicionado', 'Air-conditioned vehicle', 'Klimatisiertes Fahrzeug'),
        t('Transporte privado', 'Private transport', 'Privater Transport'),
        t('Embarque e desembarque no hotel do cliente', 'Hotel pickup and drop-off', 'Abholung und Rücktransfer am Hotel'),
        t('Visita guiada a 1 adega (opcional)', 'Guided visit to 1 winery (optional)', 'Führung durch 1 Weingut (optional)'),
        t('Cruzeiro de 1 hora no Pinhão (opcional)', '1-hour cruise in Pinhão (optional)', '1-stündige Bootsfahrt in Pinhão (optional)'),
        t('Parada para fotos', 'Stops for photos', 'Fotostopps an Aussichtspunkten'),
        t('Água mineral', 'Bottled mineral water', 'Mineralwasser'),
        t('Guia de viagem', 'Tour guide', 'Reiseleiter / Guide'),
      ],
      exclusions: [
        t('Almoço com gorjetas', 'Lunch and gratuities', 'Mittagessen und Trinkgelder'),
      ],
      notes: [
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não há transporte público por perto.', 'No public transit immediately nearby.', 'Keine unmittelbaren öffentlichen Verkehrsmittel.'),
        t('Bebês não devem sentar no colo.', 'Infants must not sit on laps.', 'Kleinkinder dürfen nicht auf dem Schoß sitzen.'),
        t('O serviço de busca e retorno é feito no hotel ou apartamento do cliente. Forneça-nos o endereço completo.', 'Pickup and drop-off is provided directly at guest hotel or apartment. Please provide the complete address.', 'Abholung und Rücktransfer direkt am Hotel oder Apartment. Bitte vollständige Adresse angeben.'),
        t('O guia informará, no dia anterior, o horário exato do encontro.', 'The guide will notify guests the day prior regarding the exact pickup time.', 'Der Guide informiert am Vortag über die genaue Abholzeit.'),
      ],
    },
    {
      id: 'santiago_braga',
      title: t(
        'SANTIAGO DE COMPOSTELA + BRAGA: Tour Privado saindo do Porto',
        'SANTIAGO DE COMPOSTELA + BRAGA: Private Tour from Porto',
        'SANTIAGO DE COMPOSTELA + BRAGA: Private Tour ab Porto'
      ),
      location: 'Santiago & Braga',
      badge: t('Tour Privado', 'Private Tour', 'Private Tour'),
      image: '/images/santiago_compostela.jpg',
      duration: t('10 horas e 30 minutos', '10 hours 30 mins', '10 Stunden 30 Minuten'),
      difficulty: t('Fácil', 'Easy', 'Leicht'),
      groupSize: t('Transporte Particular', 'Private Transport', 'Privater Transport'),
      desc: t(
        'Desfrute deste passeio privado de 1 dia e conheça dois dos mais importantes centros religiosos de Portugal.',
        'Enjoy this 1-day private tour and discover two of the most important religious centers.',
        'Genießen Sie diese 1-tägige private Tour und entdecken Sie zwei bedeutende religiöse Zentren.'
      ),
      highlights: [
        t(
          'Catedral de Santiago de Compostela: Túmulo do Apóstolo, Praza do Obradoiro e Missa do Peregrino',
          'Santiago de Compostela Cathedral: Apostle tomb, Praza do Obradoiro and Pilgrim Mass',
          'Kathedrale von Santiago de Compostela: Apostelgrab, Praza do Obradoiro und Pilgermesse'
        ),
        t(
          'Almoço livre e tempo para explorar o centro histórico da Galiza',
          'Free time and lunch in the historic center of Santiago',
          'Freizeit und Mittagessen im historischen Zentrum von Santiago'
        ),
        t(
          'Braga: Santuário do Bom Jesus do Monte e a sua monumental escadaria barroca',
          'Braga: Sanctuary of Bom Jesus do Monte and its monumental baroque staircase',
          'Braga: Wallfahrtskirche Bom Jesus do Monte mit monumentaler Treppe'
        ),
        t(
          'Visita à Sé de Braga, a mais antiga catedral do país, com transporte privado e A/C',
          'Visit to Braga Cathedral (Sé), the oldest in Portugal, with private A/C transport',
          'Besuch der Kathedrale von Braga (Sé), der ältesten Portugals, mit privatem A/C-Fahrzeug'
        ),
      ],
      narrative: [
        t(
          'Começamos o dia com o traslado do seu hotel na cidade do Porto e seguimos para uma experiência inesquecível por dois dos destinos mais emblemáticos da Península Ibérica.',
          'We begin the day with hotel pickup in Porto and embark on an unforgettable journey through two of the most iconic heritage destinations in the Iberian Peninsula.',
          'Wir beginnen den Tag mit der Abholung an Ihrem Hotel in Porto und brechen zu einer unvergesslichen Reise zu zwei der symbolträchtigsten Orte der Iberischen Halbinsel auf.'
        ),
        t(
          'Descubra Santiago de Compostela, onde se encontra a imponente Catedral, uma verdadeira obra-prima dos estilos românico, gótico e barroco. Segundo a tradição, a catedral guarda o túmulo do Apóstolo Santiago Magno, padroeiro da Espanha, tornando-se um marco indispensável da Galiza.',
          'Discover Santiago de Compostela, home to its imposing Cathedral, a masterpiece spanning Romanesque, Gothic, and Baroque styles. According to tradition, the cathedral enshrines the tomb of the Apostle Saint James the Greater, patron saint of Spain, making it an indispensable landmark in Galicia.',
          'Entdecken Sie Santiago de Compostela und seine imposante Kathedrale, ein Meisterwerk aus Romanik, Gotik und Barock mit dem Grab des Apostels Jakobus.'
        ),
        t(
          'Aproveite o tempo livre para explorar a catedral ao seu próprio ritmo, assistir à Missa do Peregrino (opcional) e admirar o deslumbrante Botafumeiro. Desfrute de um almoço livre no centro histórico de Santiago.',
          'Enjoy ample free time to explore the cathedral at your own pace, attend the Pilgrim Mass (optional), and admire the famed swinging Botafumeiro. Savor lunch at your leisure in the historic center of Santiago.',
          'Nutzen Sie die freie Zeit, um die Kathedrale zu erkunden, der Pilgermesse beizuwohnen (optional) und das Botafumeiro zu bestaunen. Genießen Sie Freizeit zum Mittagessen in der Altstadt.'
        ),
        t(
          'Em seguida, partimos para Braga, uma das cidades mais encantadoras de Portugal. Começamos com uma visita ao Santuário do Bom Jesus do Monte, famoso pela sua monumental escadaria. Continuamos até à Sé de Braga, a catedral mais antiga do país.',
          'Next, we journey to Braga, one of Portugal’s most enchanting cities. We begin with a visit to the monumental Sanctuary of Bom Jesus do Monte, celebrated for its zig-zagging stairways, before continuing to Braga Cathedral (Sé), the oldest in the country.',
          'Anschließend fahren wir nach Braga: Besuch der Wallfahrtskirche Bom Jesus do Monte mit ihrer Treppe und der Kathedrale von Braga, der ältesten des Landes.'
        ),
        t(
          'Este tour privado oferece conforto e uma forma única de explorar dois destinos incríveis.',
          'This private tour delivers supreme comfort and a unique way to explore two incredible destinations in one day.',
          'Diese private Tour bietet Komfort und eine exklusive Möglichkeit, zwei herausragende Reiseziele zu erleben.'
        ),
      ],
      included: [
        t('Traslado de ida e volta do hotel do cliente', 'Round-trip hotel pickup and drop-off', 'Hin- und Rücktransfer ab/bis Kundenhotel'),
        t('Visita guiada', 'Guided tour', 'Geführte Tour'),
        t('Veículo com ar-condicionado', 'Air-conditioned vehicle', 'Klimatisiertes Fahrzeug'),
        t('Todas as taxas e impostos', 'All fees and taxes', 'Alle Gebühren und Steuern'),
        t('Água mineral', 'Bottled mineral water', 'Mineralwasser'),
        t('Transporte particular', 'Private transportation', 'Privater Transport'),
      ],
      exclusions: [
        t('Dicas / Gorjetas para o almoço', 'Tips / Gratuities for lunch', 'Trinkgelder für das Mittagessen'),
      ],
      notes: [
        t('Bebês não devem sentar no colo.', 'Infants must not sit on laps.', 'Kleinkinder dürfen nicht auf dem Schoß sitzen.'),
        t('Cadeiras infantis indisponíveis.', 'Child seats unavailable.', 'Kindersitze nicht verfügbar.'),
        t('Não é adequado para animais de estimação.', 'Not suitable for pets.', 'Nicht für Haustiere geeignet.'),
        t('Não há transporte público por perto.', 'No public transit immediately nearby.', 'Keine unmittelbaren öffentlichen Verkehrsmittel.'),
        t('Não acessível para cadeirantes.', 'Not wheelchair accessible.', 'Nicht rollstuhlgerecht.'),
        t('Traslado de ida e volta do hotel do cliente.', 'Round-trip hotel pickup and drop-off provided.', 'Hin- und Rücktransfer ab/bis Kundenhotel inklusive.'),
      ],
    },
  ];

  const features = [
    {
      title: t('Roteiros Personalizados à Medida', '100% Tailored Itineraries', '100 % maßgeschneiderte Routen'),
      desc: t('Adaptados aos seus interesses: cultura, natureza, fotografia, gastronomia ou história.', 'Designed around your interests: culture, nature, photography, food, or heritage.', 'Gestaltet nach Ihren Interessen: Kultur, Natur, Fotografie, Kulinarik oder Geschichte.'),
    },
    {
      title: t('Transporte Confortável & Privativo', 'Private & Premium Transport', 'Privater & komfortabler Transport'),
      desc: t('Veículos modernos com ar condicionado, água fresca e condutor experiente.', 'Modern air-conditioned vehicles with complimentary amenities and expert driver.', 'Moderne, klimatisierte Fahrzeuge mit erstklassigem Komfort und erfahrenem Fahrer.'),
    },
    {
      title: t('Guias Locais Especialistas', 'Expert Local Guides', 'Erfahrene lokale Guides'),
      desc: t('Acesso a histórias, segredos e locais genuínos fora dos circuitos turísticos de massas.', 'Access to authentic stories, hidden gems, and local life away from mass tourism.', 'Einblicke in authentische Geschichten, Geheimtipps und lokale Traditionen abseits des Massentourismus.'),
    },
    {
      title: t('Experiências Gastronómicas & Vinho', 'Gastronomy & Wine Tastings', 'Gastronomie & Weinverkostungen'),
      desc: t('Seleção cuidada de restaurantes típicos e quintas com as melhores colheitas de Portugal.', 'Handpicked authentic regional dining and premier wine estates.', 'Sorgfältig ausgewählte regionale Restaurants und Weingüter mit exzellenten Jahrgängen.'),
    },
  ];

  return (
    <section id="tours-norte" className="py-12 sm:py-16 bg-[#F7F4EE] text-[#273334]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Intro Card */}
        <div className="bg-[#E4CEAD]/25 border border-[#73999C]/25 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#73999C]/15 border border-[#73999C]/30 text-[#73999C] text-xs font-bold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-[#C96F4B]" />
                <span>{t('Norte Litoral & Interior', 'North Coast & Inland', 'Nordküste & Binnenland')}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-wider text-[#273334] leading-tight">
                {t('TOURS NORTE LITORAL & INTERIOR', 'NORTH TOURS COAST & INLAND', 'NORD-TOUREN KÜSTE & INLAND')}
              </h2>

              <p className="text-sm sm:text-base text-[#273334]/80 leading-relaxed">
                {t(
                  'Conectamos a essência do norte português: da energia atlântica e praias de Viana do Castelo às curvas sagradas do Rio Douro, passando pelo Berço de Guimarães, a monumentalidade de Braga e a autenticidade de Ponte de Lima.',
                  'We connect the very essence of northern Portugal: from the Atlantic vigor and beaches of Viana do Castelo to the sacred contours of the Douro River, Guimarães the birthplace, monumental Braga, and charming Ponte de Lima.',
                  'Wir verbinden die Essenz Nordportugals: von der atlantischen Küste Viana do Castelos bis zu den malerischen Schleifen des Douro, der Wiege Guimarães, dem monumentalen Braga und dem charmanten Ponte de Lima.'
                )}
              </p>

              {/* Feature items checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 border border-[#73999C]/20 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C96F4B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#273334] uppercase tracking-wider">{f.title}</h4>
                      <p className="text-[11px] text-[#273334]/75 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenBookingModal('tours_norte')}
                  className="px-6 py-3 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('Reservar Tour / Solicitar Proposta', 'Book Tour / Request Itinerary', 'Tour buchen / Angebot anfordern')}</span>
                </button>

                {onOpenBudgetModal && (
                  <button
                    onClick={() => onOpenBudgetModal('Tours Norte Litoral & Interior')}
                    className="px-5 py-3 rounded-2xl bg-white hover:bg-[#F7F4EE] text-[#273334] border border-[#73999C]/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#73999C]" />
                    <span>{t('Personalizar Roteiro', 'Customize Route', 'Route anpassen')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Visual highlight showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#73999C]/30 shadow-md relative group">
                <img
                  src={TOURS_NORTE_IMAGE}
                  alt="Tours Norte Douro e Guimarães"
                  className="w-full h-auto aspect-square object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/85 via-[#273334]/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8C7C2]">
                    Douro & Castelo de Guimarães
                  </span>
                  <h3 className="font-display text-xl text-white uppercase tracking-wider font-bold">
                    Tours Norte Litoral & Interior
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    {t('Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo', 'Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo', 'Porto, Douro, Braga, Guimarães, Ponte de Lima & Viana do Castelo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display text-2xl sm:text-4xl uppercase tracking-wider text-[#273334]">
              {t('DESTINOS & ITINERÁRIOS EM DESTAQUE', 'FEATURED DESTINATIONS & ROUTES', 'HIGHLIGHT-ZIELE & ROUTEN')}
            </h3>
            <p className="text-xs sm:text-sm text-[#273334]/75">
              {t('Cada experiência é planeada com rigor e paixão, respeitando o seu ritmo e preferências.', 'Each journey is carefully crafted with care and flexibility to match your pace.', 'Jede Reise wird mit Sorgfalt und Flexibilität nach Ihrem Tempo gestaltet.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#73999C]/25 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 pointer-events-none">
                      <div className="bg-[#273334]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1.5 shrink min-w-0">
                        <MapPin className="w-3 h-3 text-[#C96F4B] shrink-0" />
                        <span className="truncate">{dest.location}</span>
                      </div>

                      <div className="bg-[#C96F4B] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs shrink-0 whitespace-nowrap">
                        {dest.badge}
                      </div>
                    </div>

                    {/* Metadata overlay pills */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center gap-1.5">
                      <div className="bg-[#273334]/85 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#E4CEAD]" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="bg-[#273334]/85 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#E4CEAD]" />
                        <span>{dest.difficulty}</span>
                      </div>
                      <div className="bg-[#273334]/85 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#E4CEAD]" />
                        <span>{dest.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h4 className="font-display text-xl uppercase tracking-wider text-[#273334] group-hover:text-[#C96F4B] transition-colors leading-snug">
                      {dest.title}
                    </h4>

                    <p className="text-xs text-[#273334]/80 leading-relaxed">
                      {dest.desc}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-1.5 pt-2 border-t border-[#73999C]/15">
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] font-medium text-[#273334]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#73999C] shrink-0 mt-1.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTour(dest)}
                    className="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-[#E4CEAD]/30 text-[#273334] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-stone-200"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C96F4B]" />
                    <span>{t('Ver Roteiro & O Que Inclui', 'View Full Route & Inclusions', 'Vollständige Route & Inklusionen')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(`tour_${dest.id}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#73999C]/15 hover:bg-[#73999C] text-[#273334] hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('Solicitar Este Tour', 'Inquire This Tour', 'Diese Tour anfragen')}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#73999C]/25 overflow-hidden my-auto max-h-[90vh] flex flex-col">
            {/* Modal Header with Image */}
            <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
              <img
                src={selectedTour.image}
                alt={selectedTour.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/95 via-[#273334]/40 to-black/20" />

              <button
                onClick={() => setSelectedTour(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="bg-[#C96F4B] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md">
                    {selectedTour.badge}
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E4CEAD]" />
                    {selectedTour.location}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white">
                  {selectedTour.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[#273334]">
              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-[#F7F4EE] border border-[#73999C]/20 text-center">
                <div className="space-y-0.5">
                  <div className="flex items-center justify-center gap-1 text-[#C96F4B]">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">{t('Duração', 'Duration', 'Dauer')}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#273334]">{selectedTour.duration}</p>
                </div>
                <div className="space-y-0.5 border-x border-[#73999C]/20">
                  <div className="flex items-center justify-center gap-1 text-[#73999C]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">{t('Dificuldade', 'Difficulty', 'Schwierigkeit')}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#273334]">{selectedTour.difficulty}</p>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center justify-center gap-1 text-[#273334]">
                    <Users className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">{t('Grupo', 'Group', 'Gruppe')}</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#273334]">{selectedTour.groupSize}</p>
                </div>
              </div>

              {/* Tour Overview / Narrative */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C96F4B]" />
                  <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                    {t('O Roteiro & Experiência', 'Itinerary & Experience', 'Reiseverlauf & Erlebnis')}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#273334]/90 font-medium leading-relaxed bg-[#E4CEAD]/20 p-3.5 rounded-xl border border-[#73999C]/20">
                  {selectedTour.desc}
                </p>

                {selectedTour.narrative && selectedTour.narrative.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    {selectedTour.narrative.map((para, i) => (
                      <p key={i} className="text-xs sm:text-sm text-[#273334]/80 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* What is Included */}
              {selectedTour.included && selectedTour.included.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#73999C]/20">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#73999C]" />
                    <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                      {t('O que está incluído?', "What's Included?", 'Was ist enthalten?')}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedTour.included.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#73999C]/20 shadow-2xs text-xs text-[#273334]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#73999C] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exclusions */}
              {selectedTour.exclusions && selectedTour.exclusions.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#73999C]/20">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#C96F4B]" />
                    <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                      {t('Exclusões', 'Exclusions', 'Nicht enthalten')}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedTour.exclusions.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-stone-200 text-xs text-[#273334]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4B] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Notes / Observe */}
              {selectedTour.notes && selectedTour.notes.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#73999C]/20">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#73999C]" />
                    <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                      {t('Informações Importantes', 'Important Information', 'Wichtige Hinweise')}
                    </h4>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/20 space-y-2">
                    {selectedTour.notes.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#273334]/85">
                        <Info className="w-3.5 h-3.5 text-[#73999C] shrink-0 mt-0.5" />
                        <span className="leading-snug">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What to Bring / O que levar */}
              {selectedTour.whatToBring && selectedTour.whatToBring.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#73999C]/20">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-[#C96F4B]" />
                    <h4 className="font-display text-lg uppercase tracking-wider text-[#273334]">
                      {t('O que levar', 'What to Bring', 'Was mitzubringen ist')}
                    </h4>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#C96F4B]/10 border border-[#C96F4B]/20 space-y-2">
                    {selectedTour.whatToBring.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#273334]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C96F4B] shrink-0 mt-1.5" />
                        <span className="font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#F7F4EE] border-t border-[#73999C]/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedTour(null)}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-[#273334] text-xs font-bold uppercase tracking-wider border border-stone-200 transition-colors cursor-pointer"
              >
                {t('Fechar', 'Close', 'Schließen')}
              </button>

              <button
                type="button"
                onClick={() => {
                  const tourId = selectedTour.id;
                  setSelectedTour(null);
                  onOpenBookingModal(`tour_${tourId}`);
                }}
                className="px-6 py-2.5 rounded-xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#C96F4B]/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('Solicitar Reserva Deste Tour', 'Book This Tour Now', 'Diese Tour jetzt anfragen')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
