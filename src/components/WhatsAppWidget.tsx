import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-mds-dark rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Mundo Digital Soluções</p>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                  Online agora
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Olá! 👋 Fale com nossos especialistas e descubra como estruturar seu marketing digital.
          </p>
          <a
            href="https://wa.me/5517992822597?text=Olá!%20Vim%20pelo%20site%20e%20quero%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white text-center font-semibold text-sm py-2.5 rounded-lg hover:bg-[#20bc5c] transition-colors"
          >
            Falar com nossos especialistas
          </a>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
        aria-label="Falar com especialistas"
      >
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">1</span>
          </span>
        )}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.606c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.974-7.826-6.81-8.064-7.124-.228-.314-1.918-2.554-1.918-4.872s1.214-3.456 1.646-3.928c.39-.428 1.03-.64 1.644-.64.198 0 .376.01.536.018.432.02.648.046.934.724.356.844 1.224 2.986 1.33 3.204.108.218.216.51.072.804-.134.304-.254.438-.472.69-.218.252-.424.446-.642.718-.198.238-.42.494-.174.926.246.424 1.092 1.802 2.346 2.92 1.614 1.438 2.974 1.886 3.398 2.094.432.208.684.178.934-.108.26-.294 1.104-1.284 1.398-1.726.286-.432.58-.36.974-.216.398.144 2.526 1.192 2.958 1.41.432.216.72.324.828.504.106.18.106 1.044-.284 2.148z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
