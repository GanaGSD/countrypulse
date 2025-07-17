export interface Destination {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'Urban' | 'Historical' | 'Nature' | 'Cultural' | 'UNESCO';
  description: string;
  highlights: string[];
}

export interface HomeDestinationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Nature' | 'Adventure' | 'Culture' | 'History' | 'Food' | 'Region' | 'Urban';
  favorite: boolean;
  minutes: number;
}

export interface HomeDestinations {
  highlights: HomeDestinationItem[];
  regions: HomeDestinationItem[];
  'historic-sites': HomeDestinationItem[];
  'national-parks': HomeDestinationItem[];
  cities: HomeDestinationItem[];
  'nomadic-camps': HomeDestinationItem[];
  'food-and-drink': HomeDestinationItem[];
}

export interface HeroSlide {
  id: number;
  type: 'image';
  src: string;
  alt: string;
  title: string;
}

export interface BentoItems {
  title: string,
  description: string,
  imageUrl: string,
  className: string,
  className2?: string,
}