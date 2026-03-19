import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

import logoInovatech from "@/assets/logo-inovatech.png";
import logoOticaSP from "@/assets/logo-otica-sao-paulo.png";
import logoEmbaixada from "@/assets/logo-embaixada-pizza.png";
import logoVilla from "@/assets/logo-villa-rotisseria.png";
import logoAgua from "@/assets/logo-aguamilagrosa.png";

// Versões coloridas para o hover
import logoInovatechColor from "@/assets/logo-inovatech.png";
import logoOticaSPColor from "@/assets/logo-otica-sao-paulo.png";
import logoEmbaixadaColor from "@/assets/logo-embaixada-pizza.png";
import logoVillaColor from "@/assets/logo-villa-rotisseria.png";
import logoAguaColor from "@/assets/logo-aguamilagrosa.png";

const clients = [
  { name: "Inovatec", logo: logoInovatech, logoColor: logoInovatechColor, url: "https://www.inovatech.ind.br/" },
  { name: "Ótica São Paulo", logo: logoOticaSP, logoColor: logoOticaSPColor, url: "https://oticasaopaulorp.com.br/" },
  { name: "Embaixada da Pizza", logo: logoEmbaixada, logoColor: logoEmbaixadaColor, url: "https://embaixadadapizza.com.br/" },
  { name: "Villa Rotisseria", logo: logoVilla, logoColor: logoVillaColor, url: "https://villarotisseria.com.br/" },
  { name: "Água Milagrosa Poços Artesianos", logo: logoAgua, logoColor: logoAguaColor, url: "https://aguamilagrosapocos.com.br/" },
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
        <div className="text-center mb-4 reveal">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-3">
            Quem confia na <span className="text-[#93b4ff]">MDS</span>
          </h2>
          <a
            href="#portfolio"
            className="inline-block text-sm font-semibold text-mds-light hover:text-white transition-colors underline underline-offset-4"
          >
            Clique e veja nosso portfólio →
          </a>
        </div>

        <div
          ref={scrollRef}
          className="reveal overflow-hidden mt-10 mb-0"
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
                title={`Visitar site: ${client.name}`}
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 w-48 h-32 flex items-center justify-center hover:bg-white transition-colors group cursor-pointer"
              >
                {/* Logo branca (padrão) */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain filter brightness-0 invert group-hover:hidden transition-all duration-300"
                />
                {/* Logo colorida (hover) */}
                <img
                  src={client.logoColor}
                  alt={client.name}
                  className="max-h-20 max-w-full object-contain hidden group-hover:block transition-all duration-300"
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
