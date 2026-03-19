import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Clientes = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="bg-mds-dark section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-light uppercase tracking-wider">Clientes Ativos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Negócios reais, <span className="text-[#93b4ff]">resultados reais</span>
          </h2>
        </div>

        <div className="reveal flex flex-wrap justify-center items-center gap-8 mb-12">
          {["Inovatec", "Ótica São Paulo", "Embaixada da Pizza", "Villa Rotisseria", "Água Milagrosa Poços Artesianos"].map(
            (name) => (
              <div key={name} className="bg-white/10 rounded-xl px-6 py-4 text-white/80 font-semibold text-sm">
                {name}
              </div>
            )
          )}
        </div>

        {/* Google reviews static placeholder */}
        <div className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto text-center" id="google-reviews-widget">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          <p className="text-2xl font-bold text-white mb-1">5.0 no Google</p>
          <p className="text-sm text-white/60 mb-4">Avaliação real de clientes ativos · Mundo Digital Soluções</p>
          <a
            href="https://g.co/kgs/mundodigitalsolucoes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-mds-light hover:text-white transition-colors"
          >
            Ver avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
