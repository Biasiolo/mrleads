import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoHero2 from "@/assets/logomr.png";
import { useUTM } from "@/hooks/useUTM";
import { waUrlFromMessage, formatQuickMessage } from "@/utils/whatsapp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const utmHeader = useUTM();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
      ? 'backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/80'
      : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.img
            src={logoHero2}
            alt="Vire o Jogo com a VOIA"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-40 md:max-w-40"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#como-funciona" className="text-zinc-300 hover:text-white transition-colors">Como funciona</a>
          <a href="#provas" className="text-zinc-300 hover:text-white transition-colors">Casos de sucesso</a>
          <a href="#faq" className="text-zinc-300 hover:text-white transition-colors">FAQ</a>
          <a
            href={waUrlFromMessage(formatQuickMessage("Header", utmHeader))}
            target="_blank"
            rel="noopener"
            className="px-6 py-2.5 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
          >
            Diagnóstico Gratuito
          </a>
        </nav>
        <button className="lg:hidden p-2" aria-label="abrir menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
