
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import FloatingHearts from './components/FloatingHearts.tsx';
import RomanticMessage from './components/RomanticMessage.tsx';
import StoryScreen from './components/StoryScreen.tsx';
import SuccessScreen from './components/SuccessScreen.tsx';

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'story' | 'question' | 'success'>('intro');
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);

  const handleYes = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fff', '#fda4af']
    });
    setStep('success');
  };

  const moveNo = () => {
    const maxX = window.innerWidth < 768 ? 100 : 200;
    const maxY = window.innerWidth < 768 ? 100 : 200;
    const randomX = (Math.random() - 0.5) * maxX * 2;
    const randomY = (Math.random() - 0.5) * maxY * 2;
    setNoPos({ x: randomX, y: randomY });
    // Cada vez que intenta dar al no, el sí se hace irresistiblemente grande
    setYesScale(prev => Math.min(prev + 0.25, 4));
  };

  return (
    <main className="relative w-full h-screen flex items-center justify-center p-4 bg-[#fffafa] overflow-hidden">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="z-10 w-full max-w-2xl premium-card rounded-[3rem] p-8 md:p-12"
          >
            <RomanticMessage onComplete={() => setStep('story')} />
          </motion.div>
        )}

        {step === 'story' && (
          <StoryScreen key="story" onComplete={() => setStep('question')} />
        )}

        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="z-10 w-full max-w-xl premium-card rounded-[4rem] p-10 md:p-16 text-center border-2 border-rose-100/50 shadow-2xl"
          >
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-4xl md:text-5xl font-serif text-rose-950 mb-2 font-bold"
            >
              ¿Quieres ser mi
            </motion.h1>
            <span className="font-romantic text-6xl md:text-8xl text-rose-600 block mb-12 drop-shadow-sm">
              San Valentín?
            </span>

            <div className="flex flex-col items-center justify-center min-h-[250px] relative w-full">
              {/* El botón NO es difícil de clickear */}
              <motion.button
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onMouseEnter={moveNo}
                onTouchStart={moveNo}
                className="absolute bg-white/80 backdrop-blur-sm text-rose-300 border border-rose-100 px-8 py-3 rounded-full font-semibold shadow-md z-0 whitespace-nowrap"
              >
                No... 🥺
              </motion.button>
              
              {/* El botón SÍ crece */}
              <motion.button
                style={{ scale: yesScale }}
                whileTap={{ scale: yesScale * 0.9 }}
                onClick={handleYes}
                className="bg-rose-600 text-white px-12 py-5 rounded-full font-black text-2xl md:text-3xl shadow-xl shadow-rose-200 z-10 hover:bg-rose-700 transition-colors"
              >
                ¡SÍ! ❤️
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <SuccessScreen key="success" />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
