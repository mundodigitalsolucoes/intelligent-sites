import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Cadastro = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ nome: "", whatsapp: "", negocio: "", necessidade: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. WhatsApp: ${form.whatsapp}. Meu negócio: ${form.negocio}. Preciso de: ${form.necessidade || "Informações gerais"}.`;
    window.open(`https://wa.me/5517992822597?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section ref={ref} id="cadastro" className="bg-gradient-to-r from-mds-dark to-mds-royal section-padding">
      <div className="container-mds max-w-2xl">
        <div className="text-center mb-10 reveal">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-white/80 mb-4">📚 Conteúdo gratuito</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Cadastre-se e tenha acesso a conteúdos que ajudam negócios a vender mais na internet</h2>
          <p className="text-white/70">Receba direto no seu WhatsApp conteúdos, dicas e materiais práticos para fazer seu negócio crescer online.</p>
        </div>
        <form onSubmit={handleSubmit} className="reveal space-y-4">
          <input
            type="text"
            required
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="tel"
            required
            placeholder="WhatsApp com DDD"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="text"
            required
            placeholder="Seu negócio / segmento"
            value={form.negocio}
            onChange={(e) => setForm({ ...form, negocio: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <select
            value={form.necessidade}
            onChange={(e) => setForm({ ...form, necessidade: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-foreground"
          >
            <option value="">O que você precisa?</option>
            <option value="LP com automação">LP com automação</option>
            <option value="Site Inteligente">Site Inteligente</option>
            <option value="Loja Virtual">Loja Virtual</option>
            <option value="Só quero os conteúdos por enquanto">Só quero os conteúdos por enquanto</option>
          </select>
          <button type="submit" className="w-full bg-white text-mds-dark font-bold py-3 rounded-lg hover:bg-mds-soft transition-colors text-sm">
            📲 Quero receber os conteúdos
          </button>
          <p className="text-center text-white/50 text-xs">🔒 Seus dados estão seguros. Sem spam.</p>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
