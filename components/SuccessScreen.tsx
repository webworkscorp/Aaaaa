
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SuccessScreen: React.FC = () => {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="z-10 w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-[2.5rem] shadow-2xl p-10 md:p-14 text-center relative"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2"
      >
        <div className="bg-rose-500 p-4 rounded-full shadow-lg">
          <Heart className="w-12 h-12 text-white fill-white" />
        </div>
      </motion.div>

      <div className="py-8">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-rose-800 mb-8 mt-4 leading-tight font-bold"
        >
          Muchas gracias por aceptar ser mi San Valentín mi niña, desde hoy en adelante siempre lo serás mi amor 💕. Te amo!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-rose-600 font-romantic text-4xl mb-4"
        >
          Eres lo mejor que me ha pasado
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-rose-400 font-medium text-lg border-t border-rose-100 pt-8"
      >
        Te amo infinitamente, mi vida entera ❤️
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;
