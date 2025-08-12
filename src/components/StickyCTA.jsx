// src/components/StickyCTA.jsx
import { useUTM } from "@/hooks/useUTM";
import { waUrlFromMessage, formatQuickMessage } from "@/utils/whatsapp";

export default function StickyCTA() {
  const utmSticky = useUTM();

  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
      <a
        href={waUrlFromMessage(formatQuickMessage("StickyCTA (mobile)", utmSticky))}
        target="_blank"
        rel="noopener"
        className="block text-center w-full px-6 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold shadow-2xl hover:bg-orange-400 transition-all duration-200"
      >
        🚀 Quero meu diagnóstico gratuito
      </a>
    </div>
  );
}
