import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMds from "@/assets/logo-mds.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-mds flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex-shrink-0">
          <img src={logoMds} alt="Mundo Digital Soluções" className="h-10" />
        </a>
        <a
          href="https://wa.me/5517992822597?text=Olá!%20Quero%20um%20orçamento%20de%20Site%20Inteligente%20MDS"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-mds-light transition-colors"
        >
          Quero um orçamento →
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden bg-background border-t border-border px-4 py-4">
          <a
            href="https://wa.me/5517992822597?text=Olá!%20Quero%20um%20orçamento%20de%20Site%20Inteligente%20MDS"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold text-sm"
            onClick={() => setOpen(false)}
          >
            Quero um orçamento →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
