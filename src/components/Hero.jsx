// src/components/Hero.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import logoHero from "@/assets/logomr.png";

import video1 from "@/assets/video1.webm";
import { useUTM } from "@/hooks/useUTM";
import {
  formatQuickMessage,
  formatLeadMessage,
} from "@/utils/whatsapp";

// Número fixo do WhatsApp
const WHATSAPP_PHONE = "5511985888874";
const waUrl = (message) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export default function Hero() {
  const utmHero = useUTM();

  return (
    <section className="relative overflow-hidden bg-cover bg-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">
        {/* Coluna Esquerda */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.img
            src={logoHero}
            alt="Vire o Jogo com a VOIA"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [2, 0, 2, 2],
            }}
            transition={{
              opacity: { delay: 0.2, duration: 0.6 },
              rotate: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="max-w-xs md:max-w-sm my-20"
          />

          <motion.p
            className="mt-4 text-zinc-300 text-lg max-w-prose"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Estratégia integrada para transformar resultados: tráfego pago, conteúdo,
            design e funis de conversão trabalhando juntos para mudar o placar do seu
            negócio em São José dos Campos.
          </motion.p>

          <motion.ul
            className="mt-6 space-y-2 text-sm text-zinc-300"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.6, staggerChildren: 0.2 },
              },
            }}
          >
            {[
              "• Diagnóstico gratuito e plano personalizado",
              "• Campanhas locais com segmentação precisa",
              "• Previsibilidade: leads constantes e CAC otimizado",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex gap-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href={waUrl(formatQuickMessage("Hero", utmHero))}
              target="_blank"
              rel="noopener"
              className="px-5 py-3 rounded-2xl bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#provas"
              className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition"
            >
              Ver provas
            </a>
          </motion.div>
        </motion.div>

        {/* Coluna Direita */}
        <motion.div
          className="relative mt-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}

export function LeadForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const utm = useUTM();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot
    if (data.company_website) return;

    // validação básica
    if (!data.nome || !data.email || !data.whatsapp) {
      setStatus({ state: "error", message: "Por favor, preencha nome, e-mail e WhatsApp." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(data.email).trim())) {
      setStatus({ state: "error", message: "Por favor, insira um e-mail válido." });
      return;
    }

    setStatus({ state: "loading", message: "Abrindo WhatsApp..." });

    try {
      const payload = {
        ...data,
        ...utm,
        origem: "LP Vire o Jogo - Formulário",
        page: window.location.href,
        userAgent: navigator.userAgent,
        consentLGPD: !!data.lgpd,
        timestamp: new Date().toISOString(),
      };

      // Removido: envio para webhook/Make
      // Abrir WhatsApp no número fixo com a mensagem formatada
      const message = formatLeadMessage(payload);
      const url = waUrl(message);

      const win = window.open(url, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = url;
      }

      setStatus({
        state: "success",
        message:
          "Perfeito. Vamos continuar pelo WhatsApp. Se a janela não abriu, clique no botão novamente.",
      });
      form.reset();
    } catch {
      setStatus({
        state: "error",
        message:
          "Não foi possível abrir o WhatsApp. Verifique bloqueio de pop-ups ou tente novamente.",
      });
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-xl" />
      <form
        onSubmit={handleSubmit}
        className="relative rounded-3xl border border-zinc-800 bg-neutral-800/80 backdrop-blur-lg p-8 shadow-2xl"
      >
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Solicite seu diagnóstico gratuito</h3>
          <p className="text-zinc-300 text-sm">
            Preencha os dados abaixo e nossa equipe entrará em contato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input name="nome" label="Nome completo *" placeholder="Seu nome completo" required />
          <Input name="empresa" label="Empresa *" placeholder="Nome da sua empresa" required />
          <Input type="email" name="email" label="E-mail profissional *" placeholder="voce@suaempresa.com" required />
          <Input name="whatsapp" label="WhatsApp *" placeholder="(12) 99999-9999" required />
          <Input name="segmento" label="Segmento" placeholder="Ex: Clínica, consultoria, e-commerce" />
          <Input name="faturamento" label="Faturamento mensal" placeholder="Ex: R$ 50k - R$ 100k" />
        </div>

        <div className="mb-6">
          <Label>Website atual (se houver)</Label>
          <input
            name="website"
            type="url"
            placeholder="https://suaempresa.com"
            className="mt-1 w-full rounded-xl bg-zinc-950/50 border border-zinc-700 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 transition-all"
          />
        </div>

        <div className="mb-6">
          <Label>Principal desafio atual</Label>
          <textarea
            name="desafio"
            rows={3}
            className="mt-1 w-full rounded-xl bg-zinc-950/50 border border-zinc-700 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 transition-all resize-none"
            placeholder="Ex: Gerar leads qualificados, melhorar ROI das campanhas, aumentar vendas online..."
          />
        </div>

        {/* LGPD */}
        <div className="mb-6 flex items-start gap-3 text-xs text-zinc-400">
          <input
            id="lgpd"
            name="lgpd"
            type="checkbox"
            required
            className="mt-1 w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-orange-500 focus:ring-orange-500/40"
          />
          <label htmlFor="lgpd" className="leading-relaxed">
            Concordo em receber contato da VOIA Agency para apresentação do diagnóstico
            e entendo que meus dados serão tratados conforme nossa política de privacidade. *
          </label>
        </div>

        {/* Honeypot invisível (anti-spam) */}
        <input
          type="text"
          name="company_website"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="submit"
            disabled={status.state === "loading"}
            className="flex-1 cursor-pointer sm:flex-initial px-8 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/25"
          >
            {status.state === "loading" ? "Abrindo WhatsApp..." : "Solicitar diagnóstico gratuito"}
          </button>

          {status.state !== "idle" && (
            <p
              className={`text-sm ${
                status.state === "success"
                  ? "text-green-400"
                  : status.state === "error"
                  ? "text-red-400"
                  : "text-zinc-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>

        {/* UTM Hidden Fields */}
        <input type="hidden" name="utm_source" value={utm.utm_source || ""} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium || ""} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ""} />
        <input type="hidden" name="utm_term" value={utm.utm_term || ""} />
        <input type="hidden" name="utm_content" value={utm.utm_content || ""} />
      </form>
    </div>
  );
}

export function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

/* Helpers locais do formulário */
function Input({ label, name, type = "text", placeholder, required = false }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-xl bg-zinc-950/50 border border-zinc-700 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/40 transition-all"
      />
    </div>
  );
}

function Label({ children }) {
  return <label className="block text-xs font-medium text-zinc-400 mb-1">{children}</label>;
}
