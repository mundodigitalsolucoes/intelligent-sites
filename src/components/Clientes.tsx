import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

import logoInovatech from "@/assets/logo-inovatech-branca.png";
import logoOticaSP from "@/assets/logo-otica-sao-paulo-branca.png";
import logoEmbaixada from "@/assets/logo-embaixada-pizza-branca.png";
import logoVilla from "@/assets/logo-villa-rotisseria-branca.png";
import logoAgua from "@/assets/logo-aguamilagrosa-branca.png";

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

  const items = [...clients, ...clients];

  return (
    <section ref={ref} className="bg-mds-dark section-padding">
      <div className="container-mds">
        <div className="text-center mb-12 reveal">
          <span className="text-sm font-semibold text-mds-light uppercase tracking-wider">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
            Quem confia na <span className="text-[#93b4ff]">MDS</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="reveal overflow-hidden mb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-10" style={{ width: "max-content" }}>
            {items.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-64 h-40 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-28 max-w-[220px] w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
