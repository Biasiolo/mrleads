// src/components/Problem.jsx
export default function Problem() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20" id="problema">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
              O cenário atual
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Seu negócio está perdendo oportunidades todos os dias
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: "📉",
                title: "Vendas imprevisíveis",
                desc: "Dependência total de indicações e networking, sem fluxo constante de leads qualificados",
              },
              {
                icon: "👻",
                title: "Invisibilidade digital",
                desc: "Concorrentes dominam o Google e redes sociais enquanto você fica invisível online",
              },
              {
                icon: "💸",
                title: "Desperdício de verba",
                desc: "Investimento em mídia sem estratégia clara, sem ROI mensurável ou previsibilidade",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/40 p-8">
            <img
              alt="Análise de performance digital"
              className="w-full rounded-2xl border border-zinc-700 mb-4"
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop"
            />
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Visibilidade online</span>
                <span className="text-red-400 font-semibold">23%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Geração de leads</span>
                <span className="text-red-400 font-semibold">31%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">ROI em mídia paga</span>
                <span className="text-red-400 font-semibold">-15%</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              *Dados ilustrativos baseados em análises de mercado
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 w-full my-20">
        <p className="text-zinc-300">
          <strong className="text-white">A realidade:</strong> Empresas que não
          investem em presença digital estratégica perdem até 70% das
          oportunidades de mercado para concorrentes mais visíveis.
        </p>
      </div>
    </section>
  );
}
