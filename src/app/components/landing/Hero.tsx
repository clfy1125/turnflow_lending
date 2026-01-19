import { Button } from "@/app/components/ui/Button";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "@/app/components/ui/Section";
import exampleImage from '@/assets/e016b6f6fda0ae5f013fd8fe844e0d1d1a513b9f.png';

export function Hero() {
  return (
    <Section className="relative pt-[140px] pb-[120px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6F9] via-white to-[#F5F6F9] -z-10" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1 className="text-[56px] md:text-[72px] font-black text-black leading-[1.1] tracking-tight mb-4 font-[Bungee]">
            DM 자동화로
          </h1>
          <h1 className="text-[56px] md:text-[72px] font-black text-black leading-[1.1] tracking-tight font-[Bungee]">
            비즈니스가 쉬워진다
          </h1>
        </motion.div>

        {/* Sub Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[18px] md:text-[20px] text-[#6E6E6E] mb-10 leading-[1.6]"
        >
          효율은 높게, 관리는 쉽게
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <Button
            className="group rounded-full bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white px-12 h-[64px] text-[18px] font-bold shadow-[0_12px_32px_rgba(168,85,247,0.3)] transition-all hover:shadow-[0_16px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1"
          >
            사전 예약하기
          </Button>
        </motion.div>

        {/* Three Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* Left Card - DM Stats */}
          <div className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-lg">
            <div className="mb-6">
              <div className="text-xs font-bold text-[#999] mb-2">보도 자료</div>
              <h3 className="text-[20px] font-bold text-black mb-1">DM 자동화 성공사례만 만나보세요!</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-[#6E6E6E] mb-1">총 도달률</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-black text-black">129</span>
                  <span className="text-[18px] font-bold text-[#6E6E6E]">만 뷰</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-[#6E6E6E] mb-1">총 결제</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-black text-black">12,000</span>
                  <span className="text-[18px] font-bold text-[#6E6E6E]">건</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-[#6E6E6E] mb-1">총 매출</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[32px] font-black text-black">6,000</span>
                  <span className="text-[18px] font-bold text-[#6E6E6E]">억 원</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card - Instagram Marketing */}
          <div className="relative bg-gradient-to-br from-[#C13584] via-[#E1306C] to-[#F77737] rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-bold">보도 자료</div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-[24px] font-bold mb-4 leading-tight">
                인스타그램 마케팅<br />
                효율 극대화하는<br />
                '골든 타임' 공개
              </h3>
            </div>
            {/* Decorative Instagram icon */}
            <div className="absolute bottom-4 right-4 opacity-30">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
              </svg>
            </div>
          </div>

          {/* Right Card - Instagram Comments UI */}
          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-6 text-white shadow-2xl">
            <div className="mb-4">
              <div className="text-xs font-bold mb-2">보도 입점팀</div>
              <h3 className="text-[18px] font-bold">
                가족과 함께하는 세계 문화<br />
                이벤트 둘러보기
              </h3>
            </div>
            {/* Instagram Post Preview */}
            <div className="bg-black rounded-2xl overflow-hidden">
              {/* Instagram Header */}
              <div className="flex items-center justify-between p-3 bg-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#E1306C] to-[#F77737] rounded-full" />
                  <span className="text-sm font-semibold">clfy_official</span>
                </div>
                <div className="text-xl">⋯</div>
              </div>
              {/* Instagram Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                <span className="text-xs text-gray-500">게시물 이미지</span>
              </div>
              {/* Instagram Actions */}
              <div className="flex items-center justify-between p-3 bg-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>
            {/* Bottom Logo */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm font-bold">SocialBiz Curator</div>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </Section>
  );
}