import { Button } from "@/app/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import turnflowLogo from "@/assets/1f9df3d505852d43959f12ad8be4b3aa7dcaa9c4.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "기능", href: "#features" },
    { name: "가격", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup-section');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full bg-white transition-all duration-200 h-[72px] flex items-center",
      "border-b border-[#E2E5F0]"
    )}>
      <div className="container mx-auto flex w-full max-w-[2000px] items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={turnflowLogo}
            alt="Turnflow"
            className="h-8 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#6E6E6E] hover:text-[#A855F7] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            onClick={scrollToSignup}
            className="rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white px-6 h-[46px] font-semibold text-[15px] shadow-[0_8px_24px_rgba(168,85,247,0.2)]"
          >
            사전체험 신청하기
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#6E6E6E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[72px] left-0 w-full border-b border-[#E2E5F0] bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-[#6E6E6E] hover:text-[#A855F7]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button
                  onClick={() => {
                    scrollToSignup();
                    setIsOpen(false);
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#6D28D9] text-white h-[48px] font-semibold"
                >
                  사전체험 신청하기
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}