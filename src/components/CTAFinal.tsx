import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTAFinal = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="container-mds text-center max-w-2xl reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Pronto para ter um site que vende por você?</h2>
        <p className="text-mds-text mb-8">Fale com a MDS agora. Em 24h você recebe um diagnóstico gratuito e a proposta ideal para o seu negócio.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="https://wa.me/5517992822597?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20Sites%20Inteligentes%20MDS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mds-whatsapp text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Falar no WhatsApp
          </a>
          <a href="#cadastro" className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-mds-light transition-colors text-sm">
            Receber conteúdos gratuitos
          </a>
        </div>
        <p className="text-sm text-mds-text">⚡ Vagas limitadas por mês — atendemos poucos clientes para garantir qualidade.</p>
      </div>
    </section>
  );
};

export default CTAFinal;
