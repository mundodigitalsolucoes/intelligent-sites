import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const diffs = [
  { icon: "⚡", title: "Hospedagem Dedicada", desc: "Servidor próprio exclusivo. Rápido, seguro e sem limitação de visitas." },
  { icon: "🤖", title: "Automação Real", desc: "n8n + Evolution + Chatwoot. Respostas automáticas no WhatsApp, Instagram e e-mail." },
  { icon: "📊", title: "100% Tagueado", desc: "GTM, Pixel Meta, API de Conversões, Google Ads, GA4. Todo clique rastreado." },
  { icon: "🎯", title: "CRM Omnichannel", desc: "Todos os contatos num lugar só. WhatsApp, Instagram, e-mail e chat unificados." },
  { icon: "📈", title: "Orientado a Resultado", desc: "Cada detalhe pensado para converter visitante em lead e lead em cliente." },
  { icon: "🛡️", title: "Suporte Contínuo", desc: "Manutenção, segurança e melhorias mensais. Você não precisa entender de tech." },
];

const Diferenciais = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-royal uppercase tracking-wider">Por que a MDS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">Não é só site. É um sistema de vendas</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diffs.map((d) => (
            <div key={d.title} className="reveal bg-mds-gray rounded-xl p-6 hover:bg-mds-soft transition-colors group">
              <span className="text-3xl mb-3 block">{d.icon}</span>
              <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-mds-text">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
