import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Preciso entender de tecnologia para usar o sistema?", a: "Não. Nossa estrutura é pensada para o dono do negócio, não para técnico. Você recebe acesso a um painel simples e nós cuidamos de tudo por trás." },
  { q: "Meu site vai aparecer no Google?", a: "Sim. Todo site é entregue com SEO local básico configurado — meta tags, estrutura correta, Google Meu Negócio orientado e sitemap." },
  { q: "As automações de WhatsApp funcionam com meu número atual?", a: "Sim. Integramos com o número que você já usa via API oficial ou via Evolution API. O atendimento continua parecendo humano e personalizado." },
  { q: "O que acontece depois que o site fica pronto?", a: "Você entra na nossa hospedagem dedicada mensal: backup diário, atualizações, monitoramento e melhorias. Nada para você se preocupar." },
  { q: "Qual a diferença entre o Site Inteligente e uma LP?", a: "A LP é focada em uma campanha específica. O Site Inteligente é a presença completa do negócio: múltiplas páginas, CRM integrado, atendimento omnichannel e automações completas." },
  { q: "Posso começar com a LP e depois evoluir para o Site Inteligente?", a: "Exatamente. Nossa estrutura é modular — você começa com o que faz sentido agora e vai adicionando camadas conforme o negócio cresce." },
];

const FAQ = () => {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-mds-gray section-padding">
      <div className="container-mds max-w-3xl">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-royal uppercase tracking-wider">Dúvidas frequentes</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Respondendo antes de você perguntar</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="reveal bg-background rounded-xl overflow-hidden border border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:text-mds-royal transition-colors"
              >
                {f.q}
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"}`}>
                <p className="text-sm text-mds-text">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
