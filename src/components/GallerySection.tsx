import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Camera, X, Play, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: t('Todas as Fotos', 'All Photos', 'Alle Fotos') },
    { id: 'surf', label: t('Aulas de Surf', 'Surf Lessons', 'Surfkurse') },
    { id: 'padel', label: t('Torneios de Padel', 'Padel Tournaments', 'Padel-Turniere') },
    { id: 'bootcamp', label: t('Boot Camps', 'Boot Camps', 'Boot Camps') },
    { id: 'teambuilding', label: t('Team Building', 'Team Building', 'Teambuilding') },
    { id: 'bike', label: t('Bike & Natureza', 'Bike & Nature', 'Bike & Natur') },
    { id: 'tours', label: t('Tours Norte', 'North Tours', 'Nord-Touren') },
  ];

  const filteredItems =
    activeCategory === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#F8F6F0] relative overflow-hidden border-b border-[#2B2F33]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-display text-5xl sm:text-6xl text-[#2B2F33] tracking-wide uppercase">
            {t('AÇÃO &', 'ACTION &', 'AKTION &')} <span className="text-[#2B2F33]">{t('MEMÓRIAS', 'MEMORIES', 'ERINNERUNGEN')}</span>
          </h2>

          <p className="text-[#2B2F33]/80 text-base sm:text-lg leading-relaxed font-normal">
            {t(
              'Espreita alguns dos melhores momentos das nossas sessões de surf, padel, boot camps e eventos de equipa.',
              'Take a look at some of the finest moments from our surf sessions, padel tournaments, boot camps, and team events.',
              'Werfen Sie einen Blick auf einige der besten Momente unserer Surf-, Padel-, Boot Camp- und Teamevents.'
            )}
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-2xl flex items-center justify-center ${
                activeCategory === cat.id
                  ? 'bg-[#73999C] text-white border-b-2 border-[#C96F4B] shadow-xs'
                  : 'bg-[#73999C]/15 text-[#273334] border border-[#73999C]/25 hover:bg-[#73999C] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group relative cursor-pointer bg-[#F3E7DB] rounded-sm border border-[#2B2F33]/15 overflow-hidden aspect-square shadow-sm"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#2B2F33]/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div className="self-end">
                  <span className="p-2 bg-[#A7CFC6] text-[#2B2F33] block rounded-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#A7CFC6] block">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-[#2B2F33]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full bg-[#F3E7DB] rounded-sm overflow-hidden border border-[#2B2F33]/20 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-4 bg-[#F7F4EE] border-b border-[#73999C]/20 flex items-center justify-between">
              <span className="font-display text-2xl text-[#273334] uppercase tracking-wider">
                {selectedMedia.title}
              </span>
              <button
                onClick={() => setSelectedMedia(null)}
                className="p-1.5 bg-[#F7F4EE] text-[#273334] hover:text-[#C96F4B] border border-[#73999C]/20 rounded-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Expanded Image */}
            <div className="max-h-[70vh] bg-[#273334] flex items-center justify-center overflow-hidden">
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption Footer */}
            <div className="p-4 bg-[#F7F4EE] border-t border-[#73999C]/20 flex items-center justify-between">
              <p className="text-[#273334]/80 text-xs">
                {selectedMedia.caption}
              </p>
              <button
                onClick={() => setSelectedMedia(null)}
                className="px-6 py-2.5 bg-[#73999C] hover:bg-[#5D8184] text-white font-bold text-xs uppercase tracking-wider rounded-2xl cursor-pointer shadow-xs"
              >
                {t('Fechar', 'Close', 'Schließen')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
