
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

const StoryScreen: React.FC<Props> = ({ onComplete }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      key="story"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95 }}
      className="z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto overflow-x-hidden bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-6 md:p-10 border border-white/80 flex flex-col items-center custom-scrollbar"
    >
      {/* Primera Imagen y Texto */}
      <motion.div variants={item} className="w-full flex flex-col items-center gap-6 mb-12">
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border-2 border-white/50">
          <img 
            src="https://i.imgur.com/6tWN8C8.jpeg" 
            alt="Nuestra historia 1" 
            className="w-full h-auto block"
          />
        </div>
        <div className="w-full px-2">
          <p className="text-xl text-rose-900 font-serif italic leading-relaxed text-center">
            "Siempre tuve presente que te amaría mi niña, desde el dia que empezamos a conocernos, porque desde ese momento sabía que tu <span className="text-rose-600 font-bold not-italic">valías la pena</span> y que eras la niña más hermosa que mis ojos habian visto, con ese corazón tan lindo que tienes."
          </p>
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-8 opacity-40">
        <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
      </motion.div>

      {/* Segunda Imagen y Texto */}
      <motion.div variants={item} className="w-full flex flex-col items-center gap-6 mb-12">
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border-2 border-white/50">
          <img 
            src="https://i.imgur.com/ZC3Atuy.jpeg" 
            alt="Nuestra historia 2" 
            className="w-full h-auto block"
          />
        </div>
        <div className="w-full px-2">
          <p className="text-xl text-rose-900 font-serif italic leading-relaxed text-center">
            "A dia de hoy sigo aquí <span className="font-romantic text-3xl text-rose-500">corazoncito</span>, esforzándome por ti y por este gran amor que te tengo 🥺. Porque nunca mentí con todo lo que te dije, ni mucho menos con lo que siento por ti, nunca mentí con quererte en mi vida y esforzarme muchisimo por ti..."
          </p>
          <p className="mt-4 text-lg text-rose-800/80 font-medium leading-relaxed text-center font-serif">
            "...nunca te mentí cuando te prometí que nada malo volvería a pasar, porque todo lo que te digo es sincero y real y siempre te lo he demostrado mi amor."
          </p>
        </div>
      </motion.div>

      {/* Nuevo Mensaje Largo */}
      <motion.div variants={item} className="w-full bg-rose-50/80 p-7 rounded-[2rem] border border-rose-100 mb-10 shadow-inner">
        <p className="text-lg text-rose-900 text-center italic font-serif leading-relaxed">
          "No quiero que te tomes esto con tristeza mi amor, quiero que más bien te lo tomes con muchísima felicidad, porque a pesar de todo aun seguimos aquí juntitos, aún nos tenemos y seguimos compartiendo, quiero que estés feliz porque sin importar las circunstancias nuestro amor a sido fuerte y real. No me gustaría que llores de nostalgia o tristeza, sino de alegría por mirar atrás y ver que todavía sigo aquí contigo mi bebé 🥺💕. Y no podía preguntarte lo siguiente sin antes decirte lo mucho que te amo y lo mucho que nos hemos amado, y que no hay absolutamente nada más fuerte, ni los problemas, ni las circunstancias, ni la distancia, absolutamente nada más fuerte y grande que nuestro amor."
        </p>
        <div className="mt-6 flex flex-col items-center">
          <div className="h-px w-20 bg-rose-200 mb-4" />
          <p className="text-xl font-romantic text-rose-600 font-bold">Ahora sí, te pregunto:</p>
        </div>
      </motion.div>

      {/* Botón Final */}
      <motion.button
        variants={item}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="bg-rose-600 text-white px-8 py-5 rounded-full font-bold shadow-xl shadow-rose-200/50 transition-all flex items-center justify-center gap-3 mb-6 shrink-0 w-full"
      >
        <span className="text-base md:text-lg">Hay algo que quiero preguntarte ❤️</span>
      </motion.button>
      
      <motion.div variants={item} className="animate-bounce mb-4 text-rose-200">
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
};

export default StoryScreen;
