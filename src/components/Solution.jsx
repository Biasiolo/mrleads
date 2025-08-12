// src/components/Solution.jsx
import video1 from "@/assets/video1.mp4";

export default function Solution() {
  const pillars = [
    {
      title: "Estratégia & Estrutura",
      desc: "Diagnóstico completo, posicionamento estratégico e criação de assets digitais otimizados para conversão",
      features: [
        "Análise competitiva",
        "Persona & ICP",
        "Brand guidelines",
        "Website otimizado",
      ],
    },
    {
      title: "Atração & Tráfego",
      desc: "Campanhas segmentadas e conteúdo estratégico para atrair seu cliente ideal no momento certo",
      features: ["Google Ads", "Meta Ads", "SEO", "Content Marketing"],
    },
    {
      title: "Conversão & Vendas",
      desc: "Funis otimizados, landing pages de alta performance e automações que transformam visitantes em clientes",
      features: ["Landing pages", "Email marketing", "Automações", "CRM integrado"],
    },
    {
      title: "Crescimento & Escala",
      desc: "Análise de dados, otimização contínua e estratégias de retenção para crescimento sustentável",
      features: ["Analytics avançado", "A/B Testing", "Remarketing", "Customer Success"],
    },
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Nossa metodologia
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Como transformamos seu negócio digital
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Metodologia proprietária com 4 pilares integrados para resultados
            mensuráveis e crescimento previsível
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative">
              <div className="h-full p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-zinc-300 mb-6">{pillar.desc}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {pillar.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
