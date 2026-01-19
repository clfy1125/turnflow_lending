import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <Section className="py-20 bg-gradient-to-br from-[#A855F7] via-[#7C3AED] to-[#3B82F6] relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[40px] md:text-[56px] font-black text-white mb-6 leading-tight">
            지금 바로 시작하고
            <br />
            성과를 경험하세요
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/90 mb-12 max-w-2xl mx-auto">
            무료 체험으로 CLFY의 강력한 기능을 직접 확인해보세요.
            <br />
            신용카드 등록 없이 바로 시작할 수 있습니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              className="group rounded-full bg-white hover:bg-gray-50 text-[#A855F7] px-12 h-[64px] text-[18px] font-bold shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
            >
              무료로 시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              className="rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-12 h-[64px] text-[18px] font-bold transition-all hover:-translate-y-1"
            >
              영업팀 문의하기
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>신용카드 등록 불필요</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>14일 무료 체험</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>언제든 해지 가능</span>
            </div>
          </div>

        </motion.div>

      </div>
    </Section>
  );
}
