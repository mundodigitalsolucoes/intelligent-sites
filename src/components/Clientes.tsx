import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

import logoInovatech from "@/assets/logo-inovatech.png";
import logoOticaSP from "@/assets/logo-otica-sao-paulo.png";
import logoEmbaixada from "@/assets/logo-embaixada-pizza.png";
import logoVilla from "@/assets/logo-villa-rotisseria.png";
import logoAgua from "@/assets/logo-aguamilagrosa.png";

const clients = [
  { name: "Inovatec", logo: logoInovatech, url: "https://www.inovatech.ind.br/" },
  { name: "Ótica São Paulo", logo: logoOticaSP, url: "https://oticasaopaulorp.com.br/" },
  { name: "Embaixada da Pizza", logo: logoEmbaixada, url: "https://embaixadadapizza.com.br/" },
  { name: "Villa Rotisseria", logo: logoVilla, url: "https://villarotisseria.com.br/" },
  { name: "Água Milagrosa Poços Artesianos", logo: logoAgua, url: "https://aguamilagrosapocos.com.br/" },
];

const Clientes = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;

    const step = () => {
      if (!isPaused && el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate items for infinite scroll effect
  const items = [...clients, ...clients];

  return (
    <section ref={ref} className="bg-mds-dark section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-light uppercase tracking-wider">Clientes Ativos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Quem confia na <span className="text-[#93b4ff]">MDS</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="reveal overflow-hidden mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-8" style={{ width: "max-content" }}>
            {items.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-48 h-32 flex items-center justify-center hover:bg-white/20 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Google reviews static placeholder */}
        <div className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto text-center" id="google-reviews-widget">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
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
