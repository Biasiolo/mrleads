// src/components/Proof.jsx
import { motion, useReducedMotion } from "framer-motion";
import { FaChartLine, FaHandshake, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function Proof() {
  const prefersReduced = useReducedMotion();

  const stats = [
    { Icon: FaChartLine, label: "Mais visibilidade no Google", period: "Clientes encontrando você todos os dias" },
    { Icon: FaHandshake, label: "Mais clientes qualificados", period: "Conectando empresas e oportunidades" },
    { Icon: FaShieldAlt, label: "Mais credibilidade online", period: "Presença profissional que gera confiança" },
    { Icon: FaRocket, label: "Mais vendas e resultados", period: "Estratégia para crescimento contínuo" },
  ];

  const testimonials = [
    {
      quote:
        "Escolher a Mr.Leads foi um divisor de águas para o meu negócio. A equipe entendeu minha visão, trouxe soluções criativas e entregou tudo com excelência. Foi mais do que contratar uma agência, foi encontrar um parceiro estratégico que realmente se importa com o resultado.",
      author: "José Alberto Oliveira",
      avatar: "🧑‍💼",
    },
    {
      quote:
        "Mr.Leads superou minhas expectativas com profissionalismo, criatividade e um olhar estratégico que realmente faz a diferença. Desde o primeiro contato, senti segurança e clareza em cada etapa do processo. Gratidão por entregarem mais do que serviços, entregam valor, identidade e resultado.",
      author: "Traluz",
      avatar: "💡",
    },
    {
      quote:
        "Tive uma das melhores experiências no ramo de marketing com a Mr.Leads. Desde o primeiro contato, a equipe se mostrou extremamente atenciosa, prestativa e comprometida com os melhores resultados. A dedicação e o profissionalismo deles fazem toda a diferença.",
      author: "Lais Marques",
      avatar: "⭐",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const float = prefersReduced ? {} : { y: [0, -2, 0], transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } };

  return (
    <motion.section
      id="provas"
      className="max-w-7xl mx-auto px-4 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header */}
      <motion.div className="text-center mb-16" variants={container}>
        <motion.div
          className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4"
          variants={item}
        >
          Resultados comprovados
        </motion.div>

        <motion.h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" variants={item}>
          Histórias de quem confiou e cresceu com a Voia
        </motion.h2>

        <motion.p className="text-xl text-zinc-300 max-w-3xl mx-auto" variants={item}>
          Depoimentos reais e conquistas alcançadas com nossa metodologia.
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map(({ Icon, label, period }, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="text-center p-6 rounded-2xl bg-neutral-100 border border-zinc-200 shadow-sm"
          >
            <motion.div
              className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 ring-1 ring-orange-500/20 text-orange-500"
              animate={float}
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" />
            </motion.div>
            <div className="font-semibold text-zinc-900 mb-1">{label}</div>
            <div className="text-sm text-zinc-700">{period}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((t, i) => (
          <motion.article
            key={i}
            variants={item}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(255,125,0,0.12)" }}
            className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col"
          >
            <div>
              <div className="flex text-orange-400 text-lg mb-4" aria-label="avaliação 5 estrelas">
                {[...Array(5)].map((_, s) => (
                  <motion.span
                    key={s}
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.05 * s, type: "spring", stiffness: 300, damping: 18 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-zinc-200 mb-4 leading-relaxed">"{t.quote}"</p>
            </div>

            <div className="mt-auto pt-6 flex items-center gap-3 border-t border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-white">{t.author}</div>
                <a
                  href="https://www.google.com/maps/place/Voia+Agency/@-23.1997427,-45.88613,17z/data=!4m8!3m7!1s0x94cc4bcc84e07e2f:0xd454d428934fc758!8m2!3d-23.1997477!4d-45.8835551!9m1!1b1!16s%2Fg%2F11kpr5dzk3?hl=en-GB&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Google Review
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
            {/* Clients logo strip */}
      <motion.div
        className="mt-26"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/40 border border-zinc-700 text-zinc-300 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Marcas que confiam na Voia
          </div>
          <h3 className="mt-3 text-2xl font-semibold">Nossos parceiros</h3>
        </div>

        {/* container com fade nas bordas 
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

          <LogoCarousel
            items={[
              { name: "Cliente A", src: "/clients/logo-header.png" },
              { name: "Cliente B", src: "/clients/logo-header.png" },
              { name: "Cliente C", src: "/clients/logo-header.png" },
              { name: "Cliente D", src: "/clients/logo-header.png" },
              { name: "Cliente E", src: "/clients/logo-header.png" },
              { name: "Cliente F", src: "/clients/logo-header.png" },
            ]}
            speed={22}   // segundos por loop (ajuste fino)
            pauseOnHover
          />
        </div>*/}
      </motion.div>

    </motion.section>



  );
}
function LogoCarousel({ items, speed = 20, pauseOnHover = true }) {
  // Duplica o array para fazer o loop contínuo
  const strip = [...items, ...items];

  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex items-center gap-10"
        // loop horizontal infinito (0% -> -50% porque duplicamos)
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        {...(pauseOnHover ? { whileHover: { x: null } } : {})} // pausa o tween no hover
      >
        {strip.map((item, i) => (
          <div key={`${item.name}-${i}`} className="flex items-center">
            {item.src ? (
              <img
                src={item.src}
                alt={item.name}
                className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                loading="lazy"
                height={40}
              />
            ) : (
              <span className="px-4 py-2 text-sm text-zinc-300/80 border border-zinc-700 rounded-lg">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
