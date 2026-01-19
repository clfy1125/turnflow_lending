import { motion } from "motion/react";
import { BarChart3, TrendingUp, Users, Zap, Target, Activity, ArrowUp, ArrowDown } from "lucide-react";

export function AnalyticsDashboardSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-semibold text-sm mb-6">
              <BarChart3 className="w-4 h-4" />
              핵심 기능 5
            </div>
            <h2 className="text-4xl font-bold mb-6">
              실시간 성과 분석으로<br />
              더 나은 전략을 수립
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-10">
              댓글 유형별 분석, DM 발송 현황, 응답률 통계를<br />
              실시간으로 확인하고 데이터 기반 전략을 수립하세요.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">댓글 유형 분석</h3>
                  <p className="text-[#6E6E6E]">
                    승인/스팸/악플 비율을 실시간으로 모니터링하고 트렌드를 파악합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">사용자 인사이트</h3>
                  <p className="text-[#6E6E6E]">
                    팔로워/논팔로워 비율과 사용자 참여도를 상세하게 분석합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">전환율 추적</h3>
                  <p className="text-[#6E6E6E]">
                    DM 발송부터 구매까지 전체 퍼널을 추적하고 ROI를 측정합니다
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-black">성과 대시보드</h3>
                  <p className="text-sm text-gray-500 mt-1">이번 주 실시간 데이터</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full"
                >
                  <ArrowUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-600">+24%</span>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-semibold opacity-90">DM 발송</span>
                  </div>
                  <div className="text-4xl font-black mb-1">1,247</div>
                  <div className="flex items-center gap-1 text-xs opacity-80">
                    <ArrowUp className="w-3 h-3" />
                    <span>지난주 대비 +18%</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5" />
                    <span className="text-xs font-semibold opacity-90">필터링 정확도</span>
                  </div>
                  <div className="text-4xl font-black mb-1">89%</div>
                  <div className="flex items-center gap-1 text-xs opacity-80">
                    <ArrowUp className="w-3 h-3" />
                    <span>지난주 대비 +3%</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs font-semibold opacity-90">스팸 차단</span>
                  </div>
                  <div className="text-4xl font-black mb-1">342</div>
                  <div className="flex items-center gap-1 text-xs opacity-80">
                    <ArrowDown className="w-3 h-3" />
                    <span>지난주 대비 -12%</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-white"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-xs font-semibold opacity-90">응답률</span>
                  </div>
                  <div className="text-4xl font-black mb-1">67%</div>
                  <div className="flex items-center gap-1 text-xs opacity-80">
                    <ArrowUp className="w-3 h-3" />
                    <span>지난주 대비 +8%</span>
                  </div>
                </motion.div>
              </div>

              {/* Bar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gray-50 rounded-2xl p-5"
              >
                <h4 className="text-sm font-bold text-black mb-4">댓글 유형별 분석</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">승인</span>
                      <span className="text-xs font-bold text-emerald-600">892건 (71%)</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "71%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">스팸</span>
                      <span className="text-xs font-bold text-red-600">342건 (27%)</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "27%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">악플</span>
                      <span className="text-xs font-bold text-orange-600">13건 (2%)</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "2%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ROI Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="mt-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-5 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold mb-1 opacity-90">전체 ROI 증가율</div>
                    <div className="text-3xl font-black">4.2x</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
                <p className="text-xs opacity-80 mt-3">Turnflow 도입 후 마케팅 효율이 4.2배 증가했습니다</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
