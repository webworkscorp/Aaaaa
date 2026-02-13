
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const RomanticMessage: React.FC<Props> = ({ onComplete }) => {
  const fullText = "Hola mi corazoncito de melón, quería decirte primeramente que te amo mucho y que eres la niña de mi corazón, lo que siento por ti no lo cambio por nada en el mundo.\n\nSé que han pasado muchas cosas y sé que tal vez ahora te sientes un poco diferente, pero no quiero que dudes nunca de cuánto te amo mi dormilona.\n\nTal vez no podamos pasar juntos como quisiéramos, pero el hecho de saber que en un día tan especial como el 14 de febrero te tendré conmigo me hace el hombre más feliz del mundo, así no te tenga de frente.\n\nY si tú me lo permites quiero invitarte a que seas mi san Valentín, así estemos a la distancia quiero pasar el día hablando contigo o hacer una llamadita en la noche, así sean 5 minutos permíteme pasarlo contigo.";

  return (
    <div className="flex flex-col items-center pb-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="text-lg md:text-xl text-rose-900 font-medium leading-relaxed mb-10 whitespace-pre-wrap italic text-left px-2"
      >
        {fullText}
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="bg-rose-600 text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-rose-200/50 transition-all w-full md:w-auto"
      >
        Continuar con amor...
      </motion.button>
    </div>
  );
};

export default RomanticMessage;
