import Hero from '@/components/home/Hero';
import { BentoImages } from '@/components/home/BentoImages';
import Footer from "@/components/layout/Footer";
import Narrative from '@/components/home/Narrative';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero - Fixed in place (z-0) */}
      <div className="fixed inset-0 z-0">
        <Hero />
      </div>
      
      {/* Scrolling Content - Goes over hero (z-10) */}
      <div className="relative z-10">
        {/* Spacer to show hero initially */}
        <div className="h-[38rem] md:h-[50rem]"></div>
        
        {/* Content that scrolls over the hero */}
        <div className="bg-white">
          <Narrative />
          <BentoImages />
          <Footer />
        </div>
      </div>
    </div>
  );
}