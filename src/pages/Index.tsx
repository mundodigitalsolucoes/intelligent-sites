import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import ComoFunciona from "@/components/ComoFunciona";
import Planos from "@/components/Planos";
import Diferenciais from "@/components/Diferenciais";
import Clientes from "@/components/Clientes";
import Cadastro from "@/components/Cadastro";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Problema />
      <ComoFunciona />
      <Planos />
      <Diferenciais />
      <Clientes />
      <Cadastro />
      <FAQ />
      <CTAFinal />
    </main>
    <Footer />
    <WhatsAppWidget />
  </>
);

export default Index;
