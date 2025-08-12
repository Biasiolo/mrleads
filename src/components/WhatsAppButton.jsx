// src/components/WhatsAppButton.jsx
import { motion } from "framer-motion";
import { ImWhatsapp } from "react-icons/im";
import { waUrlFromMessage, formatQuickMessage } from "@/utils/whatsapp";
import { useUTM } from "@/hooks/useUTM";

export default function WhatsAppButton() {
  const utm = useUTM();

  return (
    <motion.a
      href={waUrlFromMessage(formatQuickMessage("Floating WhatsApp", utm))}
      target="_blank"
      rel="noopener"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 shadow-lg hover:bg-green-400 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Ícone do WhatsApp usando React Icons */}
      <ImWhatsapp className="text-white w-8 h-8" /> {/* Ícone com cor branca */}
    </motion.a>
  );
}
