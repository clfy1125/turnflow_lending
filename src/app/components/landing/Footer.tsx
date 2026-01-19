import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <Section className="py-[120px] bg-[#F1F2F7]">
      <div className="container mx-auto px-4 text-center max-w-[800px]">
        <h2 className="text-[36px] md:text-[48px] font-bold text-black mb-8 leading-tight">
          한 걸음 앞선 마케팅,<br />
          <span className="text-[#1A6AFF]">자동 DM</span>으로 시작하세요.
        </h2>
        <div className="flex flex-col items-center gap-4">
          <Button
            className="rounded-full bg-[#1A6AFF] hover:bg-[#1A6AFF]/90 text-white px-12 h-[60px] text-[18px] font-bold shadow-[0_12px_32px_rgba(26,106,255,0.25)] transition-transform hover:-translate-y-1"
          >
            무료로 시작하기
          </Button>
          <button className="text-[#6E6E6E] hover:text-black text-[15px] underline underline-offset-4 mt-2">
            전문가와 상담하기 (데모 요청)
          </button>
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  const termsUrl = import.meta.env.VITE_TERMS_OF_SERVICE_URL;
  const privacyUrl = import.meta.env.VITE_PRIVACY_POLICY_URL;

  // 디버깅용 (개발 중에만 사용)
  console.log('Terms URL:', termsUrl);
  console.log('Privacy URL:', privacyUrl);

  return (
    <footer className="bg-white border-t border-[#E2E5F0] py-16">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold tracking-tight text-black">
                CLFY
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-[#6E6E6E]">
              Instagram DM 자동화 SaaS.<br />
              스팸 없는 깨끗한 소통, CLFY가 만듭니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <h4 className="font-bold text-black mb-4 text-[15px]">서비스</h4>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">주요 기능</a></li>
                <li><a href="#" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">활용 사례</a></li>
                <li><a href="#" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">요금 안내</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-4 text-[15px]">지원</h4>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">API 문서</a></li>
                <li><a href="termsUrl || '#'} target=" _blank" rel="noopener noreferrer" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">이용약관</a></li>
              <li><a href={privacyUrl || '#'
            </div>

            <div>
              <h4 className="font-bold text-black mb-4 text-[15px]">정책</h4>
              <ul className="space-y-3 text-[14px]">
                <li><a href={import.meta.env.VITE_TERMS_OF_SERVICE_URL} target="_blank" rel="noopener noreferrer" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">이용약관</a></li>
                <li><a href={import.meta.env.VITE_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-[#6E6E6E] hover:text-[#1A6AFF] transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5F6F9] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#999]">
            © 2024 CLFY Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-[#F5F6F9] hover:bg-[#E2E5F0] transition-colors flex items-center justify-center text-[#999]">
              <span className="sr-only">Instagram</span>
              <div className="w-4 h-4 bg-current opacity-50 rounded-[2px]" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#F5F6F9] hover:bg-[#E2E5F0] transition-colors flex items-center justify-center text-[#999]">
              <span className="sr-only">LinkedIn</span>
              <div className="w-4 h-4 bg-current opacity-50 rounded-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
