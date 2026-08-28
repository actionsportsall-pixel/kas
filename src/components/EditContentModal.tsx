import React, { useState } from 'react';
import { BootCampDetail, SergioCostaBio } from '../types';
import { X, SlidersHorizontal, Check, Plus, Trash2, Save, RefreshCw } from 'lucide-react';

interface EditContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bootCampDetails: BootCampDetail;
  setBootCampDetails: React.Dispatch<React.SetStateAction<BootCampDetail>>;
  bio: SergioCostaBio;
  setBio: React.Dispatch<React.SetStateAction<SergioCostaBio>>;
}

export const EditContentModal: React.FC<EditContentModalProps> = ({
  isOpen,
  onClose,
  bootCampDetails,
  setBootCampDetails,
  bio,
  setBio,
}) => {
  const [activeTab, setActiveTab] = useState<'bootcamp' | 'bio'>('bootcamp');
  const [newPrereq, setNewPrereq] = useState('');
  const [newCert, setNewCert] = useState('');
  const [savedMessage, setSavedMessage] = useState(false);

  if (!isOpen) return null;

  const handleAddPrereq = () => {
    if (!newPrereq.trim()) return;
    setBootCampDetails((prev) => ({
      ...prev,
      prerequisites: [...prev.prerequisites, newPrereq.trim()],
    }));
    setNewPrereq('');
  };

  const handleRemovePrereq = (idx: number) => {
    setBootCampDetails((prev) => ({
      ...prev,
      prerequisites: prev.prerequisites.filter((_, i) => i !== idx),
    }));
  };

  const handleAddCert = () => {
    if (!newCert.trim()) return;
    setBio((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCert.trim()],
    }));
    setNewCert('');
  };

  const handleRemoveCert = (idx: number) => {
    setBio((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== idx),
    }));
  };

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => {
      setSavedMessage(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2B2F33]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/20 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-4 bg-[#F8F6F0] border-b border-[#2B2F33]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#E07A5F]" />
            <div>
              <h3 className="font-display text-2xl text-[#2B2F33] uppercase tracking-wider">
                PAINEL DE EDIÇÃO DE CONTEÚDO (SÉRGIO COSTA)
              </h3>
              <p className="text-[10px] text-[#6B4F3A] font-semibold">
                Personaliza facilmente os pré-requisitos do Boot Camp e a tua biografia.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-sm bg-[#F3E7DB] text-[#2B2F33] hover:text-[#E07A5F] border border-[#2B2F33]/15"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#73999C]/20 bg-[#F7F4EE] px-4 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('bootcamp')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl ${
              activeTab === 'bootcamp'
                ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
            }`}
          >
            Programa Boot Camp
          </button>
          <button
            onClick={() => setActiveTab('bio')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl ${
              activeTab === 'bio'
                ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
            }`}
          >
            Biografia & Certificações
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {activeTab === 'bootcamp' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#2B2F33] uppercase tracking-wider border-b border-[#2B2F33]/15 pb-2">
                Especificações do Surf Boot Camp
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                    Duração do Programa
                  </label>
                  <input
                    type="text"
                    value={bootCampDetails.duration}
                    onChange={(e) =>
                      setBootCampDetails({ ...bootCampDetails, duration: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                    Horários
                  </label>
                  <input
                    type="text"
                    value={bootCampDetails.schedule}
                    onChange={(e) =>
                      setBootCampDetails({ ...bootCampDetails, schedule: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                    N.º de Participantes
                  </label>
                  <input
                    type="text"
                    value={bootCampDetails.maxParticipants}
                    onChange={(e) =>
                      setBootCampDetails({ ...bootCampDetails, maxParticipants: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                    Sessões de Surf
                  </label>
                  <input
                    type="text"
                    value={bootCampDetails.surfSessions}
                    onChange={(e) =>
                      setBootCampDetails({ ...bootCampDetails, surfSessions: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                </div>
              </div>

              {/* Prerequisites List Editor */}
              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider">
                  Lista de Pré-requisitos
                </h4>

                <div className="space-y-2">
                  {bootCampDetails.prerequisites.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#F8F6F0] p-2.5 rounded-sm border border-[#2B2F33]/15">
                      <span className="text-xs text-[#2B2F33] flex-1">{req}</span>
                      <button
                        onClick={() => handleRemovePrereq(idx)}
                        className="text-[#E07A5F] hover:opacity-80 p-1"
                        title="Remover"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <input
                    type="text"
                    value={newPrereq}
                    onChange={(e) => setNewPrereq(e.target.value)}
                    placeholder="Adicionar novo pré-requisito..."
                    className="flex-1 px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                  <button
                    onClick={handleAddPrereq}
                    className="px-4 py-2 rounded-sm bg-[#A7CFC6] text-[#2B2F33] font-bold text-xs uppercase tracking-wider flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bio' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#2B2F33] uppercase tracking-wider border-b border-[#2B2F33]/15 pb-2">
                Biografia Sérgio Costa
              </h4>

              <div>
                <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                  Título de Apresentação
                </label>
                <input
                  type="text"
                  value={bio.title}
                  onChange={(e) => setBio({ ...bio, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                  Introdução Curta
                </label>
                <textarea
                  rows={2}
                  value={bio.intro}
                  onChange={(e) => setBio({ ...bio, intro: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#6B4F3A] uppercase font-bold tracking-wider block mb-1">
                  Texto Principal
                </label>
                <textarea
                  rows={3}
                  value={bio.mainText}
                  onChange={(e) => setBio({ ...bio, mainText: e.target.value })}
                  className="w-full px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                />
              </div>

              {/* Certificações */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider">
                  Certificações
                </h4>
                <div className="space-y-2">
                  {bio.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#F8F6F0] p-2.5 rounded-sm border border-[#2B2F33]/15">
                      <span className="text-xs text-[#2B2F33] flex-1">{cert}</span>
                      <button
                        onClick={() => handleRemoveCert(idx)}
                        className="text-[#E07A5F] hover:opacity-80 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCert}
                    onChange={(e) => setNewCert(e.target.value)}
                    placeholder="Adicionar nova certificação..."
                    className="flex-1 px-3 py-2 rounded-sm bg-[#F8F6F0] border border-[#2B2F33]/20 text-[#2B2F33] text-xs"
                  />
                  <button
                    onClick={handleAddCert}
                    className="px-4 py-2 rounded-2xl bg-[#73999C] hover:bg-[#5D8184] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F4EE] border-t border-[#73999C]/20 flex items-center justify-between">
          {savedMessage ? (
            <span className="text-xs text-[#273334] font-bold flex items-center gap-1 uppercase tracking-wider">
              <Check className="w-4 h-4 text-[#C96F4B]" /> Alterações guardadas com sucesso!
            </span>
          ) : (
            <span className="text-[10px] text-[#73999C] uppercase tracking-wider font-semibold">
              * As alterações ficam imediatamente refletidas no website.
            </span>
          )}

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-2xl bg-[#73999C]/15 hover:bg-[#73999C] hover:text-white text-[#273334] text-xs font-bold uppercase tracking-wider border border-[#73999C]/30 transition-all cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-2xl bg-[#C96F4B] hover:bg-[#B05B3A] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#C96F4B]/20 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Alterações</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
