import { Mail, MapPin, Phone } from "lucide-react";
import turnflowLogo from "@/assets/white_logo.png";

export function SimpleFooter() {
  const termsUrl = import.meta.env.VITE_TERMS_OF_SERVICE_URL;
  const privacyUrl = import.meta.env.VITE_PRIVACY_POLICY_URL;

  console.log('Terms URL:', termsUrl);
  console.log('Privacy URL:', privacyUrl);

  return (
    <footer className="bg-[#1C1C28] text-white py-16">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="mb-12">
          {/* Brand */}
          <div className="mb-8">
            <div className="mb-4">
              <img src={turnflowLogo} alt="Turnflow" className="h-8" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI 기반 인스타그램 댓글 분석 및 자동 DM 발송 솔루션
            </p>
          </div>

          {/* Legal Links - 가로 배치 */}
          <div className="flex flex-wrap gap-6">
            <a href={termsUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
              이용약관
            </a>
            <span className="text-gray-600">|</span>
            <a href={privacyUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
              개인정보처리방침
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-500">
            © 2026 Turnflow. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}