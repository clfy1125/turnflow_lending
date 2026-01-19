import { Navbar } from "@/app/components/landing/Navbar";
import { NewHero } from "@/app/components/landing/NewHero";
import { FeatureShowcase } from "@/app/components/landing/FeatureShowcase";
import { KeywordDetectionSection } from "@/app/components/landing/KeywordDetectionSection";
import { AIContextSection } from "@/app/components/landing/AIContextSection";
import { SpamFilterSection } from "@/app/components/landing/SpamFilterSection";
import { AIContentAnalysisSection } from "@/app/components/landing/AIContentAnalysisSection";
import { AnalyticsDashboardSection } from "@/app/components/landing/AnalyticsDashboardSection";
import { Pricing } from "@/app/components/landing/Pricing";
import { FAQ } from "@/app/components/landing/FAQ";
import { PartnersSection } from "@/app/components/landing/PartnersSection";
import { SignupSection } from "@/app/components/landing/SignupSection";
import { SimpleFooter } from "@/app/components/landing/SimpleFooter";
import { FloatingChat } from "@/app/components/landing/FloatingChat";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#111] selection:bg-[#1A6AFF]/20 selection:text-[#1A6AFF]">
      <Navbar />
      <main>
        <NewHero />
        {/* 핵심 기능 타이틀 섹션 */}
        <FeatureShowcase />
        {/* 핵심 기능 1: 키워드 감지 & 자동 DM 발송 */}
        <KeywordDetectionSection />
        {/* 핵심 기능 2: AI 문맥/의도 분석 */}
        <AIContextSection />
        {/* 핵심 기능 3: 스팸/악플 자동 필터링 */}
        <SpamFilterSection />
        {/* 핵심 기능 4: 릴스 내용 이해 & 맞춤형 DM 자동 작성 */}
        <AIContentAnalysisSection />
        {/* 핵심 기능 5: 실시간 성과 분석 */}
        <AnalyticsDashboardSection />
        <PartnersSection />
        <Pricing />
        <FAQ />
        {/* 사전체험 신청 섹션 */}
        <SignupSection />
      </main>
      <SimpleFooter />
      <FloatingChat />
    </div>
  );
}