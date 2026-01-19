import { Section } from "@/app/components/ui/Section";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  points: string[];
  imageSide?: "left" | "right";
  bgClassName?: string;
  imageContent?: React.ReactNode;
}

export function FeatureSection({ 
  title, 
  subtitle,
  points, 
  imageSide = "right", 
  bgClassName = "bg-white",
  imageContent
}: FeatureSectionProps) {
  return (
    <Section className={cn("py-[100px] md:py-[140px]", bgClassName)}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Text Area */}
        <div className={cn("order-2 md:order-1", imageSide === "left" && "md:order-2")}>
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6 leading-tight break-keep">
            {title}
          </h2>
          {subtitle && (
             <p className="text-[18px] text-[#6E6E6E] mb-8 leading-relaxed">
               {subtitle}
             </p>
          )}
          
          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#1A6AFF]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#1A6AFF] stroke-[3]" />
                </div>
                <span className="text-[17px] text-[#4B4B4B] font-medium leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Area */}
        <div className={cn("order-1 md:order-2", imageSide === "left" && "md:order-1")}>
          <div className="bg-white rounded-[32px] border border-[#E2E5F0] shadow-[0_24px_48px_rgba(0,0,0,0.06)] overflow-hidden aspect-square md:aspect-[4/3] flex items-center justify-center relative">
            {imageContent || (
               <div className="w-full h-full bg-[#F1F2F7] flex items-center justify-center">
                  <span className="text-[#999]">Image Placeholder</span>
               </div>
            )}
          </div>
        </div>

      </div>
    </Section>
  );
}
