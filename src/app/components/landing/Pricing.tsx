import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { Check, Zap, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section className="py-[120px] bg-gradient-to-b from-white to-[#F5F6F9]" id="pricing">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A6AFF]/5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#1A6AFF]" />
            <span className="text-sm font-bold text-[#1A6AFF]">요금제</span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            비즈니스 규모에 맞는 최적의 플랜을 선택하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PricingCard
              title="Starter"
              price="0원"
              desc="개인 크리에이터 및 초기 시작"
              features={[
                "월 댓글 수집 1,000건",
                "기본 자동응답 템플릿",
                "스팸 필터링 (기본)",
                "이메일 지원"
              ]}
            />
          </motion.div>

          {/* Pro - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PricingCard
              title="Pro"
              price="$19.99"
              desc="성장하는 브랜드 및 쇼핑몰"
              features={[
                "월 댓글 수집 10,000건",
                "AI 오프닝 멘트 생성",
                "구매 전환 추적 대시보드",
                "스팸 필터링 (고급)",
                "실시간 채팅 지원"
              ]}
              highlight
              badge="추천"
            />
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PricingCard
              title="Enterprise"
              price="문의"
              desc="대규모 트래픽 및 커스텀 필요"
              features={[
                "댓글 수집 무제한",
                "커스텀 시나리오 설계",
                "전담 매니저 배정",
                "API 연동 지원",
                "SLA 보장"
              ]}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function PricingCard({
  title,
  price,
  desc,
  features,
  highlight = false,
  badge
}: {
  title: string,
  price: string,
  desc: string,
  features: string[],
  highlight?: boolean,
  badge?: string
}) {
  return (
    <div className={cn(
      "group relative rounded-[28px] p-10 bg-white border-2 flex flex-col transition-all duration-500 h-full",
      highlight
        ? "border-[#1A6AFF] shadow-[0_20px_60px_rgba(26,106,255,0.2)] scale-105 lg:scale-110 z-10"
        : "border-[#E2E5F0] hover:border-[#1A6AFF]/40 hover:shadow-xl hover:-translate-y-2"
    )}>

      {/* Popular Badge */}
      {highlight && badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[#1A6AFF] to-[#4E9EFF] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wide shadow-lg flex items-center gap-1.5">
            <Zap className="w-3 h-3" />
            {badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-10">
        <h3 className={cn(
          "text-[22px] font-bold mb-4",
          highlight ? "text-[#1A6AFF]" : "text-black"
        )}>
          {title}
        </h3>

        <div className="flex items-baseline gap-2 mb-3">
          <span className={cn(
            "text-[44px] font-extrabold leading-none",
            highlight ? "bg-gradient-to-r from-[#1A6AFF] to-[#4E9EFF] bg-clip-text text-transparent" : "text-black"
          )}>
            {price}
          </span>
          {price !== "문의" && (
            <span className="text-[16px] text-[#6E6E6E]">/월</span>
          )}
        </div>

        <p className="text-[15px] text-[#6E6E6E] leading-relaxed">{desc}</p>
      </div>

      {/* Features */}
      <div className="flex-1 mb-10">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className={cn(
                "w-6 h-6 rounded-lg flex items-center justify-center shrink-0",
                highlight ? "bg-[#1A6AFF]/10" : "bg-[#F5F6F9]"
              )}>
                <Check className={cn(
                  "w-4 h-4",
                  highlight ? "text-[#1A6AFF]" : "text-[#6E6E6E]"
                )} />
              </div>
              <span className="text-[15px] text-[#4B4B4B] leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        className={cn(
          "w-full rounded-full h-[56px] font-bold text-[17px] transition-all duration-300",
          highlight
            ? "bg-[#1A6AFF] hover:bg-[#1555D6] text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
            : "bg-white border-2 border-[#E2E5F0] text-[#111] hover:bg-[#F5F6F9] hover:border-[#1A6AFF]/30"
        )}
      >
        {highlight ? "출시예정" : "출시예정"}
      </Button>
    </div>
  )
}