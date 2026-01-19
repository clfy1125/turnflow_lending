import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Heart, Send, Bookmark, MessageSquare, MoreHorizontal, ChevronLeft, CheckCircle2, Lightbulb, FileText, Wand2 } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function AIContentAnalysisSection() {
  const [stage, setStage] = useState(0); // 0: 릴스 화면, 1: 분석 중, 2: DM 자동 작성

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev === 0) return 1; // 릴스 → 분석 중
        if (prev === 1) return 2; // 분석 중 → DM 작성
        return 0; // DM 작성 → 릴스
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Instagram UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            <div className="w-full max-w-[340px]">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 relative h-[750px] overflow-hidden">

                {/* Stage 0: Reels Screen */}
                <AnimatePresence>
                  {stage === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      {/* Reels Video */}
                      <div className="relative w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbWluJTIwYyUyMHBpbGxzfGVufDF8fHx8MTczNjk5OTEwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Reels"
                          className="w-full h-full object-cover"
                        />

                        {/* Reels Top Bar */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <div className="text-white font-semibold text-sm">Reels</div>
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>

                        {/* Reels Bottom Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
                            <span className="text-white font-semibold text-sm">turnflow_official</span>
                            <button className="px-3 py-0.5 border border-white text-white text-xs rounded-full font-semibold">
                              팔로우
                            </button>
                          </div>
                          <p className="text-white text-xs leading-relaxed">
                            🔬💛 비타민C 1000mg 고함량!<br />
                            천연 성분 99% 건강 젤리<br />
                            "성분" 댓글시 상세 정보 DM! ✨
                          </p>
                        </div>

                        {/* Reels Right Actions */}
                        <div className="absolute right-4 bottom-32 flex flex-col gap-5">
                          <div className="flex flex-col items-center">
                            <Heart className="w-7 h-7 text-white mb-1" fill="white" />
                            <span className="text-white text-xs font-semibold">8.1k</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <MessageSquare className="w-7 h-7 text-white mb-1" />
                            <span className="text-white text-xs font-semibold">234</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <Send className="w-7 h-7 text-white mb-1" />
                            <span className="text-white text-xs font-semibold">156</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stage 1: AI Analysis Screen */}
                <AnimatePresence>
                  {stage === 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white flex flex-col p-6"
                    >
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="text-center mb-8">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 mx-auto mb-4"
                          >
                            <Bot className="w-16 h-16 text-purple-600" />
                          </motion.div>
                          <h3 className="text-xl font-bold text-black mb-2">AI가 릴스를 분석중...</h3>
                          <p className="text-sm text-gray-600">콘텐츠 내용을 파악하고 있습니다</p>
                        </div>

                        {/* Analysis Results */}
                        <div className="space-y-3">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-purple-50 border border-purple-200 rounded-xl p-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-bold text-purple-900">주제 분석 완료</span>
                            </div>
                            <p className="text-xs text-purple-800">📌 비타민C 고함량 건강 젤리</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-purple-50 border border-purple-200 rounded-xl p-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-bold text-purple-900">타겟 분석 완료</span>
                            </div>
                            <p className="text-xs text-purple-800">🎯 건강 관심층, 직장인, 면역력 관리</p>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-purple-50 border border-purple-200 rounded-xl p-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-bold text-purple-900">키워드 추출 완료</span>
                            </div>
                            <p className="text-xs text-purple-800">💡 비타민C, 고함량, 천연 성분</p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Stage 2: Auto DM Generation Screen */}
                <AnimatePresence>
                  {stage === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white flex flex-col"
                    >
                      {/* DM Header */}
                      <div className="px-3 py-2.5 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-3">
                          <ChevronLeft className="w-6 h-6 text-black" />
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-semibold text-black">맞춤 DM 자동 작성</span>
                          </div>
                        </div>
                      </div>

                      {/* DM Content */}
                      <div className="flex-1 relative">
                        <div className="absolute inset-0 p-4 overflow-y-auto">
                          <div className="space-y-3">
                            {/* Auto Generated DM */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-3xl rounded-tl-sm px-4 py-3"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs font-semibold">AI가 자동 작성한 DM</span>
                              </div>
                              <p className="text-sm leading-relaxed">
                                안녕하세요! 😊<br />
                                댓글 감사합니다.<br />
                                <br />
                                비타민C 1000mg 고함량 젤리<br />
                                천연 성분 99%로 안심하고<br />
                                드실 수 있어요!<br />
                                <br />
                                상세 성분표와 할인 정보<br />
                                링크 보내드립니다! 🔬✨
                              </p>
                            </motion.div>

                            {/* Features Highlight */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="bg-purple-50 border border-purple-200 rounded-xl p-3"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-purple-900">
                                  <CheckCircle2 className="w-3 h-3 text-purple-600" />
                                  <span>릴스 내용 기반 개인화</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-purple-900">
                                  <CheckCircle2 className="w-3 h-3 text-purple-600" />
                                  <span>제품 특징 자동 강조</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-purple-900">
                                  <CheckCircle2 className="w-3 h-3 text-purple-600" />
                                  <span>구매 유도 문구 최적화</span>
                                </div>
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className="bg-purple-600 text-white rounded-xl p-4 text-center"
                            >
                              <p className="text-sm font-bold mb-1">✓ 자동 생성 완료</p>
                              <p className="text-xs opacity-90">수정 없이 바로 발송 가능</p>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-semibold text-sm mb-6">
              <Bot className="w-4 h-4" />
              핵심 기능 4
            </div>
            <h2 className="text-4xl font-bold mb-6">
              릴스 내용을 이해하고,<br />
              맞춤형 DM을 자동 작성
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-10">
              LLM이 릴스/게시물을 분석해 주제, 타겟, 키워드를 파악하고<br />
              각 사용자에게 딱 맞는 개인화된 DM을 자동으로 생성합니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">자동 콘텐츠 분석</h3>
                  <p className="text-[#6E6E6E]">
                    릴스/게시물의 주제, 타겟층, 키워드를 AI가 자동으로 파악합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <Wand2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">맞춤형 DM 생성</h3>
                  <p className="text-[#6E6E6E]">
                    콘텐츠에 맞는 개인화된 메시지를 자동으로 작성해 드립니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">템플릿 라이브러리</h3>
                  <p className="text-[#6E6E6E]">
                    업종별, 상황별 템플릿으로 빠르게 수정하여 사용할 수 있습니다
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
