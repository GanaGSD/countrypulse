import Hero from '@/components/home/Hero';
import NarrativeSection from '@/components/home/NarrativeSection';
import DestinationsSection from '@/components/home/DestinationsSection';
import Magazine from '@/components/home/Magazine';

export default function Home() {
  const narratives = [
    `Mongolia is a land where the ancient and modern coexist, where nomadic traditions that have endured for centuries continue alongside a rapidly developing society.`,
    `From the rolling steppe to the towering mountains, from the scorching desert to the cooling forests and lakes, Mongolia's varied landscapes provide the backdrop for adventure, cultural immersion, and unforgettable memories.`
  ];
  
  return (
    <div className="pt-[75px]"> {/* Account for fixed header */}
      <Hero />
      <NarrativeSection text={narratives[0]} />
      <DestinationsSection />
      <NarrativeSection text={narratives[1]} />
      <Magazine />
    </div>
  );
}