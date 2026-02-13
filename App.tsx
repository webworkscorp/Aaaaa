
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

// --- Floating Hearts Background ---
const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 10 + Math.random() * 20,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 10,
  })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: '110vh', x: `${h.x}vw`, opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.3, 0.3, 0], rotate: 360 }}
          transition={{ duration: h.duration, repeat: Infinity, delay: h.delay, ease: 'linear' }}
          className="absolute text-rose-300 fill-current"
          style={{ width: h.size, height: h.size }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

// --- Story Screen Component ---
const StoryScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, y: -20 }}
    className="z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto premium-card rounded-[3rem] p-6 md:p-12 custom-scrollbar"
  >
    <div className="space-y-12 pb-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <img src="https://i.imgur.com/6tWN8C8.jpeg" className="w-full rounded-2xl shadow-xl mb-6" alt="Recuerdo" />
        <p className="text-xl text-rose-900 font-serif italic text-center leading-relaxed">
          "Desde el día que empezamos a conocernos, supe que tu valías la pena... eres la niña más hermosa que mis ojos han visto."
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <img src="https://i.imgur.com/ZC3Atuy.jpeg" className="w-full rounded-2xl shadow-xl mb-6" alt="Recuerdo" />
        <p className="text-xl text-rose-900 font-serif italic text-center leading-relaxed">
          "Nunca te mentí cuando prometí que nada malo volvería a pasar... todo lo que te digo es real, mi amor."
        </p>
      </motion.div>

      <div className="bg-white/40 p-8 rounded-[2.5rem] border border-rose-100 text-center">
        <p className="text-lg text-rose-900 italic font-serif leading-relaxed mb-6">
          "Nuestro amor es más fuerte que la distancia o cualquier problema. No estés triste, sé feliz porque seguimos aquí."
        </p>
        <button
          onClick={onComplete}
          className="bg-rose-600 text-white px-10 py-5 rounded-full font-bold shadow-2xl flex items-center justify-center gap-3 w-full hover:bg-rose-700 transition-colors"
        >
          <span>Continuar hacia la sorpresa ❤️</span>
          <ChevronDown className="animate-bounce" />
        </button>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---
const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'story' | 'question' | 'success'>('intro');
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);

  const handleYes = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#f43f5e', '#fb7185', '#fff'] });
    setStep('success');
  };

  const moveNo = () => {
    const maxX = 150;
    const maxY = 150;
    setNoPos({ x: (Math.random() - 0.5) * maxX * 2, y: (Math.random() - 0.5) * maxY * 2 });
    setYesScale(s => Math.min(s + 0.2, 3));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-4 bg-[#fffafa]">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="z-10 w-full max-w-xl premium-card rounded-[3rem] p-10 text-center"
          >
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="mb-8 flex justify-center">
              <Heart size={64} className="text-rose-500 fill-rose-500" />
            </motion.div>
            <p className="text-lg md:text-xl text-rose-900 font-medium italic leading-relaxed mb-10 whitespace-pre-wrap">
              "Hola mi corazoncito, quería decirte que te amo mucho y eres la niña de mi corazón. No quiero que dudes nunca de lo que siento por ti, mi dormilona."
            </p>
            <button
              onClick={() => setStep('story')}
              className="bg-rose-600 text-white px-12 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Entrar con amor...
            </button>
          </motion.div>
        )}

        {step === 'story' && <StoryScreen onComplete={() => setStep('question')} />}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="z-10 w-full max-w-xl premium-card rounded-[4rem] p-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-rose-950 mb-4 font-bold">¿Quieres ser mi</h1>
            <span className="font-romantic text-6xl md:text-8xl text-rose-600 block mb-12">San Valentín?</span>

            <div className="flex flex-col items-center justify-center min-h-[200px] relative w-full">
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                onMouseEnter={moveNo} onTouchStart={moveNo}
                className="absolute bg-white text-rose-300 border border-rose-100 px-8 py-3 rounded-full font-semibold shadow-sm z-0"
              >
                No... 🥺
              </motion.button>
              
              <motion.button
                style={{ scale: yesScale }}
                onClick={handleYes}
                className="bg-rose-600 text-white px-16 py-6 rounded-full font-black text-3xl shadow-2xl z-10"
              >
                ¡SÍ! ❤️
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="z-10 w-full max-w-xl premium-card rounded-[3.5rem] p-12 text-center"
          >
            <div className="bg-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Heart className="text-white fill-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-rose-800 font-bold mb-6">¡Gracias mi niña!</h2>
            <p className="font-romantic text-4xl text-rose-600 mb-8">Serás mi San Valentín siempre 💕</p>
            <p className="text-rose-400 font-medium uppercase tracking-widest text-sm border-t border-rose-100 pt-8">Te amo infinitamente</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
