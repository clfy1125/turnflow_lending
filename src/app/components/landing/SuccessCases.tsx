import { Section } from "@/app/components/ui/Section";
import { TrendingUp, Clock, MessageCircle } from "lucide-react";

export function SuccessCases() {
  const stats = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#1A6AFF]" />,
      value: "+60%",
      label: "응답률 증가",
      desc: "단순 노출이 아닌 실제 대화로 이어지는 비율",
      bg: "bg-[#F0F4FF]" 
    },
    {
      icon: <Clock className="w-6 h-6 text-[#1A6AFF]" />,
      value: "-35%",
      label: "상담 시간 단축",
      desc: "반복적인 단순 문의 처리 시간 절감",
      bg: "bg-[#F5F6F9]"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#1A6AFF]" />,
      value: "+28%",
      label: "구매 전환율",
      desc: "관심 고객 타겟팅으로 실질 매출 증대",
      bg: "bg-[#F0F4FF]"
    }
  ];

  return (
    <Section className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4">
            브랜드 성공 사례로 가능성을 확인해보세요
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            이미 많은 기업이 CLFY를 통해 고객 경험을 혁신하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`rounded-[24px] p-8 flex flex-col items-center text-center ${stat.bg} hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                {stat.icon}
              </div>
              <div className="text-[48px] font-extrabold text-[#1A6AFF] mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-[18px] font-bold text-black mb-3">
                {stat.label}
              </div>
              <p className="text-[15px] text-[#6E6E6E] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
