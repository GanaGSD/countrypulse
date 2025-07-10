// src/components/home/NarrativeSection.tsx
interface NarrativeSectionProps {
  text: string;
}

export default function NarrativeSection({ text }: NarrativeSectionProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] bg-gray-100 overflow-hidden mb-12 flex justify-center items-center">
      
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 opacity-20 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/watercolorbg.jpg')",
          backgroundSize: '100% 100%'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-relaxed max-w-4xl mx-auto text-gray-800">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}