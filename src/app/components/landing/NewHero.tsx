import { Button } from "@/app/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "@/app/components/ui/Section";
import { Sparkles, Shield, Brain, Zap, CheckCircle2, TrendingUp, Users, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export function NewHero() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 파이차트 데이터 - 댓글 분류
  const pieData = [
    { name: '진성 고객', value: 45, color: '#3B82F6' },
    { name: '스팸', value: 25, color: '#EF4444' },
    { name: '일반 댓글', value: 30, color: '#10B981' }
  ];

  // 라인차트 데이터 - 일주일 DM 발송 추이
  const lineData = [
    { day: '월', value: 820 },
    { day: '화', value: 950 },
    { day: '수', value: 1100 },
    { day: '목', value: 1050 },
    { day: '금', value: 1247 },
  ];

  // 바차트 데이터 - 시간대별 응답률
  const barData = [
    { time: '오전', rate: 58 },
    { time: '오후', rate: 72 },
    { time: '저녁', rate: 67 },
  ];

  return (
    <Section className="relative pt-[140px] pb-[100px] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6F9] via-white to-[#F5F6F9] -z-10" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Main Hero Area - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-semibold text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              곧 출시 예정
            </div>
            <h1 className="text-[38px] md:text-[56px] font-black text-black leading-[1.2] mb-6">
              인스타그램 DM 마케팅
              <br />
              댓글 관리를 동시에
            </h1>
            <p className="text-[17px] md:text-[19px] text-[#6E6E6E] mb-8 leading-[1.7]">
              AI 기반 댓글 분석부터 자동 DM 발송까지,
              <br />
              Turnflow가 준비하는 혁신적인 솔루션을 가장 먼저 경험해보세요.
            </p>
            <Button
              onClick={scrollToSignup}
              className="group rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white px-10 h-[56px] text-[17px] font-bold shadow-[0_12px_32px_rgba(168,85,247,0.3)] transition-all hover:shadow-[0_16px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            >
              사전체험 신청하기
            </Button>
          </motion.div>

          {/* Right Column - MacBook Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Browser Window */}
            <div className="relative w-full max-w-[600px] mx-auto">
              {/* Browser Window with Shadow */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                {/* Safari Browser Top Bar */}
                <div className="bg-[#F6F6F6] px-3 py-2.5 flex items-center gap-2 border-b border-gray-200">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
                  </div>

                  {/* Safari Tab & URL Bar */}
                  <div className="flex-1 flex items-center gap-2 ml-2">
                    <div className="flex-1 bg-white rounded-md px-3 py-1.5 text-[11px] text-gray-600 flex items-center gap-2 shadow-sm">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="truncate">app.turnflow.ai/dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="aspect-[16/10] relative">
                  <div className="absolute inset-0 p-5 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-black text-black mb-0.5">Turnflow</h2>
                        <p className="text-[10px] text-gray-600">AI 댓글 분석 대시보드</p>
                      </div>
                    </div>

                    {/* Main Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`rounded-xl p-2.5 transition-all ${activeMetric === 0
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white scale-105 shadow-lg'
                          : 'bg-white text-black shadow-sm'
                          }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Zap className="w-3 h-3" />
                          <span className="text-[9px] font-semibold">DM 발송</span>
                        </div>
                        <div className="text-xl font-black">1,247</div>
                        <p className="text-[8px] mt-0.5 opacity-80">오늘</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`rounded-xl p-2.5 transition-all ${activeMetric === 1
                          ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white scale-105 shadow-lg'
                          : 'bg-white text-black shadow-sm'
                          }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <Shield className="w-3 h-3" />
                          <span className="text-[9px] font-semibold">필터링</span>
                        </div>
                        <div className="text-xl font-black">89%</div>
                        <p className="text-[8px] mt-0.5 opacity-80">정확도</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className={`rounded-xl p-2.5 transition-all ${activeMetric === 2
                          ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white scale-105 shadow-lg'
                          : 'bg-white text-black shadow-sm'
                          }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span className="text-[9px] font-semibold">응답률</span>
                        </div>
                        <div className="text-xl font-black">67%</div>
                        <p className="text-[8px] mt-0.5 opacity-80">평균</p>
                      </motion.div>
                    </div>

                    {/* Charts Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Left: Line Chart + Pie Chart */}
                      <div className="space-y-2">
                        {/* Line Chart - DM 발송 추이 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-white rounded-xl p-3 shadow-md"
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <TrendingUp className="w-3 h-3 text-blue-600" />
                            <h3 className="text-[10px] font-bold text-black">주간 DM 발송 추이</h3>
                          </div>
                          <div style={{ width: '100%', height: '60px' }}>
                            <ResponsiveContainer>
                              <LineChart data={lineData}>
                                <Line
                                  type="monotone"
                                  dataKey="value"
                                  stroke="#3B82F6"
                                  strokeWidth={2}
                                  dot={{ fill: '#3B82F6', r: 2 }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="flex justify-between text-[7px] text-gray-500 mt-1">
                            {lineData.map(item => (
                              <span key={item.day}>{item.day}</span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Pie Chart - 댓글 분류 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="bg-white rounded-xl p-3 shadow-md"
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <BarChart3 className="w-3 h-3 text-purple-600" />
                            <h3 className="text-[10px] font-bold text-black">댓글 분류 분석</h3>
                          </div>
                          <div className="flex items-center gap-3">
                            <div style={{ width: '50px', height: '50px' }}>
                              <ResponsiveContainer>
                                <PieChart>
                                  <Pie
                                    data={pieData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={12}
                                    outerRadius={22}
                                  >
                                    {pieData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                  </Pie>
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                            <div className="flex-1 space-y-1">
                              {pieData.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-[8px] text-gray-700">{item.name}</span>
                                  </div>
                                  <span className="text-[8px] font-bold text-black">{item.value}%</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right: Bar Chart + Activity List */}
                      <div className="space-y-2">
                        {/* Bar Chart - 시간대별 응답률 */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="bg-white rounded-xl p-3 shadow-md"
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <Users className="w-3 h-3 text-emerald-600" />
                            <h3 className="text-[10px] font-bold text-black">시간대별 응답률</h3>
                          </div>
                          <div className="h-[60px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={barData}>
                                <Bar dataKey="rate" fill="#10B981" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                          <div className="flex justify-between text-[7px] text-gray-500 mt-1">
                            {barData.map(item => (
                              <span key={item.time}>{item.time}</span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Recent Activity */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 }}
                          className="bg-white rounded-xl p-3 shadow-md"
                        >
                          <div className="flex items-center gap-1.5 mb-2">
                            <Sparkles className="w-3 h-3 text-purple-600" />
                            <h3 className="text-[10px] font-bold text-black">실시간 활동</h3>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                              <span className="text-[8px] text-gray-700">DM 발송 완료</span>
                              <span className="text-[7px] text-gray-400 ml-auto">방금</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              <span className="text-[8px] text-gray-700">댓글 분석 중</span>
                              <span className="text-[7px] text-gray-400 ml-auto">1분 전</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                              <span className="text-[8px] text-gray-700">스팸 차단</span>
                              <span className="text-[7px] text-gray-400 ml-auto">3분 전</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Sparkles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -left-8"
              >
                <Sparkles className="w-12 h-12 text-[#EC4899]" fill="currentColor" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[5%] right-[10%]"
              >
                <Sparkles className="w-9 h-9 text-black" fill="currentColor" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[10%] -left-6"
              >
                <Sparkles className="w-10 h-10 text-[#A855F7]" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Three Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* Card 1 - AI Intent Analysis */}
          <div className="bg-[#F5F6F9] rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">
              AI 문맥/의도 분석
            </h3>
            <p className="text-[15px] text-[#6E6E6E] leading-relaxed">
              오타나 키워드 누락 댓글도 의도를 파악해 진짜 고객을 찾아냅니다
            </p>
          </div>

          {/* Card 2 - Spam Filtering */}
          <div className="bg-[#F5F6F9] rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">
              스팸/악플 자동 필터링
            </h3>
            <p className="text-[15px] text-[#6E6E6E] leading-relaxed">
              광고, 악플 등 불필요한 댓글을 자동으로 걸러내 비용을 절감합니다
            </p>
          </div>

          {/* Card 3 - Auto DM */}
          <div className="bg-[#F5F6F9] rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">
              DM 내용 자동 생성
            </h3>
            <p className="text-[15px] text-[#6E6E6E] leading-relaxed">
              게시물을 분석해 자연스러운 맞춤형 DM을 자동으로 작성합니다
            </p>
          </div>

        </motion.div>

      </div>
    </Section>
  );
}