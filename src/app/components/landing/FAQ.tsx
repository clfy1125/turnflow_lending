import { Section } from "@/app/components/ui/Section";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Instagram 계정 연동 시 권한 승인은 안전한가요?",
    answer: "네, Turnflow는 Meta(Instagram)의 공식 Graph API만을 사용하며, 비밀번호를 저장하지 않습니다. 오직 승인된 권한 범위 내에서만 작동하므로 계정 안전이 보장됩니다."
  },
  {
    question: "24시간 DM 발송 정책(24-hour Policy)이 무엇인가요?",
    answer: "Instagram은 사용자의 마지막 활동 이후 24시간 이내에만 봇이 메시지를 보낼 수 있도록 제한합니다. Turnflow는 이 정책을 자동으로 준수하여, 정책 위반으로 인한 계정 제재를 방지합니다."
  },
  {
    question: "스팸이나 악성 댓글 필터링 기준은 어떻게 되나요?",
    answer: "자체 AI 엔진이 문맥, 키워드, 이모지 패턴 등을 분석하여 스팸 확률을 계산합니다. 사용자가 직접 금지어를 설정할 수도 있으며, 학습을 통해 정확도는 계속 향상됩니다."
  },
  {
    question: "자동 응답 템플릿은 수정할 수 있나요?",
    answer: "물론입니다. 기본 제공되는 템플릿 외에도 브랜드 톤앤매너에 맞게 자유롭게 수정 가능하며, 상황별(구매 문의, 배송 문의 등)로 다양한 시나리오를 설정할 수 있습니다."
  },
  {
    question: "요금제 변경이나 해지는 언제든 가능한가요?",
    answer: "네, 언제든지 대시보드에서 요금제를 변경하거나 해지할 수 있습니다. 변경된 요금은 다음 결제 주기에 반영됩니다."
  },
  {
    question: "고객 데이터 보안은 어떻게 관리되나요?",
    answer: "모든 데이터는 암호화되어 저장되며, 엄격한 보안 프로토콜에 따라 관리됩니다. 제3자에게 데이터를 제공하거나 판매하지 않습니다."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white py-[120px]" id="faq">
      <div className="max-w-[900px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A6AFF]/5 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-[#1A6AFF]" />
            <span className="text-sm font-bold text-[#1A6AFF]">FAQ</span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-[#6E6E6E] text-lg">
            궁금하신 사항이 있다면 언제든 문의해주세요.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div 
                className={cn(
                  "bg-white rounded-[24px] border-2 transition-all duration-300 overflow-hidden",
                  openIndex === idx 
                    ? "border-[#1A6AFF] shadow-lg" 
                    : "border-[#E2E5F0] hover:border-[#1A6AFF]/30 hover:shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-7 md:p-8 text-left focus:outline-none group"
                >
                  <span className={cn(
                    "font-bold text-[17px] md:text-[19px] pr-6 transition-colors",
                    openIndex === idx ? "text-[#1A6AFF]" : "text-black group-hover:text-[#1A6AFF]"
                  )}>
                    {faq.question}
                  </span>
                  
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                    openIndex === idx 
                      ? "bg-[#1A6AFF] text-white rotate-180" 
                      : "bg-[#F5F6F9] text-[#6E6E6E] group-hover:bg-[#1A6AFF]/10 group-hover:text-[#1A6AFF]"
                  )}>
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 md:px-8 pb-8 text-[#6E6E6E] leading-[1.8] text-[16px] border-t border-[#F1F2F7] pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}