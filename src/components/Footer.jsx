// src/components/Footer.jsx
import logoFooter from "@/assets/logomr.png"; // use o arquivo que preferir (ex.: logo-header.png)
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://voiaagency.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center group"
                aria-label="VOIA Agency - ir para voiaagency.com.br"
              >
                <img
                  src={logoFooter}
                  alt="VOIA Agency"
                  className="h-8 md:h-10 w-auto transition-opacity group-hover:opacity-90"
                />
              </a>
            </div>

            <p className="text-zinc-300 mb-6 max-w-md">
              Transformamos negócios através de estratégia digital integrada.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/voiaagency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da VOIA Agency"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
                title="@voiaagency no Instagram"
              >
                <FaInstagram className="w-5 h-5 text-zinc-200" />
              </a>

              <a
                href="https://br.linkedin.com/company/voiaagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da VOIA Agency"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
                title="VOIA Agency no LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-zinc-200" />
              </a>

              <a
                href="https://www.facebook.com/agencyvoia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da VOIA Agency"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all"
                title="VOIA Agency no Facebook"
              >
                <FaFacebook className="w-5 h-5 text-zinc-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Diagnóstico Digital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tráfego Pago</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing de Conteúdo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design & UX</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>contato@voiaagency.com.br</p>
              <p>(12) 99781-9311</p>
              <p className="leading-relaxed">
                Rua Síria, 71 – Salas 44 e 45<br />
                Jardim Oswaldo Cruz<br />
                São José dos Campos, SP
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-orange-500">
          <p>© {new Date().getFullYear()} Mr.Leads. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
