import Hero from '@/components/home/Hero';
import { TimelineDemo } from '@/components/home/Timeline';
import { TimelineDemo2 } from '@/components/home/Timeline2';
import { InfiniteMovingCardsDemo } from '@/components/home/MovingCards';

export default function Home() {
  const narratives = [
    `Mongolia is a land where the ancient and modern coexist, where nomadic traditions that have endured for centuries continue alongside a rapidly developing society.`,
    `From the rolling steppe to the towering mountains, from the scorching desert to the cooling forests and lakes, Mongolia's varied landscapes provide the backdrop for adventure, cultural immersion, and unforgettable memories.`
  ];
  
  return (
    <div>
      <TimelineDemo />
      <InfiniteMovingCardsDemo />
      {/* <Magazine /> */}

    </div>
  );
}