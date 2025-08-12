// src/components/TrustBar.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function TrustBar() {
  const metrics = [
    {
      type: "currency",
      value: 34.4,
      prefix: "US$ ",
      suffix: " bi",
      label: "Publicidade digital",
      desc: "Estimado para 2025 no Brasil",
    },
    {
      type: "rangePercent",
      min: 12.8,
      max: 15.7,
      prefix: "↑ ",
      suffix: " %",
      label: "Crescimento anual (CAGR)",
      desc: "Previsto entre 2025 e 2030",
    },
    {
      type: "currency",
      value: 26.7,
      prefix: "US$ ",
      suffix: " bi",
      label: "Transformação digital",
      desc: "Mercado em 2025",
    },
    {
      type: "percent",
      value: 13.5,
      prefix: "↑ ",
      suffix: " %",
      label: "Crescimento digital",
      desc: "CAGR esperado até 2030",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.4, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="border-y border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="text-center rounded-2xl p-4 transition-colors"
            >
              <div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">
                <CountUpWithVisibility
                  start={0}
                  end={m.type === "currency" ? m.value : m.type === "percent" ? m.value : m.min}
                  decimals={1}
                  decimal=","
                  prefix={m.prefix}
                  suffix={m.type === "rangePercent" ? ` – ${m.max}${m.suffix}` : m.suffix}
                />
              </div>

              <div className="font-semibold text-white mb-1">{m.label}</div>
              <div className="text-sm text-zinc-400">{m.desc}</div>

              {/* Glow sutil no hover */}
              <div className="pointer-events-none mx-auto mt-2 h-px w-10 rounded bg-orange-500/0 group-hover:bg-orange-500/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const CountUpWithVisibility = ({ start, end, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Apenas a primeira vez que entrar na tela
    threshold: 0.2,    // Quando 20% do elemento for visível
  });

  return (
    <div ref={ref}>
      {inView && <CountUp start={start} end={end} {...props} />}
    </div>
  );
};
