import logoMdsBranca from "@/assets/logo-mds-branca.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconFacebook from "@/assets/icon-facebook.png";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-mds-dark py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-mds">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <img src={logoMdsBranca} alt="Mundo Digital Soluções" className="h-24 mb-4" />
          <p className="text-white/50 text-sm">contato@mundodigitalsolucoes.com.br</p>
          <p className="text-white/50 text-sm">(17) 99282-2597</p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://instagram.com/mundodigital.solucoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <img src={iconInstagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://facebook.com/mundodigitalsolucoes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <img src={iconFacebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/mudo-digital-solu%C3%A7%C3%B5es-834653263/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-mds-royal rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="https://metodo.mundodigitalsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Método MDS</a>
          <a href="#planos" className="text-white/70 hover:text-white transition-colors">Sites Inteligentes</a>
          <a href="#como-funciona" className="text-white/70 hover:text-white transition-colors">Como funciona</a>
          <a href="#cadastro" className="text-white/70 hover:text-white transition-colors">Contato</a>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-white/40 text-xs">© 2026 Mundo Digital Soluções · Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
