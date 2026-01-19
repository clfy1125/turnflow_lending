import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Brain, Heart, Send, Bookmark, MessageSquare, MoreHorizontal, ChevronLeft, CheckCircle2, XCircle, Target, Filter } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import gummyBearsImage from '@/assets/81a63ef3b9075cacad15e04c05e2e467d704cba0.png';
import { useState, useEffect } from "react";

export function AIContextSection() {
  const [stage, setStage] = useState(0); // 0: 메인 피드, 1: 댓글창, 2: 분석 결과

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => {
        if (prev === 0) return 1;
        if (prev === 1) return 2;
        return 0;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const comments = [
    { username: "user_happy", text: "정보밧기", timestamp: "방금", analysis: "✓ 오타 인식", type: "typo" },
    { username: "lovely_day", text: "보내주세요!", timestamp: "1분", analysis: "✓ 의도 파악", type: "intent" },
    { username: "spam_bot", text: "대박사이트 추천", timestamp: "2분", analysis: "✗ 스팸", type: "spam" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-white">
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

                <AnimatePresence>
                  {stage !== 2 && (
                    <motion.div
                      initial={false}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Instagram Top Bar */}
                      <div className="px-3 py-2.5 border-b border-gray-200 flex items-center justify-between">
                        <svg className="w-36 h-9" viewBox="30 -5 200 40" fill="currentColor">
                          <path
                            clipRule="evenodd"
                            d="M 37.82 4.11 c -2.32 0.97 -4.86 3.7 -5.66 7.13 c -1.02 4.34 3.21 6.17 3.56 5.57 c 0.4 -0.7 -0.76 -0.94 -1 -3.2 c -0.3 -2.9 1.05 -6.16 2.75 -7.58 c 0.32 -0.27 0.3 0.1 0.3 0.78 l -0.06 14.46 c 0 3.1 -0.13 4.07 -0.36 5.04 c -0.23 0.98 -0.6 1.64 -0.33 1.9 c 0.32 0.28 1.68 -0.4 2.46 -1.5 a 8.13 8.13 0 0 0 1.33 -4.58 c 0.07 -2.06 0.06 -5.33 0.07 -7.19 c 0 -1.7 0.03 -6.71 -0.03 -9.72 c -0.02 -0.74 -2.07 -1.51 -3.03 -1.1 Z m 82.13 14.48 a 9.42 9.42 0 0 1 -0.88 3.75 c -0.85 1.72 -2.63 2.25 -3.39 -0.22 c -0.4 -1.34 -0.43 -3.59 -0.13 -5.47 c 0.3 -1.9 1.14 -3.35 2.53 -3.22 c 1.38 0.13 2.02 1.9 1.87 5.16 Z M 96.8 28.57 c -0.02 2.67 -0.44 5.01 -1.34 5.7 c -1.29 0.96 -3 0.23 -2.65 -1.72 c 0.31 -1.72 1.8 -3.48 4 -5.64 l -0.01 1.66 Z m -0.35 -10 a 10.56 10.56 0 0 1 -0.88 3.77 c -0.85 1.72 -2.64 2.25 -3.39 -0.22 c -0.5 -1.69 -0.38 -3.87 -0.13 -5.25 c 0.33 -1.78 1.12 -3.44 2.53 -3.44 c 1.38 0 2.06 1.5 1.87 5.14 Z m -13.41 -0.02 a 9.54 9.54 0 0 1 -0.87 3.8 c -0.88 1.7 -2.63 2.24 -3.4 -0.23 c -0.55 -1.77 -0.36 -4.2 -0.13 -5.5 c 0.34 -1.95 1.2 -3.32 2.53 -3.2 c 1.38 0.14 2.04 1.9 1.87 5.13 Z m 61.45 1.81 c -0.33 0 -0.49 0.35 -0.61 0.93 c -0.44 2.02 -0.9 2.48 -1.5 2.48 c -0.66 0 -1.26 -1 -1.42 -3 c -0.12 -1.58 -0.1 -4.48 0.06 -7.37 c 0.03 -0.59 -0.14 -1.17 -1.73 -1.75 c -0.68 -0.25 -1.68 -0.62 -2.17 0.58 a 29.65 29.65 0 0 0 -2.08 7.14 c 0 0.06 -0.08 0.07 -0.1 -0.06 c -0.07 -0.87 -0.26 -2.46 -0.28 -5.79 c 0 -0.65 -0.14 -1.2 -0.86 -1.65 c -0.47 -0.3 -1.88 -0.81 -2.4 -0.2 c -0.43 0.5 -0.94 1.87 -1.47 3.48 l -0.74 2.2 l 0.01 -4.88 c 0 -0.5 -0.34 -0.67 -0.45 -0.7 a 9.54 9.54 0 0 0 -1.8 -0.37 c -0.48 0 -0.6 0.27 -0.6 0.67 c 0 0.05 -0.08 4.65 -0.08 7.87 v 0.46 c -0.27 1.48 -1.14 3.49 -2.09 3.49 s -1.4 -0.84 -1.4 -4.68 c 0 -2.24 0.07 -3.21 0.1 -4.83 c 0.02 -0.94 0.06 -1.65 0.06 -1.81 c -0.01 -0.5 -0.87 -0.75 -1.27 -0.85 c -0.4 -0.09 -0.76 -0.13 -1.03 -0.11 c -0.4 0.02 -0.67 0.27 -0.67 0.62 v 0.55 a 3.71 3.71 0 0 0 -1.83 -1.49 c -1.44 -0.43 -2.94 -0.05 -4.07 1.53 a 9.31 9.31 0 0 0 -1.66 4.73 c -0.16 1.5 -0.1 3.01 0.17 4.3 c -0.33 1.44 -0.96 2.04 -1.64 2.04 c -0.99 0 -1.7 -1.62 -1.62 -4.4 c 0.06 -1.84 0.42 -3.13 0.82 -4.99 c 0.17 -0.8 0.04 -1.2 -0.31 -1.6 c -0.32 -0.37 -1 -0.56 -1.99 -0.33 c -0.7 0.16 -1.7 0.34 -2.6 0.47 c 0 0 0.05 -0.21 0.1 -0.6 c 0.23 -2.03 -1.98 -1.87 -2.69 -1.22 c -0.42 0.39 -0.7 0.84 -0.82 1.67 c -0.17 1.3 0.9 1.91 0.9 1.91 a 22.22 22.22 0 0 1 -3.4 7.23 v -0.7 c -0.01 -3.36 0.03 -6 0.05 -6.95 c 0.02 -0.94 0.06 -1.63 0.06 -1.8 c 0 -0.36 -0.22 -0.5 -0.66 -0.67 c -0.4 -0.16 -0.86 -0.26 -1.34 -0.3 c -0.6 -0.05 -0.97 0.27 -0.96 0.65 v 0.52 a 3.7 3.7 0 0 0 -1.84 -1.49 c -1.44 -0.43 -2.94 -0.05 -4.07 1.53 a 10.1 10.1 0 0 0 -1.66 4.72 c -0.15 1.57 -0.13 2.9 0.09 4.04 c -0.23 1.13 -0.89 2.3 -1.63 2.3 c -0.95 0 -1.5 -0.83 -1.5 -4.67 c 0 -2.24 0.07 -3.21 0.1 -4.83 c 0.02 -0.94 0.06 -1.65 0.06 -1.81 c 0 -0.5 -0.87 -0.75 -1.27 -0.85 c -0.42 -0.1 -0.79 -0.13 -1.06 -0.1 c -0.37 0.02 -0.63 0.35 -0.63 0.6 v 0.56 a 3.7 3.7 0 0 0 -1.84 -1.49 c -1.44 -0.43 -2.93 -0.04 -4.07 1.53 c -0.75 1.03 -1.35 2.17 -1.66 4.7 a 15.8 15.8 0 0 0 -0.12 2.04 c -0.3 1.81 -1.61 3.9 -2.68 3.9 c -0.63 0 -1.23 -1.21 -1.23 -3.8 c 0 -3.45 0.22 -8.36 0.25 -8.83 l 1.62 -0.03 c 0.68 0 1.29 0.01 2.19 -0.04 c 0.45 -0.02 0.88 -1.64 0.42 -1.84 c -0.21 -0.09 -1.7 -0.17 -2.3 -0.18 c -0.5 -0.01 -1.88 -0.11 -1.88 -0.11 s 0.13 -3.26 0.16 -3.6 c 0.02 -0.3 -0.35 -0.44 -0.57 -0.53 a 7.77 7.77 0 0 0 -1.53 -0.44 c -0.76 -0.15 -1.1 0 -1.17 0.64 c -0.1 0.97 -0.15 3.82 -0.15 3.82 c -0.56 0 -2.47 -0.11 -3.02 -0.11 c -0.52 0 -1.08 2.22 -0.36 2.25 l 3.2 0.09 l -0.03 6.53 v 0.47 c -0.53 2.73 -2.37 4.2 -2.37 4.2 c 0.4 -1.8 -0.42 -3.15 -1.87 -4.3 c -0.54 -0.42 -1.6 -1.22 -2.79 -2.1 c 0 0 0.69 -0.68 1.3 -2.04 c 0.43 -0.96 0.45 -2.06 -0.61 -2.3 c -1.75 -0.41 -3.2 0.87 -3.63 2.25 a 2.61 2.61 0 0 0 0.5 2.66 l 0.15 0.19 c -0.4 0.76 -0.94 1.78 -1.4 2.58 c -1.27 2.2 -2.24 3.95 -2.97 3.95 c -0.58 0 -0.57 -1.77 -0.57 -3.43 c 0 -1.43 0.1 -3.58 0.19 -5.8 c 0.03 -0.74 -0.34 -1.16 -0.96 -1.54 a 4.33 4.33 0 0 0 -1.64 -0.69 c -0.7 0 -2.7 0.1 -4.6 5.57 c -0.23 0.69 -0.7 1.94 -0.7 1.94 l 0.04 -6.57 c 0 -0.16 -0.08 -0.3 -0.27 -0.4 a 4.68 4.68 0 0 0 -1.93 -0.54 c -0.36 0 -0.54 0.17 -0.54 0.5 l -0.07 10.3 c 0 0.78 0.02 1.69 0.1 2.09 c 0.08 0.4 0.2 0.72 0.36 0.91 c 0.15 0.2 0.33 0.34 0.62 0.4 c 0.28 0.06 1.78 0.25 1.86 -0.32 c 0.1 -0.69 0.1 -1.43 0.89 -4.2 c 1.22 -4.31 2.82 -6.42 3.58 -7.16 c 0.13 -0.14 0.28 -0.14 0.27 0.07 l -0.22 5.32 c -0.2 5.37 0.78 6.36 2.17 6.36 c 1.07 0 2.58 -1.06 4.2 -3.74 l 2.7 -4.5 l 1.58 1.46 c 1.28 1.2 1.7 2.36 1.42 3.45 c -0.21 0.83 -1.02 1.7 -2.44 0.86 c -0.42 -0.25 -0.6 -0.44 -1.01 -0.71 c -0.23 -0.15 -0.57 -0.2 -0.78 -0.04 c -0.53 0.4 -0.84 0.92 -1.01 1.55 c -0.17 0.61 0.45 0.94 1.09 1.22 c 0.55 0.25 1.74 0.47 2.5 0.5 c 2.94 0.1 5.3 -1.42 6.94 -5.34 c 0.3 3.38 1.55 5.3 3.72 5.3 c 1.45 0 2.91 -1.88 3.55 -3.72 c 0.18 0.75 0.45 1.4 0.8 1.96 c 1.68 2.65 4.93 2.07 6.56 -0.18 c 0.5 -0.69 0.58 -0.94 0.58 -0.94 a 3.07 3.07 0 0 0 2.94 2.87 c 1.1 0 2.23 -0.52 3.03 -2.31 c 0.09 0.2 0.2 0.38 0.3 0.56 c 1.68 2.65 4.93 2.07 6.56 -0.18 l 0.2 -0.28 l 0.05 1.4 l -1.5 1.37 c -2.52 2.3 -4.44 4.05 -4.58 6.09 c -0.18 2.6 1.93 3.56 3.53 3.69 a 4.5 4.5 0 0 0 4.04 -2.11 c 0.78 -1.15 1.3 -3.63 1.26 -6.08 l -0.06 -3.56 a 28.55 28.55 0 0 0 5.42 -9.44 s 0.93 0.01 1.92 -0.05 c 0.32 -0.02 0.41 0.04 0.35 0.27 c -0.07 0.28 -1.25 4.84 -0.17 7.88 c 0.74 2.08 2.4 2.75 3.4 2.75 c 1.15 0 2.26 -0.87 2.85 -2.17 l 0.23 0.42 c 1.68 2.65 4.92 2.07 6.56 -0.18 c 0.37 -0.5 0.58 -0.94 0.58 -0.94 c 0.36 2.2 2.07 2.88 3.05 2.88 c 1.02 0 2 -0.42 2.78 -2.28 c 0.03 0.82 0.08 1.49 0.16 1.7 c 0.05 0.13 0.34 0.3 0.56 0.37 c 0.93 0.34 1.88 0.18 2.24 0.11 c 0.24 -0.05 0.43 -0.25 0.46 -0.75 c 0.07 -1.33 0.03 -3.56 0.43 -5.21 c 0.67 -2.79 1.3 -3.87 1.6 -4.4 c 0.17 -0.3 0.36 -0.35 0.37 -0.03 c 0.01 0.64 0.04 2.52 0.3 5.05 c 0.2 1.86 0.46 2.96 0.65 3.3 c 0.57 1 1.27 1.05 1.83 1.05 c 0.36 0 1.12 -0.1 1.05 -0.73 c -0.03 -0.31 0.02 -2.22 0.7 -4.96 c 0.43 -1.79 1.15 -3.4 1.41 -4 c 0.1 -0.21 0.15 -0.04 0.15 0 c -0.06 1.22 -0.18 5.25 0.32 7.46 c 0.68 2.98 2.65 3.32 3.34 3.32 c 1.47 0 2.67 -1.12 3.07 -4.05 c 0.1 -0.7 -0.05 -1.25 -0.48 -1.25 Z"
                            fill="black"
                            fillRule="evenodd"
                          />
                        </svg>
                        <div className="flex items-center gap-3">
                          <Heart className="w-5 h-5 text-black" strokeWidth={2} />
                          <Send className="w-5 h-5 text-black" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="px-3 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
                          <span className="text-sm font-semibold text-black">turnflow_official</span>
                        </div>
                        <MoreHorizontal className="w-4 h-4 text-black" />
                      </div>

                      <div className="relative aspect-square bg-gray-100">
                        <ImageWithFallback
                          src={gummyBearsImage}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                          1/3
                        </div>
                      </div>

                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <Heart className="w-5 h-5 text-black" strokeWidth={1.5} />
                          <MessageSquare className="w-5 h-5 text-black" strokeWidth={1.5} />
                          <Send className="w-5 h-5 text-black" strokeWidth={1.5} />
                        </div>
                        <Bookmark className="w-5 h-5 text-black" strokeWidth={1.5} />
                      </div>

                      <div className="px-3 pb-1">
                        <div className="text-xs font-semibold text-black">
                          Liked by <span className="font-semibold">smart_seller</span> and <span className="font-semibold">5,891 others</span>
                        </div>
                      </div>

                      <div className="px-3 pb-3">
                        <div className="mb-2">
                          <span className="text-xs font-semibold text-black">turnflow_official</span>
                          <span className="text-xs text-black ml-1" style={{ whiteSpace: 'pre-line' }}>
                            {'💛🔥 비타민 젤리 한정 특가!\n\n오늘만 50% 할인\n"링크" 댓글시 DM 보내드려요! ✨'}
                          </span>
                        </div>

                        <button className="text-xs font-semibold text-gray-400 mb-2 hover:text-gray-600 transition-colors">
                          댓글 84개 모두 보기
                        </button>

                        <div className="space-y-2">
                          {comments.map((comment, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="flex-1">
                                <div className="text-xs">
                                  <span className="font-semibold text-black">{comment.username}</span>
                                  <span className="text-black ml-1">{comment.text}</span>
                                </div>
                              </div>
                              <Heart className="w-3 h-3 text-gray-400" />
                            </div>
                          ))}
                        </div>

                        <div className="text-xs text-gray-400 mt-2">1시간 전</div>
                      </div>

                      {stage === 1 && (
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ y: "15%" }}
                          transition={{
                            duration: 0.5,
                            ease: [0.32, 0.72, 0, 1]
                          }}
                          className="absolute inset-0 bg-white flex flex-col rounded-t-3xl shadow-2xl"
                          style={{ top: '15%' }}
                        >
                          <div className="flex justify-center pt-3 pb-2">
                            <div className="w-10 h-1 bg-gray-300 rounded-full" />
                          </div>

                          <div className="px-4 py-2.5 border-b border-gray-200 flex items-center justify-center">
                            <h3 className="text-sm font-semibold text-black">댓글</h3>
                          </div>

                          <div className="flex-1 px-4 py-3 space-y-4 overflow-y-auto">
                            {comments.map((comment, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 + (idx * 0.2) }}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-8 h-8 rounded-full flex-shrink-0 ${comment.type === 'spam' ? 'bg-gray-400' : 'bg-blue-500'
                                    }`} />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-sm font-semibold text-black truncate">{comment.username}</span>
                                      <span className="text-xs text-gray-400">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-black mb-1">{comment.text}</p>

                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3, delay: 0.5 + (idx * 0.2) }}
                                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${comment.type === 'spam'
                                          ? 'bg-red-100 text-red-700'
                                          : 'bg-emerald-100 text-emerald-700'
                                        }`}
                                    >
                                      {comment.type === 'spam' ? (
                                        <XCircle className="w-3 h-3" />
                                      ) : (
                                        <CheckCircle2 className="w-3 h-3" />
                                      )}
                                      <span>{comment.analysis}</span>
                                    </motion.div>
                                  </div>
                                  <Heart className="w-4 h-4 text-gray-400 mt-2 flex-shrink-0" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {stage === 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white flex flex-col"
                    >
                      <div className="px-3 py-2.5 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                        <div className="flex items-center gap-3">
                          <ChevronLeft className="w-6 h-6 text-black" />
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-semibold text-black">AI 분석 결과</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 relative">
                        <div className="absolute inset-0 p-4 overflow-y-auto">
                          <div className="space-y-3">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="bg-emerald-50 border border-emerald-200 rounded-xl p-3"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                <span className="text-sm font-bold text-emerald-900">오타 인식 성공</span>
                              </div>
                              <p className="text-xs text-emerald-800 leading-relaxed">
                                "정보밧기" → "정보받기"<br />
                                <span className="text-[10px] text-emerald-600">오타를 자동 교정하여 사용자 의도를 파악했습니다.</span>
                              </p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="bg-emerald-50 border border-emerald-200 rounded-xl p-3"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                <span className="text-sm font-bold text-emerald-900">의도 파악 성공</span>
                              </div>
                              <p className="text-xs text-emerald-800 leading-relaxed">
                                "보내주세요!" → 정보 요청 의도<br />
                                <span className="text-[10px] text-emerald-600">키워드가 없어도 문맥으로 의도를 분석했습니다.</span>
                              </p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="bg-red-50 border border-red-200 rounded-xl p-3"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-5 h-5 text-red-600" />
                                <span className="text-sm font-bold text-red-900">스팸 감지</span>
                              </div>
                              <p className="text-xs text-red-800 leading-relaxed">
                                "대박사이트 추천"<br />
                                <span className="text-[10px] text-red-600">홍보성 댓글로 판단하여 자동 차단했습니다.</span>
                              </p>
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="bg-emerald-600 text-white rounded-xl p-4 mt-4"
                            >
                              <div className="text-center">
                                <p className="text-sm font-bold mb-1">✓ 분석 완료</p>
                                <p className="text-xs opacity-90">2건 승인 · 1건 스팸 차단</p>
                              </div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 font-semibold text-sm mb-6">
              <Brain className="w-4 h-4" />
              핵심 기능 2
            </div>
            <h2 className="text-4xl font-bold mb-6">
              AI 문맥/의도 분석
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-10">
              오타, 다양한 표현, 키워드 누락까지<br />
              AI가 댓글의 진짜 의도를 정확하게 파악합니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">오타 자동 교정</h3>
                  <p className="text-[#6E6E6E]">
                    "정보밧기", "링크요", "받기요" 등 다양한 오타를 AI가 정확하게 인식합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">다양한 표현 이해</h3>
                  <p className="text-[#6E6E6E]">
                    "보내주세요", "궁금해요", "알려주세요" 등 키워드가 없어도 문맥으로 의도를 파악합니다
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <Filter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">스팸 정확히 구분</h3>
                  <p className="text-[#6E6E6E]">
                    댓글의 전체 문맥을 분석하여 진짜 관심 고객과 스팸을 정확히 구분합니다
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