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
                desc: "Apenas 70% das empresas brasileiras comercializam produtos ou serviços pela internet, deixando uma grande parte do mercado sem acesso aos seus produtos.",
              },
              {
                icon: "👻",
                title: "Invisibilidade digital",
                desc: "Somente 53% das empresas possuem um website próprio, o que limita sua visibilidade online e competitividade no mercado.",
              },
              {
                icon: "💸",
                title: "Desperdício de verba",
                desc: "Muitos negócios não possuem uma estratégia clara, resultando em retorno sobre investimento (ROI) insatisfatório.",
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
            {/* Substituindo a imagem por um gráfico de impacto */}
            <img
              alt="Gráfico de performance digital"
              className="w-full rounded-2xl border border-zinc-700 mb-4"
              src="https://cdn.discordapp.com/attachments/1360257186001064188/1404838840534831225/descending-graph-written-black-board.jpg?ex=689ca5a0&is=689b5420&hm=f288fed1aa23b053598695da97e89d323a981c542b545e0f9657ddf9d463fec0&"
            />
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white mb-4">Empresas sem Agência de Marketing</h3>

              <div className="flex justify-between items-center text-sm">
                <span className="text-orange-500 font-bold">Visibilidade online</span>
                <span className="text-red-400 font-semibold">57%</span>
              </div>
              <p className="text-zinc-300 text-xs">
                Aproximadamente 57% das empresas brasileiras não possuem uma presença digital significativa.
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-orange-500 font-bold">Geração de leads</span>
                <span className="text-red-400 font-semibold">61%</span>
              </div>
              <p className="text-zinc-300 text-xs">
                61% das empresas que investem de forma estruturada em marketing digital geram leads qualificados.
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-orange-500 font-bold">ROI em mídia paga</span>
                <span className="text-red-400 font-semibold">72%</span>
              </div>
              <p className="text-zinc-300 text-xs">
                72% das empresas que utilizam plataformas como Facebook Ads e Instagram Ads conseguem gerar um ROI positivo.
              </p>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              *Dados reais baseados em análises de mercado de 2023.
            </p>
          </div>
        </div>

      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-t from-orange-400/10 to-orange-500/10 border border-orange-500/20 w-full my-20">
        <p className="text-zinc-300">
          <strong className="text-white">A realidade:</strong> Empresas que não
          investem em presença digital estratégica perdem até 70% das
          oportunidades de mercado para concorrentes mais visíveis.
        </p>
      </div>
    </section>
  );
}
