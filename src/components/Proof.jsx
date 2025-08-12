// src/components/Proof.jsx
export default function Proof() {
  const stats = [
    { kpi: "+347%", label: "Crescimento em leads", period: "Últimos 6 meses" },
    { kpi: "-68%", label: "Redução no CAC", period: "Média dos clientes" },
    { kpi: "+156%", label: "Aumento em conversões", period: "Comparado ao período anterior" },
    { kpi: "4.2x", label: "Retorno sobre investimento", period: "ROI médio comprovado" },
  ];

  const testimonials = [
    {
      quote:
        "Em 90 dias saímos do zero para R$ 50k em pipeline qualificado. A VOIA não vende sonho, entrega resultado.",
      author: "Ricardo Silva",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "🧑‍💼",
    },
    {
      quote:
        "Finalmente entendemos nosso funil. Leads previsíveis e conversão otimizada. Investimento que se paga sozinho.",
      author: "Dr. Marina Costa",
      position: "Diretora",
      company: "Clínica Excellence",
      avatar: "👩‍⚕️",
    },
    {
      quote:
        "Pararam de vender 'criativo bonito' e começaram a vender resultado. Nossa receita cresceu 280% em 6 meses.",
      author: "André Campos",
      position: "Sócio-fundador",
      company: "Inovare Consultoria",
      avatar: "👨‍💻",
    },
  ];

  return (
    <section id="provas" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
          Resultados comprovados
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Números que falam por si só
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Cases reais de transformação digital. Resultados podem variar, mas a metodologia é consistente.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-2xl bg-neutral-100 border border-zinc-800"
          >
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">
              {stat.kpi}
            </div>
            <div className="font-semibold text-zinc-900 mb-1">{stat.label}</div>
            <div className="text-sm text-zinc-700">{stat.period}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300"
          >
            <div className="mb-6">
              <div className="flex text-orange-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-200 leading-relaxed">"{testimonial.quote}"</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-zinc-400">
                  {testimonial.position} • {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
