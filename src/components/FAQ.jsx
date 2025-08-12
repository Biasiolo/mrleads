// src/components/FAQ.jsx
export default function FAQ() {
  const items = [
    {
      q: "Quanto tempo para ver os primeiros resultados?",
      a: "Normalmente entre 30-60 dias para primeiros indicadores e 60-90 dias para consolidação completa do funil de vendas.",
    },
    {
      q: "O que exatamente está incluso no diagnóstico gratuito?",
      a: "Auditoria completa da presença digital, análise competitiva, identificação de oportunidades e roadmap estratégico prioritizado.",
    },
    {
      q: "Vocês atendem empresas fora de São José dos Campos?",
      a: "Sim! Atendemos clientes em todo o Brasil. Nossa base em SJC facilita atendimentos presenciais na região do Vale do Paraíba.",
    },
    {
      q: "Qual o investimento médio para implementar as estratégias?",
      a: "Varia conforme o porte e objetivos. Durante o diagnóstico, apresentamos cenários personalizados com ROI projetado.",
    },
    {
      q: "Como garantem os resultados prometidos?",
      a: "Trabalhamos com KPIs claros, relatórios transparentes e acompanhamento semanal. Nosso foco é ROI mensurável, não vanity metrics.",
    },
    {
      q: "Posso cancelar o serviço quando quiser?",
      a: "Sim, nossos contratos não têm fidelidade obrigatória. Acreditamos que bons resultados mantêm clientes, não clausulas contratuais.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Dúvidas frequentes
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Tudo o que você precisa saber
          </h2>

          <div className="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 mb-6" />

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre nossa metodologia e processo de trabalho
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-3xl bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-x-8 rounded-t-3xl top-1 h-1 bg-orange-500/80" />
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/15 text-orange-600 ring-1 ring-orange-500/25">
                  ?
                </div>
              </div>

              <h3 className="font-semibold text-lg text-center text-zinc-900 mb-3">
                {item.q}
              </h3>
              <p className="text-zinc-700 leading-relaxed text-center">{item.a}</p>

              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(249,115,22,0.25), 0 8px 30px rgba(249,115,22,0.15)",
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA opcional no rodapé */}
        <div className="mt-12 text-center">
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-colors shadow-lg hover:shadow-orange-500/30"
          >
            Ainda ficou com dúvida? Fale com a gente
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
