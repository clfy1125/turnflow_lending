import { motion } from "motion/react";
import { Button } from "@/app/components/ui/Button";
import { Sparkles, CheckCircle2, Mail, User, Building2 } from "lucide-react";
import { useState } from "react";

export function SignupSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    instagram: "",
    etc: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('company', formData.company);
    form.append('instagram', formData.instagram);
    form.append('etc', formData.etc);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwa9jgHTb7vMXe22JtIxjKSXsneR2IWtmnBgCw8BmI-soP3AWAoEPdLS2SGDAlW3BskMQ/exec', {
        method: 'POST',
        body: form
      });
      alert('사전체험 신청이 접수되었습니다! 빠른 시일 내에 연락드리겠습니다.');
      // 폼 초기화
      setFormData({ name: "", email: "", company: "", instagram: "", etc: "" });
    } catch (error) {
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-section" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              런칭 알림 신청
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              출시 소식을 가장 먼저<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                받아보세요
              </span>
            </h2>

            <p className="text-lg text-[#6E6E6E] mb-10">
              Turnflow의 출시 알림과 함께<br />
              얼리버드만을 위한 특별한 혜택을 준비했습니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-black font-semibold">출시 소식 우선 알림</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-black font-semibold">얼리버드 특별 할인</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base text-black font-semibold">베타 테스터 우선 선정</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">사전체험 신청하기</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    이름 *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    이메일 *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    회사/브랜드명
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="회사명 또는 브랜드명"
                      className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    인스타그램 계정
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">@</span>
                    <input
                      type="text"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      placeholder="instagram_username"
                      className="w-full pl-10 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    기타 문의사항
                  </label>
                  <textarea
                    value={formData.etc}
                    onChange={(e) => setFormData({ ...formData, etc: e.target.value })}
                    placeholder="궁금하신 점이나 문의사항을 자유롭게 적어주세요"
                    rows={4}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-black resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white h-[56px] text-[17px] font-bold shadow-[0_12px_32px_rgba(168,85,247,0.3)] transition-all hover:shadow-[0_16px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? '제출 중...' : '사전체험 신청하기'}
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  신청하시면 빠른 시일 내에 담당자가 연락드립니다.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}