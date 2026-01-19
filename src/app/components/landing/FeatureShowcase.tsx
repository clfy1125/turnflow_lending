import { Section } from "@/app/components/ui/Section";
import { motion } from "motion/react";

export function FeatureShowcase() {
  return (
    <Section id="features" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[52px] font-black text-black mb-4"
        >
          핵심 기능
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[18px] text-[#6E6E6E] max-w-2xl mx-auto"
        >
          Turnflow는 AI 기반 댓글 분석부터 자동 DM 발송까지, 
          인스타그램 마케팅의 모든 과정을 자동화합니다
        </motion.p>
      </div>
    </Section>
  );
}