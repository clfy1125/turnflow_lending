import { MessageCircle, HelpCircle, ArrowUp, X, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function FloatingChat() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 챗봇 초기 메시지
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{
        text: "안녕하세요! Turnflow 챗봇입니다. 궁금하신 점을 물어보세요! 😊",
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [isChatOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // 사용자 메시지 추가
    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // 봇 응답 (간단한 키워드 기반)
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      setMessages(prev => [...prev, {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }]);
    }, 500);
  };

  const getBotResponse = (input: string): string => {
    if (input.includes("가격") || input.includes("요금") || input.includes("비용")) {
      return "Turnflow는 Starter(무료), Pro($19.99/월), Enterprise(문의) 세 가지 요금제를 제공합니다. 자세한 내용은 가격 섹션에서 확인하실 수 있습니다!";
    } else if (input.includes("기능") || input.includes("뭐") || input.includes("무엇")) {
      return "Turnflow는 AI 기반 댓글 분석, 스팸/악플 자동 필터링, 맞춤형 DM 자동 발송, 실시간 성과 분석 등의 기능을 제공합니다!";
    } else if (input.includes("출시") || input.includes("언제") || input.includes("시작")) {
      return "Turnflow는 곧 출시 예정입니다! 사전체험 신청을 하시면 출시 소식과 얼리버드 혜택을 가장 먼저 받아보실 수 있습니다.";
    } else if (input.includes("ai") || input.includes("인공지능")) {
      return "Turnflow는 LLM 기반 AI를 활용하여 오타나 키워드 누락 댓글도 정확하게 의도를 파악하고, 릴스/게시물 내용을 분석해 자연스러운 맞춤형 DM을 자동으로 작성합니다!";
    } else if (input.includes("dm") || input.includes("디엠") || input.includes("메시지")) {
      return "키워드가 감지된 댓글에 자동으로 DM을 발송하며, AI가 게시물 내용을 분석하여 자연스럽고 맞춤형 메시지를 생성합니다!";
    } else if (input.includes("스팸") || input.includes("악플") || input.includes("필터")) {
      return "AI가 댓글의 문맥, 키워드, 패턴을 분석하여 스팸과 악플을 자동으로 필터링합니다. 필요 없는 댓글에 DM을 보내는 비용을 절감할 수 있습니다!";
    } else if (input.includes("신청") || input.includes("체험") || input.includes("베타")) {
      return "페이지 하단의 사전체험 신청 섹션에서 이름, 이메일, 인스타그램 계정을 입력하시면 됩니다. 얼리버드 특별 혜택도 준비되어 있습니다!";
    } else if (input.includes("안녕") || input.includes("hi") || input.includes("hello")) {
      return "안녕하세요! Turnflow에 관심 가져주셔서 감사합니다. 궁금하신 점이 있으시면 편하게 물어보세요!";
    } else {
      return "죄송합니다, 정확히 이해하지 못했습니다. '가격', '기능', '출시일', 'AI', 'DM', '스팸 필터', '사전신청' 등에 대해 질문해주세요!";
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-center">
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-white border border-[#E2E5F0] text-[#6E6E6E] rounded-full shadow-md flex items-center justify-center hover:bg-[#F5F6F9] transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsChatOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white rounded-full shadow-[0_8px_24px_rgba(168,85,247,0.3)] flex items-center justify-center hover:scale-105 transition-transform hover:shadow-[0_12px_32px_rgba(168,85,247,0.4)]"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-32 right-8 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Turnflow 챗봇</h3>
                  <p className="text-xs text-white/80">무엇이든 물어보세요!</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    msg.isBot 
                      ? 'bg-white text-black shadow-sm' 
                      : 'bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.isBot ? 'text-gray-400' : 'text-white/70'}`}>
                      {msg.timestamp.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-purple-500 text-sm text-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}