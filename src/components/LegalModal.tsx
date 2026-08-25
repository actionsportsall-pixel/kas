import React from 'react';
import { X, ShieldCheck, FileText, Cookie, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type LegalDocType = 'privacidade' | 'cookies' | 'termos' | 'reclamacoes';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { t } = useLanguage();

  if (!type) return null;

  const titles: Record<LegalDocType, string> = {
    privacidade: t('Política de Privacidade', 'Privacy Policy', 'Datenschutz-Bestimmungen'),
    cookies: t('Política de Cookies', 'Cookie Policy', 'Cookie-Richtlinie'),
    termos: t('Termos e Condições', 'Terms and Conditions', 'Allgemeine Geschäftsbedingungen'),
    reclamacoes: t('Livro de Reclamações Eletrónico', 'Electronic Complaints Book', 'Elektronisches Beschwerdebuch'),
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2B2F33]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/20 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-4 bg-[#F8F6F0] border-b border-[#2B2F33]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E07A5F]" />
            <h3 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider">
              {titles[type]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#F3E7DB] text-[#2B2F33] hover:text-[#E07A5F] border border-[#2B2F33]/15"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto text-[#2B2F33]/90 text-xs leading-relaxed">
          {type === 'privacidade' && (
            <div className="space-y-6 text-[#2B2F33]/90 text-xs leading-relaxed">
              <div className="text-center pb-2 border-b border-[#2B2F33]/15">
                <h3 className="font-display text-xl text-[#2B2F33] uppercase tracking-wider">
                  POLÍTICA DE PRIVACIDADE — KAS
                </h3>
              </div>

              <div className="space-y-3">
                <p>
                  A KAS valoriza a privacidade e a proteção dos dados pessoais dos seus clientes, parceiros, fornecedores, colaboradores e utilizadores do seu website.
                </p>
                <p>
                  A proteção dos dados pessoais constitui uma prioridade para a KAS. A presente Política de Privacidade tem como objetivo explicar, de forma clara e transparente, de que forma recolhemos, utilizamos, armazenamos e protegemos os dados pessoais dos utilizadores dos nossos serviços, website e restantes canais de comunicação.
                </p>
                <p>
                  A utilização do website da KAS pode, em determinadas situações, ser realizada sem que seja necessário fornecer dados pessoais. No entanto, para solicitar informações, efetuar reservas, contratar atividades ou experiências, participar em determinadas atividades ou utilizar serviços disponibilizados pela KAS, poderá ser necessário recolher e tratar determinados dados pessoais.
                </p>
                <p>
                  Sempre que o tratamento de dados pessoais dependa do consentimento do titular dos dados, este será solicitado de forma livre, específica, informada e inequívoca, nos termos do Regulamento Geral sobre a Proteção de Dados — Regulamento (UE) 2016/679 (RGPD).
                </p>
                <p>
                  O tratamento de dados pessoais, incluindo, entre outros, nome, endereço de e-mail, número de telefone, data de nascimento ou outros dados necessários à prestação dos serviços, será realizado de acordo com o RGPD e com a legislação portuguesa aplicável em matéria de proteção de dados.
                </p>
                <p>
                  Através da presente Política de Privacidade, a KAS pretende informar os titulares dos dados sobre:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Que dados pessoais podem ser recolhidos;</li>
                  <li>Para que finalidades são utilizados;</li>
                  <li>Qual o fundamento jurídico para o seu tratamento;</li>
                  <li>Durante quanto tempo poderão ser conservados;</li>
                  <li>Com quem poderão ser partilhados;</li>
                  <li>Quais os direitos dos titulares dos dados;</li>
                  <li>Como podem exercer esses direitos.</li>
                </ul>
                <p>
                  A KAS implementa medidas técnicas e organizativas adequadas para proteger os dados pessoais contra perda, destruição, alteração, acesso não autorizado ou qualquer outra forma de tratamento ilícito.
                </p>
                <p>
                  Apesar das medidas de segurança implementadas, nenhuma transmissão de dados através da Internet pode ser considerada absolutamente segura. Por esse motivo, os titulares dos dados poderão, sempre que adequado, utilizar meios alternativos de comunicação com a KAS.
                </p>
              </div>

              {/* 1. DEFINIÇÕES */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  1. DEFINIÇÕES
                </h4>
                <p>
                  A presente Política de Privacidade utiliza conceitos previstos no Regulamento Geral sobre a Proteção de Dados.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.1. Dados pessoais</h5>
                <p>
                  Considera-se dado pessoal qualquer informação relacionada com uma pessoa singular identificada ou identificável.
                </p>
                <p>Podem incluir, entre outros:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nome e apelido;</li>
                  <li>Data de nascimento;</li>
                  <li>Número de telefone;</li>
                  <li>Endereço de e-mail;</li>
                  <li>Morada;</li>
                  <li>Dados necessários para efetuar uma reserva;</li>
                  <li>Dados relativos à participação em atividades;</li>
                  <li>Dados de faturação;</li>
                  <li>Informação fornecida voluntariamente pelo cliente;</li>
                  <li>Imagens ou vídeos, quando aplicável e devidamente autorizados.</li>
                </ul>
                <p>
                  A KAS recolherá apenas os dados adequados, pertinentes e necessários para as finalidades para as quais são tratados.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.2. Titular dos dados</h5>
                <p>
                  O titular dos dados é a pessoa singular identificada ou identificável a quem dizem respeito os dados pessoais tratados pela KAS.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.3. Tratamento</h5>
                <p>
                  Tratamento corresponde a qualquer operação realizada sobre dados pessoais, incluindo a recolha, registo, organização, armazenamento, consulta, utilização, alteração, transmissão, divulgação, limitação, eliminação ou destruição.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.4. Limitação do tratamento</h5>
                <p>
                  A limitação do tratamento consiste na identificação dos dados pessoais armazenados com o objetivo de limitar o seu tratamento futuro.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.5. Definição de perfis</h5>
                <p>
                  A definição de perfis corresponde a qualquer forma de tratamento automatizado de dados pessoais destinada a avaliar determinados aspetos relacionados com uma pessoa singular.
                </p>
                <p>
                  A KAS não realizará atividades de definição de perfis que produzam efeitos jurídicos ou efeitos significativamente semelhantes sobre os titulares dos dados, salvo quando exista fundamento legal para tal tratamento.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.6. Pseudonimização</h5>
                <p>
                  A pseudonimização consiste no tratamento de dados pessoais de forma que estes deixem de poder ser atribuídos a um titular específico sem recurso a informações adicionais, desde que essas informações sejam mantidas separadamente e protegidas através de medidas técnicas e organizativas adequadas.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.7. Responsável pelo tratamento</h5>
                <p>
                  O responsável pelo tratamento é a pessoa singular ou coletiva que determina as finalidades e os meios do tratamento dos dados pessoais.
                </p>
                <p>
                  Para efeitos da presente Política de Privacidade, o responsável pelo tratamento é a KAS, cujos dados de identificação constam da Secção 2.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.8. Subcontratante</h5>
                <p>
                  O subcontratante é a pessoa singular ou coletiva que trata dados pessoais por conta do responsável pelo tratamento.
                </p>
                <p>
                  A KAS poderá recorrer a subcontratantes ou prestadores de serviços externos sempre que tal seja necessário para a prestação dos seus serviços, desde que sejam asseguradas as garantias adequadas de proteção de dados.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.9. Destinatário</h5>
                <p>
                  O destinatário é uma pessoa singular ou coletiva, entidade pública ou outro organismo a quem os dados pessoais sejam comunicados, nos termos legalmente permitidos.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.10. Terceiros</h5>
                <p>
                  Considera-se terceiro qualquer pessoa singular ou coletiva, entidade pública ou organismo que não seja o titular dos dados, o responsável pelo tratamento, o subcontratante ou uma pessoa autorizada a tratar os dados pessoais sob a autoridade direta do responsável pelo tratamento ou do subcontratante.
                </p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.11. Consentimento</h5>
                <p>
                  O consentimento corresponde a uma manifestação de vontade livre, específica, informada e inequívoca através da qual o titular dos dados aceita o tratamento dos seus dados pessoais para uma ou mais finalidades específicas.
                </p>
                <p>
                  O titular dos dados poderá retirar o seu consentimento a qualquer momento, sem que tal afete a licitude do tratamento efetuado com base no consentimento anteriormente prestado.
                </p>
              </div>

              {/* 2. IDENTIFICAÇÃO DO RESPONSÁVEL PELO TRATAMENTO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  2. IDENTIFICAÇÃO DO RESPONSÁVEL PELO TRATAMENTO
                </h4>
                <p>
                  Para efeitos do Regulamento Geral sobre a Proteção de Dados e da legislação portuguesa aplicável, o responsável pelo tratamento dos dados pessoais é:
                </p>
                <div className="bg-[#E4CEAD]/20 p-3 rounded-lg border border-[#E4CEAD]/50 space-y-1">
                  <p className="font-bold text-[#2B2F33]">KAS</p>
                  <p><span className="font-semibold">Denominação legal da empresa:</span> Salpicamar</p>
                  <p><span className="font-semibold">NIF:</span> 510 989 748</p>
                  <p><span className="font-semibold">Morada:</span> Matosinhos, Portugal</p>
                  <p><span className="font-semibold">E-mail:</span> <a href="mailto:actionsports.all@gmail.com" className="text-[#C96F4B] hover:underline">actionsports.all@gmail.com</a></p>
                </div>
              </div>

              {/* 3. RECOLHA DE DADOS PESSOAIS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  3. RECOLHA DE DADOS PESSOAIS
                </h4>
                <p>
                  A KAS poderá recolher dados pessoais através de diferentes meios, nomeadamente:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Website;</li>
                  <li>Formulários de contacto;</li>
                  <li>Formulários de reserva;</li>
                  <li>E-mail;</li>
                  <li>Telefone;</li>
                  <li>Redes sociais;</li>
                  <li>Comunicação presencial;</li>
                  <li>Parceiros comerciais;</li>
                  <li>Hotéis e operadores turísticos parceiros;</li>
                  <li>Processos de inscrição em atividades;</li>
                  <li>Eventos e experiências organizadas pela KAS.</li>
                </ul>
                <p>
                  Os dados recolhidos dependerão da natureza do serviço solicitado.
                </p>
                <p>
                  No âmbito de atividades desportivas, experiências, aulas, aluguer de equipamento ou eventos, poderão ser solicitados dados adicionais estritamente necessários para a organização, segurança, gestão da atividade, seguro ou cumprimento de obrigações legais.
                </p>
              </div>

              {/* 4. FINALIDADES DO TRATAMENTO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  4. FINALIDADES DO TRATAMENTO
                </h4>
                <p>
                  Os dados pessoais poderão ser tratados para as seguintes finalidades:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gestão de reservas;</li>
                  <li>Organização de atividades e experiências;</li>
                  <li>Prestação dos serviços contratados;</li>
                  <li>Comunicação com clientes;</li>
                  <li>Gestão de pagamentos e faturação;</li>
                  <li>Emissão de documentos contabilísticos;</li>
                  <li>Gestão de seguros associados às atividades;</li>
                  <li>Gestão de inscrições e participação em eventos;</li>
                  <li>Cumprimento de requisitos de segurança;</li>
                  <li>Gestão de reclamações e pedidos de informação;</li>
                  <li>Cumprimento de obrigações legais;</li>
                  <li>Gestão da relação comercial com clientes e parceiros;</li>
                  <li>Envio de informações relacionadas com serviços contratados;</li>
                  <li>Envio de comunicações de marketing, quando exista fundamento legal para tal;</li>
                  <li>Melhoria dos serviços e da experiência proporcionada aos clientes.</li>
                </ul>
                <p>
                  A KAS não utilizará os dados pessoais para finalidades incompatíveis com aquelas para as quais foram recolhidos, salvo quando exista fundamento legal para esse tratamento.
                </p>
              </div>

              {/* 5. FUNDAMENTO JURÍDICO DO TRATAMENTO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  5. FUNDAMENTO JURÍDICO DO TRATAMENTO
                </h4>
                <p>
                  O tratamento dos dados pessoais poderá ter como fundamento jurídico:
                </p>
                <ul className="list-none space-y-1.5 pl-2">
                  <li><strong>a)</strong> O consentimento do titular dos dados;</li>
                  <li><strong>b)</strong> A necessidade de execução de um contrato ou de diligências pré-contratuais;</li>
                  <li><strong>c)</strong> O cumprimento de obrigações legais a que a KAS esteja sujeita;</li>
                  <li><strong>d)</strong> A proteção de interesses vitais do titular dos dados ou de outra pessoa singular;</li>
                  <li><strong>e)</strong> O interesse legítimo da KAS, desde que não prevaleçam os direitos e liberdades fundamentais do titular dos dados.</li>
                </ul>
              </div>

              {/* 6. RESERVAS E CONTRATAÇÃO DE SERVIÇOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  6. RESERVAS E CONTRATAÇÃO DE SERVIÇOS
                </h4>
                <p>
                  A solicitação de uma reserva, inscrição ou contratação de um serviço da KAS poderá constituir uma proposta contratual por parte do cliente.
                </p>
                <p>
                  O contrato considera-se celebrado quando a KAS confirmar a reserva ou contratação do serviço, de acordo com as condições aplicáveis a cada atividade.
                </p>
                <p>
                  A confirmação poderá ser realizada por escrito, através de e-mail, formulário, plataforma de reservas ou outro meio de comunicação adequado.
                </p>
                <p>
                  Em situações de reserva de última hora, a confirmação poderá, quando necessário, ser efetuada verbalmente ou através de contacto telefónico.
                </p>
                <p>Dependendo do serviço e da data da reserva, poderá ser exigido:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pagamento integral;</li>
                  <li>Pagamento de um depósito;</li>
                  <li>Pagamento de uma percentagem do valor total;</li>
                  <li>Pagamento de outros valores previamente comunicados ao cliente.</li>
                </ul>
                <p>
                  As condições de cancelamento aplicáveis ao serviço contratado serão comunicadas ao cliente no momento da reserva ou estarão disponíveis nos respetivos termos e condições.
                </p>
              </div>

              {/* 7. DADOS DE MENORES */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  7. DADOS DE MENORES
                </h4>
                <p>
                  Sempre que uma atividade envolva menores de idade, a KAS poderá solicitar os dados necessários à sua inscrição, segurança, organização da atividade, seguro e cumprimento das obrigações legais aplicáveis.
                </p>
                <p>
                  Quando exigido pela legislação aplicável, o tratamento dos dados de menores dependerá da autorização do respetivo representante legal.
                </p>
              </div>

              {/* 8. FOTOGRAFIAS E VÍDEOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  8. FOTOGRAFIAS E VÍDEOS
                </h4>
                <p>
                  Durante determinadas atividades, eventos ou experiências organizadas pela KAS, poderão ser realizadas fotografias ou vídeos.
                </p>
                <p>
                  A utilização de imagens identificáveis de clientes para fins promocionais, publicitários ou de comunicação da KAS será realizada de acordo com o fundamento jurídico aplicável e, quando necessário, mediante consentimento prévio do titular dos dados.
                </p>
                <p>
                  O consentimento para utilização de imagem para fins promocionais poderá ser recusado ou retirado, sem prejuízo da participação nos serviços, salvo quando exista outro fundamento legal aplicável.
                </p>
              </div>

              {/* 9. PARTILHA DE DADOS COM TERCEIROS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  9. PARTILHA DE DADOS COM TERCEIROS
                </h4>
                <p>
                  A KAS poderá, quando necessário e de acordo com a legislação aplicável, partilhar determinados dados pessoais com:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Seguradoras;</li>
                  <li>Prestadores de serviços;</li>
                  <li>Parceiros comerciais;</li>
                  <li>Hotéis e operadores turísticos;</li>
                  <li>Entidades responsáveis pela realização de atividades;</li>
                  <li>Plataformas de reservas;</li>
                  <li>Prestadores de serviços informáticos;</li>
                  <li>Serviços de pagamento;</li>
                  <li>Contabilistas e consultores;</li>
                  <li>Autoridades públicas, quando legalmente exigido.</li>
                </ul>
                <p>
                  A KAS procurará garantir que os terceiros que tratem dados pessoais por sua conta oferecem garantias adequadas relativamente à proteção e segurança desses dados.
                </p>
              </div>

              {/* 10. TRANSFERÊNCIAS INTERNACIONAIS DE DADOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  10. TRANSFERÊNCIAS INTERNACIONAIS DE DADOS
                </h4>
                <p>
                  Sempre que a prestação de determinados serviços implique o tratamento ou transferência de dados pessoais para fora do Espaço Económico Europeu, a KAS assegurará que essa transferência é realizada em conformidade com o RGPD e com os mecanismos legais aplicáveis.
                </p>
              </div>

              {/* 11. PRAZO DE CONSERVAÇÃO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  11. PRAZO DE CONSERVAÇÃO
                </h4>
                <p>
                  A KAS conservará os dados pessoais apenas durante o período necessário para cumprir as finalidades para as quais foram recolhidos.
                </p>
                <p>Os dados poderão também ser conservados durante os períodos necessários para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cumprimento de obrigações legais;</li>
                  <li>Cumprimento de obrigações fiscais e contabilísticas;</li>
                  <li>Exercício ou defesa de direitos em processos judiciais;</li>
                  <li>Gestão de reclamações;</li>
                  <li>Cumprimento das condições contratuais.</li>
                </ul>
                <p>
                  Quando os dados deixarem de ser necessários, serão eliminados ou anonimizados, salvo quando exista obrigação legal de conservação.
                </p>
              </div>

              {/* 12. DIREITOS DOS TITULARES DOS DADOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  12. DIREITOS DOS TITULARES DOS DADOS
                </h4>
                <p>
                  Nos termos do RGPD, o titular dos dados poderá, quando aplicável, exercer os seguintes direitos:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Direito de acesso aos seus dados pessoais;</li>
                  <li>Direito de retificação;</li>
                  <li>Direito ao apagamento;</li>
                  <li>Direito à limitação do tratamento;</li>
                  <li>Direito à portabilidade dos dados;</li>
                  <li>Direito de oposição ao tratamento;</li>
                  <li>Direito de retirar o consentimento;</li>
                  <li>Direito de não ficar sujeito a decisões exclusivamente automatizadas, nos termos legalmente aplicáveis.</li>
                </ul>
                <p>
                  O exercício de determinados direitos poderá estar sujeito às limitações previstas na legislação aplicável.
                </p>
              </div>

              {/* 13. COMO EXERCER OS SEUS DIREITOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  13. COMO EXERCER OS SEUS DIREITOS
                </h4>
                <p>
                  O titular dos dados poderá exercer os seus direitos através de pedido dirigido à KAS.
                </p>
                <p>
                  O pedido deverá ser enviado para:
                </p>
                <div className="bg-[#E4CEAD]/20 p-3 rounded-lg border border-[#E4CEAD]/50">
                  <p><span className="font-semibold">E-mail:</span> <a href="mailto:actionsports.all@gmail.com" className="text-[#C96F4B] hover:underline">actionsports.all@gmail.com</a></p>
                </div>
                <p>
                  A KAS poderá solicitar informações adicionais para confirmar a identidade do requerente, sempre que tal seja necessário para proteger os dados pessoais contra acessos indevidos.
                </p>
                <p>
                  A KAS procurará responder aos pedidos dentro dos prazos previstos no RGPD.
                </p>
              </div>

              {/* 14. DIREITO DE APRESENTAR RECLAMAÇÃO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  14. DIREITO DE APRESENTAR RECLAMAÇÃO
                </h4>
                <p>
                  O titular dos dados tem o direito de apresentar uma reclamação junto da autoridade de controlo competente caso considere que o tratamento dos seus dados pessoais viola o RGPD ou outra legislação aplicável.
                </p>
                <p>
                  Em Portugal, a autoridade de controlo competente é a <strong>Comissão Nacional de Proteção de Dados (CNPD)</strong>.
                </p>
              </div>

              {/* 15. SEGURANÇA DOS DADOS */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  15. SEGURANÇA DOS DADOS
                </h4>
                <p>
                  A KAS adota medidas técnicas e organizativas adequadas destinadas a garantir um nível de segurança apropriado ao risco do tratamento dos dados pessoais.
                </p>
                <p>Estas medidas destinam-se, nomeadamente, a prevenir:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Acesso não autorizado;</li>
                  <li>Alteração indevida;</li>
                  <li>Perda ou destruição;</li>
                  <li>Divulgação não autorizada;</li>
                  <li>Utilização indevida dos dados pessoais.</li>
                </ul>
                <p>
                  Apesar das medidas implementadas, nenhum sistema de transmissão ou armazenamento de informação pode garantir segurança absoluta.
                </p>
              </div>

              {/* 16. COOKIES */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  16. COOKIES
                </h4>
                <p>
                  O website da KAS poderá utilizar cookies e tecnologias semelhantes para garantir o correto funcionamento do website, melhorar a experiência do utilizador, analisar a utilização do website e, quando aplicável, apresentar conteúdos ou comunicações relevantes.
                </p>
                <p>
                  Quando legalmente exigido, será solicitado o consentimento do utilizador antes da instalação de cookies não essenciais.
                </p>
                <p>
                  O utilizador poderá configurar ou alterar as suas preferências de cookies através das ferramentas disponibilizadas no website.
                </p>
              </div>

              {/* 17. COMUNICAÇÕES DE MARKETING */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  17. COMUNICAÇÕES DE MARKETING
                </h4>
                <p>
                  A KAS poderá enviar comunicações comerciais, newsletters ou informações sobre novas atividades, experiências, eventos, viagens e serviços quando exista fundamento jurídico para o respetivo tratamento.
                </p>
                <p>
                  Quando o envio depender de consentimento, o titular dos dados poderá retirar esse consentimento a qualquer momento.
                </p>
                <p>
                  Cada comunicação comercial deverá, quando aplicável, disponibilizar uma forma simples de cancelar a subscrição.
                </p>
              </div>

              {/* 18. ALTERAÇÕES À POLÍTICA DE PRIVACIDADE */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  18. ALTERAÇÕES À POLÍTICA DE PRIVACIDADE
                </h4>
                <p>
                  A KAS poderá atualizar a presente Política de Privacidade sempre que necessário, nomeadamente devido a alterações legislativas, regulamentares, tecnológicas ou relacionadas com os seus serviços.
                </p>
                <p>
                  A versão atualizada será disponibilizada através do website da KAS, sendo indicada a respetiva data de atualização.
                </p>
              </div>

              {/* 19. CONTACTO */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  19. CONTACTO
                </h4>
                <p>
                  Para qualquer questão relacionada com a presente Política de Privacidade ou com o tratamento dos seus dados pessoais, poderá contactar a KAS através dos seguintes meios:
                </p>
                <div className="bg-[#E4CEAD]/20 p-3 rounded-lg border border-[#E4CEAD]/50 space-y-1">
                  <p className="font-bold text-[#2B2F33]">KAS</p>
                  <p>Salpicamar</p>
                  <p>Matosinhos</p>
                  <p>4450-094</p>
                  <p>Portugal</p>
                  <p className="pt-1"><span className="font-semibold">E-mail:</span> <a href="mailto:actionsports.all@gmail.com" className="text-[#C96F4B] hover:underline">actionsports.all@gmail.com</a></p>
                </div>
              </div>
            </div>
          )}

          {type === 'cookies' && (
            <div className="space-y-3">
              <p>
                {t(
                  'Este website utiliza apenas cookies essenciais de navegação para garantir a melhor experiência responsiva e funcionalidades técnicas básicas.',
                  'This website uses only essential browsing cookies to ensure optimal responsive performance and core technical features.',
                  'Diese Website verwendet nur essenzielle Cookies, um eine optimale Leistung und grundlegende technische Funktionen zu gewährleisten.'
                )}
              </p>
              <p>
                {t(
                  'Não são utilizados cookies de rastreamento agressivo sem o prévio consentimento do visitante.',
                  'No aggressive tracking cookies are used without prior visitor consent.',
                  'Es werden keine aggressiven Tracking-Cookies ohne vorherige Zustimmung des Besuchers verwendet.'
                )}
              </p>
            </div>
          )}

          {type === 'termos' && (
            <div className="space-y-6 text-[#2B2F33]/90 text-xs leading-relaxed">
              <div className="text-center pb-2 border-b border-[#2B2F33]/15">
                <h3 className="font-display text-xl text-[#2B2F33] uppercase tracking-wider">
                  TERMOS E CONDIÇÕES — KAS
                </h3>
              </div>

              {/* 1. Reservas e Condições Gerais */}
              <div className="space-y-2">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  1. Reservas e Condições Gerais
                </h4>
                
                <h5 className="font-semibold text-[#2B2F33]">1.1 Validade</h5>
                <p>Estes Termos e Condições aplicam-se a todas as reservas, confirmações de alojamento, cursos, experiências, atividades e outros serviços disponibilizados pela RAS.</p>
                <p>Para todas as relações comerciais com a RAS, estes Termos e Condições devem ser lidos atentamente antes da realização de qualquer reserva ou pagamento.</p>
                <p>Caso alguma disposição destes Termos e Condições seja considerada inválida, ilegal ou inexequível, tal não afetará a validade das restantes disposições, que permanecerão plenamente aplicáveis.</p>
                <p>Caso o serviço da RAS seja reservado através de um fornecedor ou plataforma de reservas de terceiros, a RAS será responsável pela prestação do produto ou atividade que lhe compete, mas não pelo processo de reserva, pagamento ou condições específicas estabelecidas pela plataforma ou entidade intermediária.</p>
                <p>Nessas situações, poderão aplicar-se termos, regulamentos, políticas de cancelamento ou legislação adicional à relação entre o cliente e a respetiva plataforma ou entidade responsável pela reserva.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.2 Aceitação dos Termos e Condições</h5>
                <p>Ao efetuar uma reserva, pré-reserva ou pagamento à RAS, o cliente declara que leu, compreendeu e aceita integralmente os presentes Termos e Condições.</p>
                <p>O cliente reconhece que as condições apresentadas são aplicáveis à reserva efetuada e que deverá assegurar-se de que todos os participantes incluídos na reserva têm conhecimento das mesmas.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.3 Contrato</h5>
                <p>O contrato entre o cliente e a RAS considera-se celebrado quando a RAS confirma a reserva, por comunicação escrita ou verbal, incluindo e-mail, mensagem, telefone ou outro meio de comunicação utilizado entre as partes.</p>
                <p>O envio de um pedido de reserva, formulário, mensagem ou solicitação por e-mail constitui uma proposta de reserva por parte do cliente.</p>
                <p>A reserva apenas será considerada aceite e confirmada pela RAS após a respetiva confirmação e cumprimento das condições de pagamento aplicáveis.</p>
                <p>A confirmação da reserva implica uma obrigação de pagamento por parte do cliente, nos termos definidos para o serviço reservado.</p>
                <p>A política de cancelamento e reembolso entra em vigor a partir do momento em que a reserva é confirmada.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.4 Responsabilidade pela Reserva</h5>
                <p>A pessoa que efetua a reserva assume a responsabilidade pelo pagamento dos valores devidos por todos os participantes incluídos na reserva e declara que todos os participantes foram informados sobre estes Termos e Condições.</p>
                <p>No caso de reservas de grupo, a pessoa responsável pela reserva deverá ter autorização para efetuar a reserva em nome dos restantes participantes.</p>
                <p>Essa pessoa será responsável pelo cumprimento das condições de pagamento, alteração e cancelamento aplicáveis à reserva.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">1.5 Menores de Idade</h5>
                <p>Qualquer pessoa com menos de 18 anos à data da realização da atividade ou início da estadia é considerada menor de idade.</p>
                <p>As reservas ou participações de menores que viajem ou participem sem um dos pais ou representante legal poderão estar sujeitas à apresentação de autorização escrita de um dos pais, representante legal ou outra pessoa legalmente autorizada para o efeito.</p>
                <p>A RAS poderá solicitar documentação adicional sempre que considere necessário para garantir a segurança e o cumprimento da legislação aplicável.</p>
              </div>

              {/* 2. Organização e Prestação dos Serviços */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  2. Organização e Prestação dos Serviços
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">2.1 Local de Início e Fim</h5>
                <p>A estadia, atividade, curso, experiência ou serviço reservado terá início e término no local indicado na confirmação da reserva ou nas informações fornecidas pela RAS.</p>
                <p>Caso o cliente opte por não utilizar um serviço adicional disponibilizado pela RAS, nomeadamente transporte, transfer ou outro serviço complementar, a RAS não será responsável pela deslocação alternativa do cliente nem pelas despesas daí resultantes.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">2.2 Transfers e Transportes</h5>
                <p>Quando o transporte ou transfer estiver incluído ou for reservado como parte do serviço, a RAS envidará todos os esforços para cumprir os horários previstos e garantir a segurança dos participantes, de acordo com a legislação aplicável.</p>
                <p>Os transportes poderão, quando necessário, ser realizados diretamente pela RAS ou por prestadores de serviços/parceiros contratados para esse efeito.</p>
                <p>Os horários indicados poderão sofrer alterações por motivos operacionais, trânsito, condições meteorológicas ou outras circunstâncias fora do controlo razoável da RAS.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">2.3 Transfers de Aeroporto</h5>
                <p>Quando aplicável, os transfers de aeroporto poderão ser organizados de forma a transportar vários clientes que cheguem ou partam em diferentes voos.</p>
                <p>Esta situação poderá implicar algum tempo de espera no aeroporto ou no local de alojamento.</p>
                <p>Em determinadas situações, os transfers poderão ser realizados por uma agência ou prestador de transporte local contratado pela RAS.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">2.4 Transporte para Atividades</h5>
                <p>Para garantir a organização e qualidade dos serviços, os participantes serão previamente informados dos horários e locais de encontro, início e término das atividades.</p>
                <p>O cliente é responsável por cumprir os horários comunicados pela RAS.</p>
              </div>

              {/* 3. Preços e Pagamentos */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  3. Preços e Pagamentos
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">3.1 Preços</h5>
                <p>Todos os preços são apresentados em euros (€) e incluem IVA quando legalmente aplicável, salvo indicação expressa em contrário.</p>
                <p>O preço aplicável à reserva será o preço apresentado e confirmado pela RAS no momento da reserva.</p>
                <p>Descontos, campanhas ou condições promocionais não poderão ser applied retroativamente a reservas já confirmadas, salvo autorização expressa da RAS.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">3.2 Pré-Reserva</h5>
                <p>Para garantir uma pré-reserva, o cliente deverá efetuar o pagamento de 50% do valor total da reserva.</p>
                <p>A pré-reserva não será considerada válida ou confirmada enquanto o pagamento não tiver sido efetuado e o respetivo comprovativo não tiver sido enviado à RAS.</p>
                <p>O simples envio de um pedido de reserva não garante a disponibilidade da data ou do serviço pretendido.</p>
                <p>A pré-reserva apenas será considerada válida após:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pagamento de 50% do valor total;</li>
                  <li>Envio do respetivo comprovativo de pagamento;</li>
                  <li>Confirmação da receção do pagamento pela RAS.</li>
                </ul>

                <h5 className="font-semibold text-[#2B2F33] pt-1">3.3 Métodos de Pagamento</h5>
                <p>A RAS poderá disponibilizar os seguintes métodos de pagamento:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cartão bancário através de TPA;</li>
                  <li>Revolut;</li>
                  <li>Transferência bancária;</li>
                  <li>Dinheiro, quando aplicável.</li>
                </ul>
                <p>O cliente deverá utilizar os dados de pagamento fornecidos pela RAS.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">3.4 Pagamento do Valor Restante</h5>
                <p>O valor restante da reserva deverá ser pago dentro do prazo indicado pela RAS no momento da confirmação da reserva.</p>
                <p>Caso o pagamento final não seja efetuado dentro do prazo estabelecido, a RAS poderá considerar a reserva cancelada, aplicando-se as condições de cancelamento previstas nestes Termos e Condições.</p>
              </div>

              {/* 4. Alterações à Reserva */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  4. Alterações à Reserva
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">4.1 Alterações Efetuadas pela RAS</h5>
                <p>A RAS envidará todos os esforços para prestar os serviços conforme inicialmente reservados e confirmados.</p>
                <p>No entanto, poderão ocorrer alterações por razões operacionais, técnicas, meteorológicas, de segurança ou por outras circunstâncias que estejam fora do controlo razoável da RAS.</p>
                <p>Caso uma alteração resulte numa redução significativa do serviço contratado, a RAS procurará, sempre que possível, apresentar uma solução alternativa.</p>
                <p>Quando não seja possível prestar o serviço contratado e a alteração represente uma alteração significativa ao contrato, o cliente poderá, conforme aplicável:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>a)</strong> Aceitar uma alternativa disponibilizada pela RAS;</li>
                  <li><strong>b)</strong> Alterar a data do serviço, sujeito a disponibilidade;</li>
                  <li><strong>c)</strong> Cancelar o serviço afetado e solicitar o reembolso dos valores pagos relativamente ao serviço que não possa ser prestado.</li>
                </ul>

                <h5 className="font-semibold text-[#2B2F33] pt-1">4.2 Alterações Efetuadas pelo Cliente</h5>
                <p>A RAS fará todos os esforços para atender aos pedidos de alteração efetuados pelo cliente após a confirmação da reserva.</p>
                <p>Todas as alterações estarão sujeitas à disponibilidade.</p>
                <p>Alterações relacionadas com datas, número de participantes, serviços ou outros elementos da reserva poderão implicar alterações ao preço originalmente acordado.</p>
                <p>Caso o número de participantes seja reduzido, o cliente deverá informar a RAS por escrito com a maior antecedência possível e, sempre que aplicável, pelo menos 7 dias antes da data de início do serviço.</p>
                <p>Alterações efetuadas com menos de 7 dias de antecedência poderão não ser aceites e poderão manter o cliente responsável pelo pagamento do valor originalmente reservado.</p>
                <p>Em circunstâncias excecionais, a RAS poderá, a seu critério, analisar situações específicas, incluindo casos de força maior, doença grave ou falecimento.</p>
              </div>

              {/* 5. Cancelamentos e Reembolsos */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  5. Cancelamentos e Reembolsos
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">5.1 Cancelamento pela RAS</h5>
                <p>Caso a RAS tenha de cancelar uma reserva ou não possa prestar o serviço conforme acordado, o cliente será informado logo que razoavelmente possível.</p>
                <p>Sempre que possível, a RAS procurará disponibilizar uma data ou alternativa adequada.</p>
                <p>Caso não seja possível prestar o serviço nem disponibilizar uma alternativa aceitável, os valores pagos relativamente ao serviço cancelado poderão ser reembolsados de acordo com as condições aplicáveis.</p>
                <p>A RAS poderá cancelar uma reserva quando existam motivos operacionais, de segurança, legais, meteorológicos ou outras circunstâncias que impossibilitem a prestação do serviço.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">5.2 Cancelamento pelo Cliente</h5>
                <p>Todos os pedidos de cancelamento deverão ser comunicados à RAS por escrito, através do contacto indicado na confirmação da reserva.</p>
                <p>O pedido de cancelamento deverá, sempre que possível, indicar:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nome do cliente;</li>
                  <li>Número da reserva;</li>
                  <li>Data da reserva;</li>
                  <li>Serviço reservado;</li>
                  <li>Dados necessários para processamento do eventual reembolso.</li>
                </ul>
                <p>A data considerada para efeitos de cancelamento será a data em que a comunicação escrita for recebida pela RAS.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">5.3 Condições de Reembolso da Pré-Reserva</h5>
                <p>O valor pago como pré-reserva está sujeito às seguintes condições:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>a) Pedido de reembolso:</strong> O pedido de reembolso da pré-reserva deverá ser efetuado no prazo máximo de 20 dias a contar da data da reserva, sem prejuízo das condições de cancelamento aplicáveis.</li>
                  <li><strong>b) Cancelamento até 10 dias antes da data da reserva:</strong> Em caso de cancelamento efetuado até 10 dias antes da data prevista para a reserva, poderá ser reembolsado até 25% do valor pago como pré-reserva, de acordo com as condições aplicáveis à reserva.</li>
                  <li><strong>c) Cancelamento com 7 dias ou menos de antecedência:</strong> Em caso de cancelamento efetuado 7 dias ou menos antes da data da pré-reserva/reserva, não haverá lugar a reembolso do valor pago como pré-reserva.</li>
                </ul>
                <p>As condições específicas apresentadas ao cliente no momento da reserva prevalecerão sempre que sejam mais específicas para determinado serviço.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">5.4 Nova Reserva Após Cancelamento</h5>
                <p>Após o cancelamento de uma reserva, a mesma não poderá ser automaticamente reativada.</p>
                <p>Caso o cliente pretenda reservar novamente o serviço, deverá efetuar uma nova pré-reserva, sujeita à disponibilidade e confirmação da RAS.</p>
                <p>Uma reserva anteriormente cancelada não garante a disponibilidade da mesma data, horário, alojamento, atividade ou serviço.</p>
              </div>

              {/* 6. Obrigações e Responsabilidade */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  6. Obrigações e Responsabilidade
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">6.1 Obrigações do Cliente</h5>
                <p>O cliente é responsável por fornecer informações corretas e completas necessárias à prestação dos serviços.</p>
                <p>Quando aplicável, o cliente deverá apresentar documentos de identificação válidos e quaisquer outros documentos necessários para a prestação legal dos serviços.</p>
                <p>O cliente é igualmente responsável por informar previamente a RAS sobre qualquer condição, limitação ou circunstância que possa afetar a sua capacidade de participar numa atividade.</p>
                <p>A RAS recomenda vivamente a contratação de um seguro de viagem adequado, incluindo cobertura para acidentes, despesas médicas, cancelamentos e outras situações relevantes.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">6.2 Responsabilidade da RAS</h5>
                <p>A participação em atividades, experiências, cursos ou outros serviços poderá envolver riscos inerentes à sua natureza.</p>
                <p>O cliente reconhece esses riscos e compromete-se a seguir todas as instruções de segurança fornecidas pela RAS, pelos seus colaboradores, instrutores, guias ou prestadores de serviços.</p>
                <p>A RAS não será responsável por perdas, furtos ou danos em bens pessoais do cliente, salvo quando tal responsabilidade resulte de dolo ou negligência grave da RAS e dentro dos limites permitidos pela legislação aplicável.</p>
                <p>A RAS não será responsável por atos ou omissões de terceiros quando estes atuem de forma independente, sem prejuízo dos direitos do consumidor previstos na legislação aplicável.</p>
                <p>Nenhuma disposição destes Termos e Condições pretende excluir ou limitar responsabilidades que legalmente não possam ser excluídas ou limitadas.</p>
              </div>

              {/* 7. Produtos e Atividades */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  7. Produtos e Atividades
                </h4>

                <h5 className="font-semibold text-[#2B2F33]">7.1 Riscos e Segurança</h5>
                <p>As atividades disponibilizadas pela RAS poderão apresentar determinados riscos inerentes à sua natureza.</p>
                <p>A RAS procurará minimizar esses riscos através da adoção de medidas de segurança adequadas, utilização de equipamentos apropriados e, quando aplicável, recurso a profissionais qualificados.</p>
                <p>Os participantes deverão seguir todas as instruções fornecidas pelos profissionais da RAS.</p>
                <p>Antes de participar em determinadas atividades, o cliente poderá ser obrigado a preencher uma ficha de inscrição ou declaração de participação.</p>
                <p>No caso de menores de idade, a documentação deverá ser assinada pelo respetivo pai, mãe ou representante legal, sempre que aplicável.</p>
                <p>O cliente deverá informar a RAS sobre condições médicas, alergias ou outras circunstâncias relevantes para a sua segurança antes do início da atividade.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">7.2 Participação nas Atividades</h5>
                <p>Os participantes deverão possuir as condições físicas necessárias para participar na atividade reservada.</p>
                <p>Não será permitida a participação de pessoas que se encontrem sob o efeito de álcool, drogas ou qualquer substância que possa comprometer a sua capacidade física, cognitiva ou comportamento e, consequentemente, a segurança própria ou de terceiros.</p>
                <p>Todos os participantes deverão respeitar as instruções dos colaboradores, instrutores e responsáveis da RAS.</p>
                <p>A RAS poderá impedir ou interromper a participação de qualquer pessoa que não cumpra as instruções de segurança ou que represente um risco para si própria, para outros participantes ou para os colaboradores.</p>

                <h5 className="font-semibold text-[#2B2F33] pt-1">7.3 Equipamentos</h5>
                <p>Quando sejam fornecidos equipamentos pela RAS, estes deverão ser utilizados de acordo com as instruções fornecidas.</p>
                <p>O participante deverá comunicar imediatamente qualquer dano, perda ou anomalia detetada no equipamento.</p>
                <p>O participante poderá ser responsabilizado por danos causados intencionalmente ou por utilização inadequada do equipamento, nos termos permitidos pela legislação aplicável.</p>
              </div>

              {/* 8. Condições Meteorológicas */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  8. Condições Meteorológicas
                </h4>
                <p>Determinadas atividades disponibilizadas pela RAS poderão estar dependentes das condições meteorológicas, do estado do mar ou de outras condições externas.</p>
                <p>Caso a RAS considere que as condições existentes não permitem a realização segura da atividade, a atividade poderá ser:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Remarcada para outra data, sujeita a disponibilidade;</li>
                  <li>Substituída por uma alternativa adequada, quando possível;</li>
                  <li>Cancelada, caso não exista alternativa viável.</li>
                </ul>
                <p>Quando a atividade seja cancelada pela RAS por razões de segurança relacionadas com as condições meteorológicas e não seja possível remarcar ou disponibilizar uma alternativa adequada, o cliente terá direito ao reembolso dos valores pagos relativamente à atividade cancelada, até ao limite do valor efetivamente pago.</p>
                <p>Se a atividade puder ser realizada em condições consideradas seguras pela RAS, mas as condições não corresponderem às preferências pessoais do cliente, tal não constitui, por si só, motivo para reembolso.</p>
                <p>Caso o cliente seja previamente informado de que a atividade poderá ser condicionada ou cancelada devido às condições meteorológicas e, ainda assim, decida participar, não haverá lugar a reembolso caso a atividade venha posteriormente a ser interrompida ou cancelada por razões de segurança.</p>
                <p>A decisão final sobre a realização, alteração, interrupção ou cancelamento de uma atividade por motivos de segurança caberá à RAS e/ou aos profissionais responsáveis pela atividade.</p>
              </div>

              {/* 9. Proteção de Dados e Privacidade */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  9. Proteção de Dados e Privacidade
                </h4>
                <p>A RAS compromete-se a tratar os dados pessoais dos clientes de acordo com a legislação aplicável em matéria de proteção de dados e privacidade.</p>
                <p>Os dados recolhidos poderão ser utilizados para:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Processamento e gestão de reservas;</li>
                  <li>Comunicação com o cliente;</li>
                  <li>Processamento e confirmação de pagamentos;</li>
                  <li>Prestação dos serviços contratados;</li>
                  <li>Emissão de documentos legalmente exigidos;</li>
                  <li>Cumprimento de obrigações legais e fiscais;</li>
                  <li>Gestão de questões relacionadas com reservas, cancelamentos e reembolsos.</li>
                </ul>
                <p>Os dados pessoais não serão vendidos ou utilizados para fins incompatíveis com aqueles para os quais foram recolhidos.</p>
                <p>O cliente poderá exercer os direitos previstos na legislação de proteção de dados, nos termos e condições legalmente aplicáveis.</p>
              </div>

              {/* 10. Disposições Finais */}
              <div className="space-y-2 pt-2 border-t border-[#2B2F33]/10">
                <h4 className="font-bold text-[#C96F4B] text-xs uppercase tracking-wider">
                  10. Disposições Finais
                </h4>
                <p>Ao efetuar uma reserva ou pagamento, o cliente confirma que leu, compreendeu e aceitou estes Termos e Condições.</p>
                <p>A RAS reserva-se o direito de atualizar estes Termos e Condições sempre que necessário, nomeadamente para refletir alterações legais, operacionais ou dos serviços disponibilizados.</p>
                <p>A versão aplicável à reserva será, salvo disposição legal em contrário, a versão aceite pelo cliente no momento da confirmação da respetiva reserva.</p>
              </div>
            </div>
          )}

          {type === 'reclamacoes' && (
            <div className="space-y-4 text-center py-4">
              <p>
                {t(
                  'A Action Sports dispõe de Livro de Reclamações Eletrónico. Caso pretenda apresentar uma reclamação, poderá fazê-lo diretamente na plataforma oficial do Governo Português.',
                  'Action Sports provides an Electronic Complaints Book. Should you wish to submit a formal complaint, you may do so directly on the official Portuguese Government platform.',
                  'Action Sports verfügt über ein elektronisches Beschwerdebuch. Wenn Sie eine formelle Beschwerde einreichen möchten, können Sie dies direkt auf der offiziellen Plattform tun.'
                )}
              </p>

              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#A7CFC6] text-[#2B2F33] font-bold text-xs uppercase tracking-widest"
              >
                <span>{t('Aceder ao Livro de Reclamações', 'Access Complaints Book', 'Zum Beschwerdebuch')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F6F0] border-t border-[#2B2F33]/15 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-[#A7CFC6] text-[#2B2F33] font-bold text-xs uppercase tracking-wider"
          >
            {t('Compreendido & Fechar', 'Understood & Close', 'Verstanden & Schließen')}
          </button>
        </div>
      </div>
    </div>
  );
};

