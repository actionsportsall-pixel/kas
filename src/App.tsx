import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ExperiencesOverview } from './components/ExperiencesOverview';
import { SurfSection } from './components/SurfSection';
import { BootCampSection } from './components/BootCampSection';
import { PadelSection } from './components/PadelSection';
import { PadelTournamentSchedule } from './components/PadelTournamentSchedule';
import { AboutSergioCosta } from './components/AboutSergioCosta';
import { TeamBuildingSection } from './components/TeamBuildingSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { BookingContactSection } from './components/BookingContactSection';
import { BookingModal } from './components/BookingModal';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { EditContentModal } from './components/EditContentModal';
import { Footer } from './components/Footer';
import { WaveSeparator } from './components/WaveSeparator';
import { FadeInSection } from './components/FadeInSection';
import { INITIAL_BOOTCAMP_DETAILS, SERGIO_BIO, GOOGLE_BOOKING_FORM_URL } from './data/mockData';
import { ActivityType } from './types';
import { Compass } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('inicio');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [inquiryNote, setInquiryNote] = useState<string>('');

  // Editable states for Sérgio Costa
  const [bootCampDetails, setBootCampDetails] = useState(INITIAL_BOOTCAMP_DETAILS);
  const [bio, setBio] = useState(SERGIO_BIO);

  const handleNavigate = (pageId: string) => {
    if (pageId === 'experiencias') {
      setCurrentPage('inicio');
      window.location.hash = 'experiencias';
      setTimeout(() => {
        const el = document.getElementById('experiencias');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
      return;
    }
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncPageFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'experiencias') {
        setCurrentPage('inicio');
        setTimeout(() => {
          const el = document.getElementById('experiencias');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (['inicio', 'surf', 'padel', 'bootcamp', 'sobre', 'teambuilding', 'contactos'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    syncPageFromHash();
    window.addEventListener('hashchange', syncPageFromHash);
    return () => window.removeEventListener('hashchange', syncPageFromHash);
  }, []);

  const handleOpenBookingModal = (_activityKey?: string) => {
    window.open(GOOGLE_BOOKING_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  const handleOpenInquiry = (serviceTitle: string) => {
    setInquiryNote(`Gostaria de pedir informações detalhadas sobre: ${serviceTitle}`);
    handleNavigate('contactos');
  };

  const handleOpenBudgetModal = (serviceName: string) => {
    setInquiryNote(`Gostaria de solicitar um orçamento para: ${serviceName}`);
    handleNavigate('contactos');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#273334] font-sans selection:bg-[#C96F4B] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
        onOpenEditModal={() => setEditModalOpen(true)}
      />

      {/* Main Content Pages */}
      <main className="min-h-[80vh]">
        {/* PAGE 1: INÍCIO / HOME */}
        {currentPage === 'inicio' && (
          <div className="animate-in fade-in duration-300">
            <Hero
              onOpenBookingModal={handleOpenBookingModal}
              onNavigate={handleNavigate}
            />
            
            <FadeInSection>
              <ExperiencesOverview
                onOpenBookingModal={handleOpenBookingModal}
                onNavigate={handleNavigate}
              />
            </FadeInSection>
            
            <WaveSeparator />
            
            <FadeInSection>
              <IntroSection />
            </FadeInSection>
            
            <WaveSeparator flipX />
            
            <FadeInSection>
              <GallerySection />
            </FadeInSection>
            
            <WaveSeparator />
            
            <FadeInSection>
              <ComingSoonSection />
            </FadeInSection>
            
            <WaveSeparator flipX />
            
            <FadeInSection>
              <TestimonialsSection />
            </FadeInSection>
            
            <WaveSeparator />
            
            {/* Quick Contact CTA Section on Home */}
            <FadeInSection>
              <section className="py-16 bg-[#73999C] text-white border-t border-[#73999C]/20 text-center px-4">
                <div className="max-w-3xl mx-auto space-y-4">
                  <span className="text-xs font-bold text-[#E4CEAD] uppercase tracking-widest">Pronto para começar?</span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white">RESERVA A TUA EXPERIÊNCIA HOJE</h2>
                  <p className="text-[#F7F4EE]/90 text-sm">Experiências personalizadas, horários flexíveis e todo o equipamento incluído.</p>
                  <div className="pt-2 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => handleOpenBookingModal()}
                      className="px-8 py-3 bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-md shadow-[#C96F4B]/20 transition-all cursor-pointer"
                    >
                      Reservar Atividade
                    </button>
                    <button
                      onClick={() => handleNavigate('contactos')}
                      className="px-8 py-3 bg-[#F7F4EE] hover:bg-white text-[#273334] font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xs transition-all cursor-pointer"
                    >
                      Ver Contactos & Localização
                    </button>
                  </div>
                </div>
              </section>
            </FadeInSection>
          </div>
        )}

        {/* PAGE 2: SURF EXPERIENCES */}
        {currentPage === 'surf' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">SURF EXPERIENCES</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                  Aulas individuais, cursos de grupo, rentals de material de alta performance e surf guide personalizado nos melhores spots de Portugal.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <SurfSection
                onOpenBookingModal={handleOpenBookingModal}
                onOpenInquiry={handleOpenInquiry}
              />
            </FadeInSection>

            <WaveSeparator flipX />
            
            <FadeInSection>
              <GallerySection />
            </FadeInSection>
            
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                preselectedActivity="surf"
                inquiryNote={inquiryNote}
              />
            </FadeInSection>
          </div>
        )}

        {/* PAGE 3: PADEL EXPERIENCES */}
        {currentPage === 'padel' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">PADEL EXPERIENCES</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                  Aulas de aperfeiçoamento técnico, jogos treinados e a gestão completa de torneios dinâmicos com cronograma otimizado de 2 horas.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <PadelSection
                onOpenBookingModal={handleOpenBookingModal}
                onOpenBudgetModal={handleOpenBudgetModal}
              />
            </FadeInSection>

            <WaveSeparator flipX />
            
            <FadeInSection>
              <PadelTournamentSchedule onOpenBookingModal={handleOpenBookingModal} />
            </FadeInSection>
            
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                preselectedActivity="padel"
                inquiryNote={inquiryNote}
              />
            </FadeInSection>
          </div>
        )}

        {/* PAGE 4: SURF BOOT CAMP */}
        {currentPage === 'bootcamp' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">SURF BOOT CAMP</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                  Combina sessões diárias de surf, vídeo análise técnica, SurfSkate e treino funcional com o acompanhamento direto de Sérgio Costa.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <BootCampSection
                bootCampDetails={bootCampDetails}
                onOpenBookingModal={handleOpenBookingModal}
                onOpenEditModal={() => setEditModalOpen(true)}
              />
            </FadeInSection>
            
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                preselectedActivity="surf-bootcamp"
                inquiryNote={inquiryNote}
              />
            </FadeInSection>
          </div>
        )}

        {/* PAGE 5: SOBRE SÉRGIO COSTA */}
        {currentPage === 'sobre' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-4 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">SOBRE A KAS</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                  Beyond Sport. Beyond Expectations. Conheça a história, visão e a liderança da equipa KAS na criação de experiências outdoor memoráveis.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <AboutSergioCosta
                bio={bio}
                onOpenEditModal={() => setEditModalOpen(true)}
              />
            </FadeInSection>

            <WaveSeparator flipX />
            
            <FadeInSection>
              <TestimonialsSection />
            </FadeInSection>
            
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                inquiryNote={inquiryNote}
                showFaq={true}
              />
            </FadeInSection>
          </div>
        )}

        {/* PAGE 6: TEAM BUILDING */}
        {currentPage === 'teambuilding' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">TEAM BUILDING</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                  Organizamos atividades de surf e padel para empresas, equipas, grupos de amigos, aniversários e eventos privados. Cada programa pode ser personalizado de acordo com o número de participantes, duração, objetivos e nível de experiência.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <TeamBuildingSection onOpenBookingModal={handleOpenBookingModal} />
            </FadeInSection>
            
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                preselectedActivity="teambuilding"
                inquiryNote={inquiryNote}
              />
            </FadeInSection>
          </div>
        )}

        {/* PAGE 7: CONTACTOS */}
        {currentPage === 'contactos' && (
          <div className="animate-in fade-in duration-300">
            <div className="pt-36 sm:pt-44 pb-14 sm:pb-16 px-4 bg-[#73999C] text-white border-b border-[#73999C]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-3 relative z-10">
                <h1 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-wider">CONTACTOS</h1>
                <p className="text-[#F7F4EE]/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                  Envie-nos a sua mensagem ou pedido. Respondemos rapidamente para esclarecer todas as dúvidas.
                </p>
              </div>
            </div>
            <WaveSeparator />

            <FadeInSection>
              <BookingContactSection
                preselectedActivity={selectedActivity as ActivityType | undefined}
                inquiryNote={inquiryNote}
                showFaq={true}
              />
            </FadeInSection>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialActivity={selectedActivity}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Content Customization Modal for Sérgio Costa */}
      <EditContentModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        bootCampDetails={bootCampDetails}
        setBootCampDetails={setBootCampDetails}
        bio={bio}
        setBio={setBio}
      />
    </div>
  );
}
