import { useState, type FormEvent } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BookOpen, Lock } from "lucide-react";

const conteudos = [
  { id: "lp", label: "LP de Alta Conversão" },
  { id: "site", label: "Sites Inteligentes" },
  { id: "loja", label: "Lojas Virtuais" },
  { id: "marketing", label: "Conteúdos de Marketing e Vendas" },
];

const Cadastro = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    negocio: "",
    conteudos: [] as string[],
  });

  const toggleConteudo = (id: string) => {
    setForm((prev) => ({
      ...prev,
      conteudos: prev.conteudos.includes(id)
        ? prev.conteudos.filter((c) => c !== id)
        : [...prev.conteudos, id],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selecionados = form.conteudos
      .map((id) => conteudos.find((c) => c.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const msg = `Olá! Meu nome é ${form.nome}. WhatsApp: ${form.whatsapp}. E-mail: ${form.email}. Meu negócio: ${form.negocio}. Quero receber: ${selecionados || "Informações gerais"}.`;
    window.open(`https://wa.me/5517992822597?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section ref={ref} id="cadastro" className="bg-gradient-to-r from-mds-dark to-mds-royal section-padding">
      <div className="container-mds max-w-lg">
        <div className="text-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm text-white/80 mb-4">
            <BookOpen className="w-4 h-4" /> Conteúdo gratuito
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
            Receba conteúdos que ajudam<br />a vender mais na internet
          </h2>
          <p className="text-white/70 text-sm">
            Receba direto no seu <strong className="text-white">WhatsApp e e-mail</strong> conteúdos, dicas e materiais práticos para fazer seu negócio crescer online.
          </p>
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
            type="email"
            required
            placeholder="Seu melhor e-mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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

          {/* Checkboxes */}
          <div className="bg-white/10 border border-white/20 rounded-lg p-4 space-y-3">
            <p className="text-white/80 text-sm font-semibold mb-2">Qual conteúdo você gostaria de receber?</p>
            {conteudos.map((item) => (
              <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.conteudos.includes(item.id)}
                  onChange={() => toggleConteudo(item.id)}
                  className="w-5 h-5 rounded accent-white cursor-pointer"
                />
                <span className="text-white/80 text-sm group-hover:text-white transition-colors">{item.label}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-mds-dark font-bold py-3 rounded-lg hover:bg-mds-soft transition-colors text-sm"
          >
            Quero receber os conteúdos →
          </button>
          <p className="text-center text-white/50 text-xs flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" /> Seus dados estão seguros. Sem spam.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
