import { TimelineDemo } from '@/components/home/Timeline';
import Naver from '@/components/layout/Naver';
import Footer from '@/components/layout/Footer';

export default function Home() {
  
  return (
    <div>
      <Naver />
      <TimelineDemo />
      <Footer />
    </div>
  );
}