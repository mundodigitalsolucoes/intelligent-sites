import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Moon, TrendingDown, FolderOpen, Clock } from "lucide-react";

const problems = [
  { icon: Moon, title: "Leads perdidos no WhatsApp?", desc: "Mensagens sem resposta viram cliente do concorrente. Automação resolve isso." },
  { icon: TrendingDown, title: "Site que não aparece no Google", desc: "Sem SEO local e sem GTM configurado, você paga anúncio pra quem nunca vai comprar." },
  { icon: FolderOpen, title: "Contatos espalhados em todo lugar", desc: "Instagram, e-mail, WhatsApp separados. Sem CRM você não sabe quem é lead quente." },
  { icon: Clock, title: "Tempo que você não tem", desc: "Você cuida do negócio. Não dá pra ficar online respondendo pergunta básica o dia todo." },
];

const Problema = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-mds-gray section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-royal uppercase tracking-wider">A realidade de quem não tem sistema</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">Seu site atual é só cartão de visita?</h2>
          <p className="text-mds-text max-w-2xl mx-auto">A maioria dos sites mostra o negócio. O seu precisa vender, captar e responder — 24h por dia.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {problems.map((p) => (
            <div key={p.title} className="reveal bg-background rounded-xl p-6 border-l-4 border-red-400 shadow-sm hover:shadow-md transition-shadow">
              <p.icon className="w-7 h-7 text-red-400 mb-2" />
              <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-mds-text">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal bg-gradient-to-r from-mds-dark to-mds-royal rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">E se seu site fizesse tudo isso por você?</h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">Nós criamos sites inteligentes que não só mostram seu negócio — eles trabalham pra você. Captam leads, respondem dúvidas, enviam orçamentos e organizam seus contatos automaticamente.</p>
          <a href="#como-funciona" className="inline-block bg-white text-mds-dark font-bold px-6 py-3 rounded-lg hover:bg-mds-soft transition-colors text-sm">
            Quero ver como funciona →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problema;
