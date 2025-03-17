
import { Section, SectionTitle } from "../ui/Section";

export function Logos() {
  // All logos with transparent backgrounds and white text
  const logos = [
    // Mindspace logo (already has appropriate styling)
    <img 
      key="1" 
      src="/lovable-uploads/6ab5cd4b-8184-4d99-bb45-8bff186cdc32.png" 
      alt="Mindspace" 
      className="h-10 md:h-12 w-auto object-contain"
    />,
    // Sama logo (already has appropriate styling)
    <img 
      key="2" 
      src="/lovable-uploads/e2212927-4fa0-4ee6-abdd-e8419d81daaa.png" 
      alt="Sama" 
      className="h-10 md:h-12 w-auto object-contain"
    />,
    // Remaining placeholder logos with white text on transparent background
    <svg key="3" viewBox="0 0 100 50" className="h-10 md:h-12 w-auto">
      <text x="50" y="30" fontSize="16" fill="#fff" textAnchor="middle" fontWeight="bold">LOGO 3</text>
    </svg>,
    <svg key="4" viewBox="0 0 100 50" className="h-10 md:h-12 w-auto">
      <text x="50" y="30" fontSize="16" fill="#fff" textAnchor="middle" fontWeight="bold">LOGO 4</text>
    </svg>,
    <svg key="5" viewBox="0 0 100 50" className="h-10 md:h-12 w-auto">
      <text x="50" y="30" fontSize="16" fill="#fff" textAnchor="middle" fontWeight="bold">LOGO 5</text>
    </svg>,
    <svg key="6" viewBox="0 0 100 50" className="h-10 md:h-12 w-auto">
      <text x="50" y="30" fontSize="16" fill="#fff" textAnchor="middle" fontWeight="bold">LOGO 6</text>
    </svg>,
  ];

  return (
    <Section id="trusted-by" className="py-16 md:py-20">
      <SectionTitle
        subtitle="Trusted By"
        title="Companies We've Helped Transform"
        alignment="center"
      />
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex items-center justify-center h-16"
          >
            {logo}
          </div>
        ))}
      </div>
    </Section>
  );
}
