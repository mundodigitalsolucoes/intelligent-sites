import logoMdsBranca from "@/assets/logo-mds-branca.png";

const Footer = () => (
  <footer className="bg-mds-dark py-12 px-4 sm:px-6 lg:px-8">
    <div className="container-mds">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <img src={logoMdsBranca} alt="Mundo Digital Soluções" className="h-12 mb-4" />
          <p className="text-white/50 text-sm">contato@mundodigitalsolucoes.com.br</p>
          <p className="text-white/50 text-sm">(17) 99282-2597</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="https://metodo.mundodigitalsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Método MDS</a>
          <a href="#planos" className="text-white/70 hover:text-white transition-colors">Sites Inteligentes</a>
          <a href="https://instagram.com/mundodigitalsolucoes" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Instagram</a>
          <a href="https://linkedin.com/company/mundodigitalsolucoes" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-6 text-center">
        <p className="text-white/40 text-xs">© 2026 Mundo Digital Soluções · Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
);

export default Footer;
