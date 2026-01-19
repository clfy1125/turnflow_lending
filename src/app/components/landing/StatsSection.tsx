import { Section } from "@/app/components/ui/Section";
import { motion } from "motion/react";
import { TrendingUp, Users, MessageSquare, DollarSign } from "lucide-react";

export function StatsSection() {
  return (
    <Section className="py-20 bg-gradient-to-br from-[#F5F6F9] to-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[52px] font-black text-black mb-4">
            데이터가 증명하는 성과
          </h2>
          <p className="text-[18px] text-[#6E6E6E] max-w-2xl mx-auto">
            CLFY를 사용하는 비즈니스들의 실제 성과를 확인하세요
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="text-[36px] font-black text-black mb-2">8,520</div>
            <div className="text-[14px] text-[#6E6E6E]">월평균 DM 발송</div>
            <div className="mt-2 text-[12px] text-blue-600 font-bold">↑ 전월 대비 24%</div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-[36px] font-black text-black mb-2">18.7%</div>
            <div className="text-[14px] text-[#6E6E6E]">평균 전환율</div>
            <div className="mt-2 text-[12px] text-green-600 font-bold">↑ 업계 평균 3배</div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-[36px] font-black text-black mb-2">12,000+</div>
            <div className="text-[14px] text-[#6E6E6E]">누적 고객 전환</div>
            <div className="mt-2 text-[12px] text-purple-600 font-bold">총 결제 건수</div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="text-[36px] font-black text-black mb-2">6,000억</div>
            <div className="text-[14px] text-[#6E6E6E]">누적 매출 발생</div>
            <div className="mt-2 text-[12px] text-orange-600 font-bold">2024년 기준</div>
          </motion.div>

        </div>

        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 border border-[#E2E5F0] shadow-sm"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-[24px] font-bold text-black mb-2">월별 DM 발송 추이</h3>
              <p className="text-[14px] text-[#6E6E6E]">최근 12개월 데이터</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm text-[#6E6E6E]">발송 수</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-[#6E6E6E]">전환율</span>
              </div>
            </div>
          </div>

          {/* Chart Placeholder Area */}
          <div className="w-full h-[300px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center">
              <BarChart className="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-400">차트 영역 (실제 데이터로 대체 가능)</p>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}

// Simple BarChart icon component
function BarChart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
