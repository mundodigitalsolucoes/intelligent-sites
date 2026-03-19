import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Target, Brain, ShoppingCart, Check, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Plan {
  icon: LucideIcon;
  name: string;
  tagline: string;
  features: string[];
  setup: string;
  monthly: string;
  prazo: string;
  cta: string;
  highlight: boolean;
}

const plans: Plan[] = [
  {
    icon: Target,
    name: "Landing Page com Automação",
    tagline: "Para campanhas e anúncios que convertem",
    features: [
      "Página de alta conversão",
      "Formulário com entrega automática",
      "Integração WhatsApp automática",
      "GTM + Pixel + GA4 configurados",
      "Tags de conversão e remarketing",
      "Hospedagem dedicada incluída",
    ],
    setup: "R$ 497",
    monthly: "+ R$ 49,90/mês (hospedagem + suporte)",
    prazo: "10 a 20 dias",
    cta: "Quero essa LP →",
    highlight: false,
  },
  {
    icon: Brain,
    name: "Site Inteligente",
    tagline: "Para quem quer presença + captação + sistema",
    features: [
      "Site institucional completo",
      "CRM omnichannel integrado",
      "Widget de atendimento ao vivo",
      "WhatsApp + Instagram + E-mail unificados",
      "Orçamento online automatizado",
      "Avaliação Google integrada",
      "SEO local otimizado",
      "GTM + Pixel + GA4 + Remarketing",
    ],
    setup: "R$ 797",
    monthly: "+ R$ 99,90/mês (hospedagem dedicada + CRM + suporte)",
    prazo: "25 a 40 dias",
    cta: "Quero meu site inteligente →",
    highlight: true,
  },
  {
    icon: ShoppingCart,
    name: "Loja Virtual Automatizada",
    tagline: "Para vender no piloto automático",
    features: [
      "E-commerce completo",
      "Pagamento online integrado",
      "Carrinho abandonado automatizado",
      "E-mail marketing pós-compra",
      "CRM + gestão de clientes",
      "Relatórios de vendas automáticos",
      "GTM + Pixel + GA4 + Remarketing",
    ],
    setup: "R$ 1.997",
    monthly: "+ R$ 199,90/mês (hospedagem dedicada + automações + suporte)",
    prazo: "30 a 60 dias",
    cta: "Quero minha loja →",
    highlight: false,
  },
];

const Planos = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="planos" className="bg-mds-gray section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-royal uppercase tracking-wider">Planos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">Escolha o que seu negócio precisa agora</h2>
          <p className="text-mds-text max-w-2xl mx-auto">Todos os planos incluem hospedagem dedicada, segurança, suporte e automação real.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal bg-background rounded-2xl p-6 flex flex-col transition-shadow hover:shadow-xl ${
                p.highlight ? "border-2 border-primary ring-4 ring-primary/10 relative" : "border border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Mais Escolhido
                </span>
              )}
              <p.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-mds-text mb-5">{p.tagline}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-mds-royal mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="text-2xl font-extrabold text-foreground">a partir de {p.setup}</p>
                <p className="text-xs text-mds-text mb-1">{p.monthly}</p>
                <p className="text-xs text-mds-text mb-4 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {p.prazo}
                </p>
                <a
                  href={`https://wa.me/5517992822597?text=Olá!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(p.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold text-sm py-3 rounded-lg transition-colors ${
                    p.highlight
                      ? "bg-primary text-primary-foreground hover:bg-mds-light"
                      : "bg-mds-soft text-mds-royal hover:bg-mds-light hover:text-white"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Star } from "lucide-react";

export default Planos;
