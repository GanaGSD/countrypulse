import { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'ulaanbaatar',
    title: 'Ulaanbaatar',
    subtitle: 'Modern Cultural Capital',
    image: '../assets/destinations/ulaanbaatar.jpg',
    category: 'Urban',
    description: `The heart of contemporary Mongolian culture, Ulaanbaatar blends Soviet-era architecture with Buddhist heritage and modern development. Visit the National Museum of Mongolia to understand the country's rich history, explore Gandantegchinlen Monastery to experience living Buddhist traditions, and witness the evolving arts scene at the Mongolian National Modern Art Gallery. The city hosts numerous cultural festivals throughout the year, including the spectacular Naadam Festival celebrations.`,
    highlights: [
      'National Museum of Mongolia',
      'Gandantegchinlen Monastery',
      'Mongolian National Modern Art Gallery',
      'Naadam Festival in July',
      'Zaisan Memorial'
    ]
  },
  {
    id: 'karakorum',
    title: 'Karakorum',
    subtitle: 'Ancient Imperial Center',
    image: '/destinations/karakorum.jpg',
    category: 'Historical',
    description: `Once the capital of the vast Mongol Empire, Karakorum (Kharkhorin) offers a glimpse into Mongolia's golden age. The ancient city, established by Chinggis Khaan and expanded by his son Ögedei, now houses the magnificent Erdene Zuu Monastery, Mongolia's earliest surviving Buddhist monastery built partly from the ruins of the ancient capital. The site connects visitors to the 13th-century period when Mongolian culture influenced much of the known world.`,
    highlights: [
      'Erdene Zuu Monastery',
      'Karakorum Museum',
      'Turtle Rock',
      'Kharkhorin Rock Inscriptions',
      'Annual Naadam celebrations'
    ]
  },
  {
    id: 'gobi-desert',
    title: 'Gobi Desert',
    subtitle: 'Land of Nomadic Resilience',
    image: '/destinations/gobi-desert.jpg',
    category: 'Nature',
    description: `The legendary Gobi isn't just a natural wonder but a cultural landscape shaped by generations of nomadic herders. Here, traditional camel-breeding families maintain ancient knowledge of survival in one of earth's harshest environments. Visit the area around Dalanzadgad to experience traditional music performances, witness camel-hair textile making, and learn about the unique nomadic adaptations that created a distinct desert culture.`,
    highlights: [
      'Khongoryn Els sand dunes',
      'Bayanzag Flaming Cliffs',
      'Camel breeding families',
      'Traditional textile making',
      'Desert nomadic culture'
    ]
  },
  {
    id: 'khuvsgul-lake',
    title: 'Khuvsgul Lake',
    subtitle: 'Spiritual Waters',
    image: '/destinations/khuvsgul-lake.jpg',
    category: 'Nature',
    description: `This pristine alpine lake is not only Mongolia's largest freshwater body but holds deep cultural significance. The surrounding area is home to the Tsaatan reindeer herders who maintain one of the world's oldest nomadic lifestyles. The lake itself is considered sacred in Mongolian shamanic traditions, with rituals still performed along its shores. Summer visitors might witness the Ice Festival celebrations that honor the lake's spiritual importance.`,
    highlights: [
      'Visit Tsaatan reindeer herders',
      'Traditional shamanic ceremonies',
      'Winter Ice Festival',
      'Khoridal Saridag Mountains',
      'Traditional fishing communities'
    ]
  },
  {
    id: 'altai-mountains',
    title: 'Altai Mountains',
    subtitle: 'Eagle Hunter Heritage',
    image: '/destinations/altai-mountains.jpg',
    category: 'Cultural',
    description: `The majestic Altai region in western Mongolia preserves the ancient tradition of eagle hunting. Here, primarily Kazakh families maintain the intricate relationship between human and golden eagle, a UNESCO-recognized cultural heritage. Communities around Bayan-Ölgii celebrate this tradition during the annual Golden Eagle Festival, where hunters demonstrate centuries-old skills and cultural practices passed down through generations.`,
    highlights: [
      'Golden Eagle Festival',
      'Traditional Kazakh homes',
      'Eagle hunting demonstrations',
      'Traditional crafts and embroidery',
      'Magnificent mountain landscapes'
    ]
  },
  {
    id: 'orkhon-valley',
    title: 'Orkhon Valley',
    subtitle: 'Living Cultural Landscape',
    image: '/destinations/orkhon-valley.jpg',
    category: 'UNESCO',
    description: `This UNESCO World Heritage site represents the cradle of Mongolian civilization where steppe nomadic culture has remained largely unchanged for two millennia. The valley contains numerous archaeological remains including Kharbalgas, the 8th-century capital of the Uighur Empire, and Tuvkhun Hermitage, a mountaintop retreat built by Mongolia's first Buddhist saint. The valley continues to be home to nomadic herder families maintaining traditional seasonal migration patterns.`,
    highlights: [
      'Kharbalgas ancient ruins',
      'Tuvkhun Hermitage',
      'Traditional nomadic herders',
      'Orkhon Waterfall',
      'Archaeological sites from multiple eras'
    ]
  },
  {
    id: 'eastern-steppes',
    title: 'Eastern Steppes',
    subtitle: 'Birthplace of Chinggis Khaan',
    image: '/destinations/eastern-steppes.jpg',
    category: 'Historical',
    description: `The endless grasslands of eastern Mongolia represent the cultural heartland where Chinggis Khaan was born and united the Mongol tribes. The region around Dadal in Khentii province contains sacred sites associated with the great khan, while traditional horse culture remains strongest in this region. Local families continue ancient horsemanship traditions, producing some of Mongolia's finest horse trainers and riders.`,
    highlights: [
      "Chinggis Khaan's birthplace at Dadal",
      'Traditional horse culture',
      'Annual local Naadam celebrations',
      'Sacred mountains of Khentii',
      'Traditional nomadic settlements'
    ]
  },
  {
    id: 'terelj',
    title: 'Terelj National Park',
    subtitle: 'Accessible Nomadic Experience',
    image: '/destinations/terelj.jpg',
    category: 'Nature',
    description: `Just a short drive from Ulaanbaatar, Terelj National Park offers a glimpse into Mongolia's natural beauty and nomadic lifestyle. The park features unique rock formations, including the famous Turtle Rock, alongside opportunities to stay in traditional ger camps and experience horseback riding on the steppe. The area also houses the Aryabal Meditation Temple, a Buddhist retreat nestled in the mountainside accessible by a scenic hike.`,
    highlights: [
      'Turtle Rock formation',
      'Traditional ger camp experiences',
      'Aryabal Meditation Temple',
      'Horseback riding',
      'Proximity to Ulaanbaatar'
    ]
  }
];