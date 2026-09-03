import React, { useState, useEffect } from 'react';
import { ActivityType, BookingFormData } from '../types';
import { X, Calendar, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialActivity?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialActivity,
}) => {
  const { t } = useLanguage();

  const mapInitialActivity = (actKey?: string): ActivityType => {
    switch (actKey) {
      case 'surf':
      case 'aula_privada_surf':
        return 'aula_privada_surf';
      case 'surf_grupos_pequenos':
        return 'surf_grupos_pequenos';
      case 'aniversario':
        return 'aniversario';
      case 'rental':
        return 'rental';
      case 'surf_guide':
        return 'surf_guide';
      case 'bootcamp':
      case 'boot_camp':
        return 'boot_camp';
      case 'padel':
      case 'aula_padel':
        return 'aula_padel';
      case 'torneio_padel':
        return 'torneio_padel';
      case 'teambuilding':
      case 'team_building':
        return 'team_building';
      case 'canyoning':
      case 'canyoning_geres':
        return 'canyoning';
      case 'tours':
      case 'tours_norte':
        return 'tours_norte';
      default:
        return 'aula_privada_surf';
    }
  };

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    activity: mapInitialActivity(initialActivity),
    participants: 1,
    preferredDate: '',
    experienceLevel: 'Iniciante',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialActivity) {
      setFormData((prev) => ({ ...prev, activity: mapInitialActivity(initialActivity) }));
    }
  }, [initialActivity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#273334]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#F7F4EE] rounded-2xl border border-[#73999C]/25 shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-6 bg-[#A8C7C2]/20 border-b border-[#73999C]/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#A8C7C2] text-[#273334] flex items-center justify-center shadow-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-[#273334] uppercase tracking-wider">
                {t('RESERVA RÁPIDA • KAS', 'QUICK BOOKING • KAS', 'SCHNELLE BUCHUNG • KAS')}
              </h3>
              <p className="text-[11px] text-[#73999C] font-semibold">Beyond Sport. Beyond Expectations.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#F7F4EE] text-[#273334] hover:text-[#C96F4B] border border-[#73999C]/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#A8C7C2] text-[#273334] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-3xl text-[#273334] uppercase tracking-wider">{t('RESERVA SOLICITADA!', 'BOOKING REQUESTED!', 'BUCHUNG ANGEFRAGT!')}</h4>
              <p className="text-[#273334]/80 text-sm leading-relaxed">
                {t('Obrigado', 'Thank you', 'Vielen Dank')}, <strong>{formData.name}</strong>. {t('A equipa KAS entrará em contacto muito em breve para confirmar os horários e detalhes.', 'The KAS team will contact you very soon to confirm times and details.', 'Das KAS-Team wird sich sehr bald bei Ihnen melden, um Zeiten und Details zu bestätigen.')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-terracotta text-xs"
              >
                {t('Concluir', 'Done', 'Fertig')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                  {t('Atividade Selecionada', 'Selected Activity', 'Ausgewählte Aktivität')}
                </label>
                <select
                  value={formData.activity}
                  onChange={(e) =>
                    setFormData({ ...formData, activity: e.target.value as ActivityType })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-sm focus:outline-none focus:border-[#73999C]"
                >
                  <option value="aula_privada_surf">{t('Aula Privada de Surf', 'Private Surf Lesson', 'Private Surfstunde')}</option>
                  <option value="surf_grupos_pequenos">{t('Surf para Pequenos Grupos', 'Small Group Surf', 'Surfen für kleine Gruppen')}</option>
                  <option value="aniversario">{t('Aniversário', 'Birthday Event', 'Geburtstagsevent')}</option>
                  <option value="rental">{t('Rental (Equipamento)', 'Equipment Rental', 'Ausrüstungsverleih')}</option>
                  <option value="surf_guide">{t('Surf Guide', 'Surf Guide', 'Surf-Guide')}</option>
                  <option value="boot_camp">{t('Surf Boot Camp', 'Surf Boot Camp', 'Surf Boot Camp')}</option>
                  <option value="aula_padel">{t('Aula de Padel', 'Padel Lesson', 'Padelstunde')}</option>
                  <option value="torneio_padel">{t('Torneio de Padel', 'Padel Tournament', 'Padelturnier')}</option>
                  <option value="canyoning">{t('Canyoning Tours (Gerês)', 'Canyoning Tours (Gerês)', 'Canyoning-Touren (Gerês)')}</option>
                  <option value="tours_norte">{t('Tours Norte Litoral & Interior', 'North Tours Coast & Inland', 'Nord-Touren Küste & Inland')}</option>
                  <option value="team_building">{t('Team Building', 'Team Building', 'Teambuilding')}</option>
                  <option value="outra_atividade">{t('Outra Atividade', 'Other Activity', 'Andere Aktivität')}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('Nome Completo *', 'Full Name *', 'Vollständiger Name *')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('Nome', 'Name', 'Name')}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] placeholder-[#273334]/40 text-sm focus:outline-none focus:border-[#73999C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('Telemóvel / WhatsApp *', 'Phone / WhatsApp *', 'Telefon / WhatsApp *')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+351 912 345 678"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] placeholder-[#273334]/40 text-sm focus:outline-none focus:border-[#73999C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('Email *', 'Email *', 'E-Mail *')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] placeholder-[#273334]/40 text-sm focus:outline-none focus:border-[#73999C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('Data Pretendida', 'Preferred Date', 'Wunschdatum')}
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-sm focus:outline-none focus:border-[#73999C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('N.º Participantes', 'Participants', 'Anzahl der Teilnehmer')}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-sm focus:outline-none focus:border-[#73999C]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                    {t('Nível de Experiência', 'Experience Level', 'Erfahrungsniveau')}
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experienceLevel: e.target.value as 'Iniciante' | 'Intermédio' | 'Avançado',
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-sm focus:outline-none focus:border-[#73999C]"
                  >
                    <option value="Iniciante">{t('Iniciante', 'Beginner', 'Anfänger')}</option>
                    <option value="Intermédio">{t('Intermédio', 'Intermediate', 'Mittelstufe')}</option>
                    <option value="Avançado">{t('Avançado', 'Advanced', 'Fortgeschritten')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#73999C] uppercase tracking-wider">
                  {t('Observações', 'Notes', 'Anmerkungen')}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('Horários preferenciais ou informação sobre o grupo...', 'Preferred times or group details...', 'Bevorzugte Zeiten oder Gruppeninformationen...')}
                  className="w-full px-4 py-2 rounded-xl bg-[#F7F4EE] border border-[#73999C]/25 text-[#273334] text-sm focus:outline-none focus:border-[#73999C]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-terracotta py-4 flex items-center justify-center gap-2"
              >
                <span>{t('Confirmar Pedido de Reserva', 'Confirm Booking Request', 'Buchungsanfrage bestätigen')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};


