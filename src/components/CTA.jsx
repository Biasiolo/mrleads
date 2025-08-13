// src/components/CTA.jsx
import { LeadForm, CheckIcon } from "@/components/Hero";
import bgHero from "@/assets/bg.png";

export default function CTA() {
  return (
    <section
      id="form"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                Diagnóstico gratuito
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Descubra o potencial real do seu negócio
              </h2>
              <p className="text-xl text-zinc-300">
                Análise completa da sua presença digital + plano de ação personalizado
                para os próximos 90 dias. Gratuito e sem compromisso.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg">O que você recebe:</h3>
              <div className="space-y-4">
                {[
                  "Auditoria completa da presença digital",
                  "Análise competitiva do seu segmento",
                  "Mapeamento de oportunidades de crescimento",
                  "Plano de ação prioritizado para 90 dias",
                  "Projeção de ROI e cronograma de resultados",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <p className="text-zinc-200">
                <strong className="text-orange-400">Garantia:</strong> Se não identificarmos pelo menos 3 oportunidades
                concretas de crescimento, enviaremos um brinde.
              </p>
            </div>
          </div>

          <div className="relative">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
