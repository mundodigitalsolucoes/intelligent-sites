import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Bot } from "lucide-react";

const steps = [
  { n: "1", title: "Estratégia e Briefing", desc: "Entendemos seu negócio, público e objetivo. Nada de template genérico.", tag: "Fase 1 · Rápida" },
  { n: "2", title: "Estrutura no ar", desc: "Site desenvolvido, hospedado e publicado. Você já aparece online e começa a captar.", tag: "Fase 1 · Rápida" },
  { n: "3", title: "Automação e CRM", desc: "Integramos WhatsApp, formulários, respostas automáticas e CRM omnichannel.", tag: "Fase 2" },
  { n: "4", title: "Rastreamento e Otimização", desc: "GTM, Pixel, GA4, Tags de conversão e remarketing. Cada clique vira dado útil.", tag: "Fase 2" },
  { n: "5", title: "Manutenção e Evolução", desc: "Hospedagem dedicada segura, atualizações, suporte e melhorias contínuas todo mês.", tag: "Mensal" },
];

const ComoFunciona = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="como-funciona" className="bg-background section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-royal uppercase tracking-wider">Processo</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">Do zero ao sistema funcionando</h2>
          <p className="text-mds-text max-w-2xl mx-auto">Dividimos em fases para você ter resultado rápido e continuar evoluindo.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="reveal bg-mds-gray rounded-xl p-6 hover:shadow-lg transition-shadow group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{s.n}</span>
                <span className="text-xs font-semibold bg-mds-soft text-mds-royal px-3 py-1 rounded-full">{s.tag}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{s.title}</h3>
              <p className="text-sm text-mds-text">{s.desc}</p>
            </div>
          ))}

          {/* Card 06 — Vendedor Automático — destaque */}
          <div className="reveal bg-gradient-to-br from-mds-dark to-mds-royal rounded-xl p-6 hover:shadow-xl transition-shadow group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-lg">6</span>
              <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">Vitalício</span>
            </div>
            <Bot className="w-8 h-8 text-white/80 mb-3" />
            <h3 className="font-bold text-white mb-2 text-lg">Vendedor Automático 24/7</h3>
            <p className="text-sm text-white/70">
              Seu site vira um vendedor que nunca dorme. Responde dúvidas, qualifica leads, envia propostas e agenda atendimentos — sozinho, todos os dias, o tempo todo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
