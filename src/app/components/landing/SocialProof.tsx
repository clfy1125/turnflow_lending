import { Section } from "@/app/components/ui/Section";
import { motion } from "motion/react";
import { Award } from "lucide-react";

// Imports for government support logos
import imgUlsan from "@/assets/1f6b90a249d0d8ce18bf3cb0b5e562078c62bf3f.png";
import imgUnist from "@/assets/e1b217c40708335d981f1562083ba49de158efb5.png";
import imgMSS from "@/assets/d06e671fa99db524ab3ec0e4f8f7f7ce4c83b0eb.png";
import imgTips from "@/assets/203c80972e39d6c9ce2dbfe6d711f76e6db28c1f.png";

export function SocialProof() {
  const logos = [
    { src: imgMSS, alt: "중소벤처기업부", scale: 1 },
    { src: imgTips, alt: "TIPS", scale: 1 },
    { src: imgUnist, alt: "유니스트기술지주", scale: 0.9 },
    { src: imgUlsan, alt: "울산창조경제혁신센터", scale: 1 },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <Section className="py-20 bg-white overflow-hidden border-y border-[#E2E5F0]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A6AFF]/5 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#1A6AFF]" />
            <span className="text-sm font-bold text-[#1A6AFF]">정부 지원사업 선정</span>
          </div>
          <h3 className="text-[24px] md:text-[28px] font-bold text-black">
            검증된 기술력을 인정받았습니다
          </h3>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

          <motion.div
            className="flex items-center"
            animate={{
              x: ["0%", "-30%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-[280px] h-[120px] mx-6 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-[#F5F6F9] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative max-w-full max-h-full object-contain origin-center"
                  style={{ transform: `scale(${logo.scale})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}