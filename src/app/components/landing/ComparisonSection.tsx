import { Section } from "@/app/components/ui/Section";
import { Check, X, TrendingUp, Clock, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ComparisonSection() {
  const stats = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      value: "+60%",
      label: "응답률 증가",
      desc: "단순 노출이 아닌 실제 대화",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "-35%",
      label: "상담 시간 단축",
      desc: "반복 문의 처리 자동화",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "+28%",
      label: "구매 전환율",
      desc: "타겟팅으로 실질 매출 증대",
    }
  ];

  return (
    <Section className="py-[120px] bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#F5F6F9] to-transparent -z-10" />
      
      <div className="max-w-[1200px] mx-auto">
        
        {/* Success Stats - Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-6">
            브랜드들이 경험한 실제 성과
          </h2>
          <p className="text-lg text-[#6E6E6E] mb-16">
            이미 많은 기업이 CLFY를 통해 고객 경험을 혁신하고 있습니다.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-gradient-to-br from-[#F5F6F9] to-white rounded-[28px] p-8 border-2 border-[#E2E5F0] hover:border-[#1A6AFF]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1A6AFF]/10 text-[#1A6AFF] flex items-center justify-center mb-6 mx-auto group-hover:bg-[#1A6AFF] group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-[56px] font-extrabold bg-gradient-to-r from-[#1A6AFF] to-[#4E9EFF] bg-clip-text text-transparent mb-3 leading-none">
                  {stat.value}
                </div>
                <div className="text-[20px] font-bold text-black mb-2">
                  {stat.label}
                </div>
                <p className="text-[14px] text-[#6E6E6E]">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-4">
            왜 기존 툴로는 부족할까요?
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            단순 키워드 방식은 고객을 놓치고, 비용은 늘립니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border-2 border-[#E2E5F0] bg-gradient-to-br from-[#FAFAFA] to-white p-10 relative"
          >
            <div className="absolute top-6 right-6">
              <span className="text-xs font-bold bg-[#E2E5F0] text-[#6E6E6E] px-3 py-1.5 rounded-full">Legacy</span>
            </div>
            
            <div className="mb-10">
              <h3 className="text-[28px] font-extrabold text-[#6E6E6E] mb-2">기존 키워드 방식</h3>
              <p className="text-sm text-[#999]">제한적인 규칙 기반 자동화</p>
            </div>
            
            <ul className="space-y-6">
              <ComparisonItem 
                icon={<X className="w-5 h-5 text-red-400" />}
                iconBg="bg-red-50"
                title="정확한 키워드만 인식"
                desc="'가격', '얼마' 처럼 설정한 단어가 없으면 DM 발송 불가"
              />
              <ComparisonItem 
                icon={<X className="w-5 h-5 text-red-400" />}
                iconBg="bg-red-50"
                title="오타/띄어쓰기 인식 실패"
                desc="'가겨', '얼마에요' 등 조금만 달라도 놓침"
              />
              <ComparisonItem 
                icon={<X className="w-5 h-5 text-red-400" />}
                iconBg="bg-red-50"
                title="스팸 구분 불가"
                desc="키워드만 맞으면 광고 계정에도 무조건 발송 (비용 낭비)"
              />
            </ul>
          </motion.div>

          {/* Right: CLFY Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border-2 border-[#1A6AFF] bg-gradient-to-br from-white to-[#F5F9FF] p-10 shadow-[0_20px_60px_rgba(26,106,255,0.15)] relative"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1A6AFF] to-[#4E9EFF] text-white text-xs font-bold px-5 py-2 rounded-bl-2xl rounded-tr-[26px]">
              ✨ CLFY Solution
            </div>
            
            <div className="mb-10 mt-4">
              <h3 className="text-[28px] font-extrabold text-[#1A6AFF] mb-2">CLFY AI 분석</h3>
              <p className="text-sm text-[#1A6AFF]/70">지능형 LLM 기반 자동화</p>
            </div>
            
            <ul className="space-y-6">
              <ComparisonItem 
                icon={<Check className="w-5 h-5 text-[#1A6AFF]" />}
                iconBg="bg-[#1A6AFF]/10"
                title="문맥과 의도를 파악"
                desc="키워드가 없어도 '구매하고 싶어요'라는 의도를 파악해 발송"
                highlight
              />
              <ComparisonItem 
                icon={<Check className="w-5 h-5 text-[#1A6AFF]" />}
                iconBg="bg-[#1A6AFF]/10"
                title="오타/변형 완벽 커버"
                desc="자연어 처리로 사람이 말하는 것처럼 찰떡같이 이해"
                highlight
              />
              <ComparisonItem 
                icon={<Check className="w-5 h-5 text-[#1A6AFF]" />}
                iconBg="bg-[#1A6AFF]/10"
                title="진짜 고객만 선별"
                desc="스팸, 광고, 단순 반응은 거르고 잠재 고객에게만 집중"
                highlight
              />
            </ul>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}

function ComparisonItem({ 
  icon, 
  iconBg,
  title, 
  desc, 
  highlight = false 
}: { 
  icon: React.ReactNode, 
  iconBg: string,
  title: string, 
  desc: string, 
  highlight?: boolean 
}) {
  return (
    <div className="flex gap-4">
      <div className={cn(
        "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300",
        iconBg
      )}>
        {icon}
      </div>
      <div>
        <h4 className={cn("text-[17px] font-bold mb-1.5", highlight ? "text-black" : "text-[#6E6E6E]")}>
            {title}
        </h4>
        <p className="text-[14px] text-[#6E6E6E] leading-snug">
            {desc}
        </p>
      </div>
    </div>
  )
}