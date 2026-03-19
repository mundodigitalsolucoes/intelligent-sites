import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroCard = () => (
  <div className="animate-float bg-background/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-sm">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
      <span className="text-sm text-white/70">Painel do seu site · ao vivo</span>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-4">
      {[
        { label: "Leads captados hoje", value: "+14" },
        { label: "Mensagens respondidas (auto)", value: "+37" },
        { label: "Orçamentos enviados", value: "8" },
        { label: "Taxa de conversão", value: "23%" },
      ].map((m) => (
        <div key={m.label} className="bg-white/10 rounded-lg p-3">
          <p className="text-xl font-bold text-white">{m.value}</p>
          <p className="text-xs text-white/60">{m.label}</p>
        </div>
      ))}
    </div>
    <a
      href="https://wa.me/5517992822597?text=Olá!%20Quero%20esse%20sistema%20de%20site%20inteligente"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-white text-mds-dark font-semibold text-sm py-2.5 rounded-lg hover:bg-mds-soft transition-colors"
    >
      Quero esse sistema →
    </a>
  </div>
);

const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-mds-dark pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-mds px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
            <span className="text-sm text-white/80">Sistema ativo · CRM + WhatsApp + Automação</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Seu site trabalha enquanto você descansa
          </h1>
          <p className="text-lg text-white/70 max-w-xl mb-8 font-light">
            Criamos sites que respondem clientes, organizam contatos e geram vendas no piloto automático — sem você precisar ficar online o dia todo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5517992822597?text=Olá!%20Quero%20meu%20site%20inteligente%20MDS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mds-dark font-bold px-6 py-3 rounded-lg hover:bg-mds-soft transition-colors text-sm"
            >
              Quero meu site inteligente
            </a>
            <a
              href="#planos"
              className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Ver planos
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 reveal">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
