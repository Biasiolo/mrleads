import { useEffect, useMemo, useState } from "react";

// FORM_ENDPOINT - Configure com sua API de captura de leads
const FORM_ENDPOINT = "https://api.example.com/leads"; // Substitua pela sua URL

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Proof />
      <CTA />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/80' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-bold text-xl tracking-tight">VOIA Agency</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#como-funciona" className="text-zinc-300 hover:text-white transition-colors">Como funciona</a>
          <a href="#provas" className="text-zinc-300 hover:text-white transition-colors">Casos de sucesso</a>
          <a href="#faq" className="text-zinc-300 hover:text-white transition-colors">FAQ</a>
          <a href="#form" className="px-6 py-2.5 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-all duration-200 shadow-lg hover:shadow-orange-500/25">
            Diagnóstico Gratuito
          </a>
        </nav>
        <button className="lg:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#F97316"/>
        <path d="M7 14l3.2-3.2 2.4 2.4L17 9" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-zinc-950 to-zinc-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 py-24">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Diagnóstico gratuito disponível
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Vire o Jogo com a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                VOIA
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
              Estratégia digital integrada que transforma resultados: tráfego pago, 
              conteúdo estratégico e funis de alta conversão trabalhando em sinergia 
              para acelerar o crescimento do seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <CheckIcon />
                <span className="text-zinc-300">ROI comprovado</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <CheckIcon />
                <span className="text-zinc-300">Leads qualificados</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <CheckIcon />
                <span className="text-zinc-300">Crescimento previsível</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#form" className="group px-8 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-all duration-200 shadow-lg hover:shadow-orange-500/25 text-center">
              <span className="flex items-center justify-center gap-2">
                Quero meu diagnóstico gratuito
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#provas" className="px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 transition-all duration-200 text-center hover:bg-zinc-900/50">
              Ver casos de sucesso
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function ArrowRight({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function TrustBar() {
  const metrics = [
    { value: "98%", label: "Taxa de satisfação", desc: "Clientes satisfeitos" },
    { value: "210%", label: "Crescimento médio", desc: "Em alcance digital" },
    { value: "60%", label: "Redução CAC", desc: "Custo de aquisição" },
    { value: "24h", label: "Resposta", desc: "Tempo médio de retorno" }
  ];

  return (
    <section className="border-y border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">{metric.value}</div>
              <div className="font-semibold text-white mb-1">{metric.label}</div>
              <div className="text-sm text-zinc-400">{metric.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24" id="problema">
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
              { icon: "📉", title: "Vendas imprevisíveis", desc: "Dependência total de indicações e networking, sem fluxo constante de leads qualificados" },
              { icon: "👻", title: "Invisibilidade digital", desc: "Concorrentes dominam o Google e redes sociais enquanto você fica invisível online" },
              { icon: "💸", title: "Desperdício de verba", desc: "Investimento em mídia sem estratégia clara, sem ROI mensurável ou previsibilidade" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <p className="text-zinc-300">
              <strong className="text-white">A realidade:</strong> Empresas que não investem em presença digital estratégica 
              perdem até 70% das oportunidades de mercado para concorrentes mais visíveis.
            </p>
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
            <p className="mt-4 text-xs text-zinc-500">*Dados ilustrativos baseados em análises de mercado</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const pillars = [
    {

      title: "Estratégia & Estrutura",
      desc: "Diagnóstico completo, posicionamento estratégico e criação de assets digitais otimizados para conversão",
      features: ["Análise competitiva", "Persona & ICP", "Brand guidelines", "Website otimizado"]
    },
    {

      title: "Atração & Tráfego",
      desc: "Campanhas segmentadas e conteúdo estratégico para atrair seu cliente ideal no momento certo",
      features: ["Google Ads", "Meta Ads", "SEO", "Content Marketing"]
    },
    {

      title: "Conversão & Vendas", 
      desc: "Funis otimizados, landing pages de alta performance e automações que transformam visitantes em clientes",
      features: ["Landing pages", "Email marketing", "Automações", "CRM integrado"]
    },
    {

      title: "Crescimento & Escala",
      desc: "Análise de dados, otimização contínua e estratégias de retenção para crescimento sustentável",
      features: ["Analytics avançado", "A/B Testing", "Remarketing", "Customer Success"]
    }
  ];

  return (
    <section id="como-funciona" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
          Nossa metodologia
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Como transformamos seu negócio digital
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Metodologia proprietária com 4 pilares integrados para resultados mensuráveis e crescimento previsível
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="group relative">
            <div className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-zinc-300 mb-6">{pillar.desc}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {pillar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Proof() {
  const stats = [
    { kpi: "+347%", label: "Crescimento em leads", period: "Últimos 6 meses" },
    { kpi: "-68%", label: "Redução no CAC", period: "Média dos clientes" },
    { kpi: "+156%", label: "Aumento em conversões", period: "Comparado ao período anterior" },
    { kpi: "4.2x", label: "Retorno sobre investimento", period: "ROI médio comprovado" }
  ];

  const testimonials = [
    {
      quote: "Em 90 dias saímos do zero para R$ 50k em pipeline qualificado. A VOIA não vende sonho, entrega resultado.",
      author: "Ricardo Silva",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "🧑‍💼"
    },
    {
      quote: "Finalmente entendemos nosso funil. Leads previsíveis e conversão otimizada. Investimento que se paga sozinho.",
      author: "Dr. Marina Costa", 
      position: "Diretora",
      company: "Clínica Excellence",
      avatar: "👩‍⚕️"
    },
    {
      quote: "Pararam de vender 'criativo bonito' e começaram a vender resultado. Nossa receita cresceu 280% em 6 meses.",
      author: "André Campos",
      position: "Sócio-fundador", 
      company: "Inovare Consultoria",
      avatar: "👨‍💻"
    }
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
          <div key={index} className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">{stat.kpi}</div>
            <div className="font-semibold text-white mb-1">{stat.label}</div>
            <div className="text-sm text-zinc-400">{stat.period}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
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
                <div className="text-sm text-zinc-400">{testimonial.position} • {testimonial.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24" id="form">
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
                "Projeção de ROI e cronograma de resultados"
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
              concretas de crescimento, devolvemos seu tempo investido.
            </p>
          </div>
        </div>

        <div className="relative">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const utm = useUTM();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Validação básica
    if (!data.nome || !data.email || !data.whatsapp) {
      setStatus({ state: "error", message: "Por favor, preencha todos os campos obrigatórios." });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setStatus({ state: "error", message: "Por favor, insira um e-mail válido." });
      return;
    }

    setStatus({ state: "loading", message: "Enviando..." });
    
    try {
      const payload = {
        ...data,
        ...utm,
        origem: 'LP Vire o Jogo - Versão Profissional',
        timestamp: new Date().toISOString()
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Erro na solicitação');
      
      setStatus({ 
        state: "success", 
        message: "Perfeito! Recebemos seus dados e entraremos em contato em até 2 horas úteis." 
      });
      form.reset();
    } catch (err) {
      setStatus({ 
        state: "error", 
        message: "Ops! Algo deu errado. Tente novamente ou entre em contato via WhatsApp." 
      });
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl blur-xl" />
      <form onSubmit={handleSubmit} className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-8 shadow-2xl">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Solicite seu diagnóstico gratuito</h3>
          <p className="text-zinc-400 text-sm">Preencha os dados abaixo e nossa equipe entrará em contato</p>
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button 
            type="submit"
            disabled={status.state === 'loading'} 
            className="flex-1 sm:flex-initial px-8 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/25"
          >
            {status.state === 'loading' ? 'Enviando...' : 'Solicitar diagnóstico gratuito'}
          </button>
          
          {status.state !== 'idle' && (
            <p className={`text-sm ${
              status.state === 'success' ? 'text-green-400' : 
              status.state === 'error' ? 'text-red-400' : 'text-zinc-400'
            }`}>
              {status.message}
            </p>
          )}
        </div>

        {/* UTM Hidden Fields */}
        <input type="hidden" name="utm_source" value={utm.utm_source || ''} />
        <input type="hidden" name="utm_medium" value={utm.utm_medium || ''} />
        <input type="hidden" name="utm_campaign" value={utm.utm_campaign || ''} />
        <input type="hidden" name="utm_term" value={utm.utm_term || ''} />
        <input type="hidden" name="utm_content" value={utm.utm_content || ''} />
      </form>
    </div>
  );
}

function Input({ label, name, type = 'text', placeholder, required = false }) {
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

function useUTM() {
  const [params, setParams] = useState({});
  
  useEffect(() => {
    const usp = new URLSearchParams(window.location.search);
    const all = Object.fromEntries(usp.entries());
    setParams(all);
  }, []);
  
  return useMemo(() => ({
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    utm_term: params.utm_term,
    utm_content: params.utm_content,
  }), [params]);
}

function FAQ() {
  const items = [
    {
      q: 'Quanto tempo para ver os primeiros resultados?',
      a: 'Normalmente entre 30-60 dias para primeiros indicadores e 60-90 dias para consolidação completa do funil de vendas.'
    },
    {
      q: 'O que exatamente está incluso no diagnóstico gratuito?',
      a: 'Auditoria completa da presença digital, análise competitiva, identificação de oportunidades e roadmap estratégico prioritizado.'
    },
    {
      q: 'Vocês atendem empresas fora de São José dos Campos?',
      a: 'Sim! Atendemos clientes em todo o Brasil. Nossa base em SJC facilita atendimentos presenciais na região do Vale do Paraíba.'
    },
    {
      q: 'Qual o investimento médio para implementar as estratégias?',
      a: 'Varia conforme o porte e objetivos. Durante o diagnóstico, apresentamos cenários personalizados com ROI projetado.'
    },
    {
      q: 'Como garantem os resultados prometidos?',
      a: 'Trabalhamos com KPIs claros, relatórios transparentes e acompanhamento semanal. Nosso foco é ROI mensurável, não vanity metrics.'
    },
    {
      q: 'Posso cancelar o serviço quando quiser?',
      a: 'Sim, nossos contratos não têm fidelidade obrigatória. Acreditamos que bons resultados mantêm clientes, não clausulas contratuais.'
    }
  ];

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
          Dúvidas frequentes
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Tudo o que você precisa saber
        </h2>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Respostas para as principais dúvidas sobre nossa metodologia e processo de trabalho
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
            <h3 className="font-semibold text-lg text-white mb-4">{item.q}</h3>
            <p className="text-zinc-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoMark />
              <span className="font-bold text-xl tracking-tight">VOIA Agency</span>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              Transformamos negócios através de estratégia digital integrada. 
              Onde o querer é o ponto de partida para o crescimento sustentável.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all">
                📧
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all">
                📱
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500/20 border border-zinc-700 hover:border-orange-500/30 flex items-center justify-center transition-all">
                🔗
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

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} VOIA Agency. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
      <a 
        href="#form" 
        className="block text-center w-full px-6 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold shadow-2xl hover:bg-orange-400 transition-all duration-200"
      >
        🚀 Quero meu diagnóstico gratuito
      </a>
    </div>
  );
}