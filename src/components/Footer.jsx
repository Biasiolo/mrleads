// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-bold text-xl tracking-tight">VOIA Agency</span>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              Transformamos negócios através de estratégia digital integrada.
              Onde o querer é o ponto de partida para o crescimento sustentável.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
              >
                📧
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
              >
                📱
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
              >
                🔗
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diagnóstico Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marketing de Conteúdo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design & UX
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>contato@voiaagency.com.br</p>
              <p>(12) 99781-9311</p>
              <p className="leading-relaxed">
                Rua Síria, 71 – Salas 44 e 45
                <br />
                Jardim Oswaldo Cruz
                <br />
                São José dos Campos, SP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-orange-500">
          <p>© {new Date().getFullYear()} VOIA Agency. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
