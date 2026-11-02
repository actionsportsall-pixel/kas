import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { Camera, Sparkles, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: t('Todos', 'All', 'Alle') },
    { id: 'surf', label: 'Surf' },
    { id: 'padel', label: 'Padel' },
    { id: 'bootcamp', label: 'Boot Camp' },
    { id: 'teambuilding', label: 'Team Building' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A8C7C2]/20 text-[#273334] text-xs font-bold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5 text-[#73999C]" />
          <span>{t('Momentos & Memórias', 'Moments & Memories', 'Momente & Erinnerungen')}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#273334] uppercase tracking-wide">
          {t('A Nossa Galeria', 'Our Gallery', 'Unsere Galerie')}
        </h2>
        <p className="text-sm sm:text-base text-[#273334]/80">
          {t(
            'Vislumbres autênticos das nossas experiências no mar, na terra e nas montanhas.',
            'Authentic glimpses of our experiences at sea, land and mountains.',
            'Authentische Einblicke in unsere Erlebnisse am Meer, an Land und in den Bergen.'
          )}
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C96F4B] text-white shadow-md'
                  : 'bg-white text-[#273334] hover:bg-[#F7F4EE] border border-[#A8C7C2]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.src)}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-[#73999C]/10 cursor-pointer border border-[#A8C7C2]/20"
          >
            <img
              src={item.src}
              alt={item.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/surf.png';
              }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#273334]/90 via-[#273334]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E4CEAD]">
                {item.category}
              </span>
              <h4 className="text-lg font-display font-bold uppercase tracking-wide">
                {item.title}
              </h4>
              <p className="text-xs text-[#F7F4EE]/90 line-clamp-2 mt-1">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
