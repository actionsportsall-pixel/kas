export type ActivityType =
  | 'aula_privada_surf'
  | 'surf_grupos_pequenos'
  | 'aniversario'
  | 'rental'
  | 'surf_guide'
  | 'boot_camp'
  | 'aula_padel'
  | 'torneio_padel'
  | 'team_building'
  | 'outra_atividade';

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'surf' | 'padel' | 'bootcamp' | 'teambuilding';
  activityKey: ActivityType;
  tag?: string;
  highlights?: string[];
}

export interface BootCampDetail {
  duration: string;
  schedule: string;
  maxParticipants: string;
  surfSessions: string;
  physicalPrep: string;
  technicalAnalysis: string;
  extraActivities: string;
  materialIncluded: string;
  lodgingMeals: string;
  prerequisites: string[];
}

export interface TournamentRound {
  time: string;
  title: string;
  description: string;
  details: string[];
  activeGroup: string;
  restingGroup: string;
}

export interface SergioCostaBio {
  title: string;
  intro: string;
  mainText: string;
  experienceYears: string;
  certifications: string[];
  modalities: string[];
  education?: string[];
  quote: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  activity: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'surf' | 'padel' | 'bootcamp' | 'teambuilding' | 'bike' | 'tours';
  type: 'image' | 'video';
  src: string;
  aspectRatio?: string;
  caption: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  activity: ActivityType;
  participants: number;
  preferredDate: string;
  experienceLevel: 'Iniciante' | 'Intermédio' | 'Avançado';
  message: string;
}

export interface FutureServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  image: string;
}
