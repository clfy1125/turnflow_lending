import { Section } from "@/app/components/ui/Section";
import { BrainCircuit, Filter, PenTool, Zap, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Showcase() {
  return (
    <Section className="py-[120px] bg-gradient-to-b from-white to-[#F5F6F9]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A6AFF]/5 rounded-full mb-6">
            <Zap className="w-4 h-4 text-[#1A6AFF]" />
            <span className="text-sm font-bold text-[#1A6AFF]">핵심 기능</span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-extrabold text-black mb-4">
            AI가 해결하는 3가지 문제
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            CLFY는 단순한 자동화를 넘어, 고객과의 진짜 연결을 만들어냅니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: AI Intent Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ShowcaseCard 
              icon={<BrainCircuit className="w-8 h-8" />}
              iconBg="from-[#1A6AFF] to-[#4E9EFF]"
              title="AI 문맥 의도 분석"
              description="기존 DM 발송 서비스는 키워드 기반이라 오타가 있거나 스팸 댓글도 모두 발송됩니다. CLFY는 LLM 기반으로 오타를 감지하고, 광고나 악성 댓글은 자동으로 판별해 발송하지 않습니다."
              example={
                <div className="bg-[#000] rounded-2xl overflow-hidden">
                  {/* Instagram Comments Header */}
                  <div className="flex items-center justify-center py-3 border-b border-gray-800">
                    <div className="w-10 h-1 bg-gray-700 rounded-full" />
                  </div>
                  <div className="px-4 py-3 border-b border-gray-800">
                    <h3 className="text-white text-center font-semibold">댓글</h3>
                  </div>
                  
                  {/* Comments List */}
                  <div className="px-4 py-3 space-y-4 max-h-[320px] overflow-y-auto">
                    {/* Comment 1 - Valid */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-white text-sm font-semibold">psitvsnqm</span>
                          <span className="text-gray-500 text-xs">4주</span>
                        </div>
                        <p className="text-white text-sm mb-1">얼마나 연습하셨을지 웃습니다</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <button>답글 달기</button>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>280개</span>
                          </div>
                        </div>
                        {/* AI Badge - Valid */}
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-[#1A6AFF]/20 text-[#4E9EFF] px-2.5 py-1 rounded-full text-xs font-bold">
                          <BrainCircuit className="w-3 h-3" />
                          <span>진성 관심 고객 감지</span>
                        </div>
                      </div>
                    </div>

                    {/* Comment 2 - Valid with typo */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-white text-sm font-semibold">__woojaewon</span>
                          <span className="text-gray-500 text-xs">4주</span>
                          <span className="text-gray-500 text-xs">• 작성자</span>
                        </div>
                        <p className="text-white text-sm mb-1">@psitvsnqm 연습이 끝이 없네요</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <button>답글 달기</button>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>362개</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Comment 3 - Valid */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-white text-sm font-semibold">sim_pro__</span>
                          <span className="text-gray-500 text-xs">4주</span>
                        </div>
                        <p className="text-white text-sm mb-1">뭐말인건 모르겠는데 돈이랑 포장이 그냥 조건데</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <button>답글 달기</button>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>258개</span>
                          </div>
                        </div>
                        {/* AI Badge - Valid */}
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-[#1A6AFF]/20 text-[#4E9EFF] px-2.5 py-1 rounded-full text-xs font-bold">
                          <BrainCircuit className="w-3 h-3" />
                          <span>구매 의도 감지 (오타 보정)</span>
                        </div>
                      </div>
                    </div>

                    {/* Comment 4 - Spam Filtered */}
                    <div className="flex gap-3 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-400 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-white text-sm font-semibold">james_siwan_ahn</span>
                          <span className="text-gray-500 text-xs">4주</span>
                        </div>
                        <p className="text-white text-sm mb-1">아니 진심 디씨코믹스의 오랜 팬인데요. 진짜 아시안 조커는 이런느끼어...</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <button>답글 달기</button>
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>470개</span>
                          </div>
                        </div>
                        {/* AI Badge - Filtered */}
                        <div className="mt-2 inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 px-2.5 py-1 rounded-full text-xs font-bold">
                          <ShieldCheck className="w-3 h-3" />
                          <span>스팸/광고 필터링</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Comment Input Bottom */}
                  <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
                    <input 
                      type="text" 
                      placeholder="대화 참여하기..."
                      className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
                      disabled
                    />
                    <button className="text-gray-700">GIF</button>
                    <button className="text-gray-700">🎁</button>
                  </div>
                </div>
              }
              accentColor="border-[#1A6AFF]/20 hover:border-[#1A6AFF]/50"
            />
          </motion.div>

          {/* Card 2: Spam Filtering */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ShowcaseCard 
              icon={<Filter className="w-8 h-8" />}
              iconBg="from-red-500 to-orange-500"
              title="스팸/노이즈 필터링"
              description="단순 이모지 도배, 광고성 댓글, 악플까지. 불필요한 메시지 발송 비용을 0원으로 만드세요."
              example={
                <div className="space-y-3">
                   <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAFAFA] border border-[#E2E5F0] opacity-50">
                      <span className="text-sm text-[#6E6E6E]">맞팔해요~ ❤️</span>
                      <span className="text-xs font-bold text-[#999] bg-white px-2.5 py-1 rounded-full border border-[#E2E5F0]">제외</span>
                   </div>
                   <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAFAFA] border border-[#E2E5F0] opacity-50">
                      <span className="text-sm text-[#6E6E6E]">🔥🔥🔥</span>
                      <span className="text-xs font-bold text-[#999] bg-white px-2.5 py-1 rounded-full border border-[#E2E5F0]">제외</span>
                   </div>
                   <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 border-2 border-red-200">
                      <span className="text-sm text-[#6E6E6E]">무료 팔로워...</span>
                      <span className="text-xs font-bold text-red-600 bg-white px-2.5 py-1 rounded-full">차단</span>
                   </div>
                </div>
              }
              accentColor="border-red-500/20 hover:border-red-500/50"
            />
          </motion.div>

          {/* Card 3: Auto-Drafting (Copilot) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <ShowcaseCard 
              icon={<PenTool className="w-8 h-8" />}
              iconBg="from-purple-500 to-pink-500"
              title="DM 자동 작성 (Copilot)"
              description="게시물 내용을 AI가 이해하고, 가장 자연스러운 첫 마디와 답변 내용을 자동으로 써줍니다."
              example={
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-5 overflow-hidden">
                   <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-purple-600">AI 작성중</span>
                      </div>
                   </div>
                   <p className="text-xs text-purple-600 font-bold mb-2">AI Suggestion</p>
                   <p className="text-sm text-black leading-relaxed">
                     "안녕하세요! 문의하신 <span className="bg-purple-200 text-purple-800 px-1.5 py-0.5 rounded font-semibold">여름 신상 원피스</span> 링크 보내드려요. 현재 20% 할인 중입니다! 🎁"
                   </p>
                </div>
              }
              accentColor="border-purple-500/20 hover:border-purple-500/50"
            />
          </motion.div>

        </div>
      </div>
    </Section>
  );
}

function ShowcaseCard({ 
  icon, 
  iconBg, 
  title, 
  description, 
  example,
  accentColor 
}: { 
  icon: React.ReactNode, 
  iconBg: string,
  title: string, 
  description: string, 
  example: React.ReactNode,
  accentColor: string
}) {
  return (
    <div className={cn(
      "group h-full rounded-[28px] p-8 bg-white border-2 transition-all duration-500",
      "hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2",
      accentColor
    )}>
      {/* Icon */}
      <div className={cn(
        "w-16 h-16 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center mb-6",
        "shadow-lg group-hover:scale-110 transition-transform duration-300",
        iconBg
      )}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[24px] font-extrabold text-black mb-4 group-hover:text-[#1A6AFF] transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-[#6E6E6E] leading-[1.7] mb-8">
        {description}
      </p>

      {/* Example */}
      <div className="mt-auto">
        {example}
      </div>
    </div>
  )
}