import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I'm Rangga
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-300 mb-6">
          <Typewriter
            words={[
              'Frontend Developer',
              'Creative Coder',
              'React Enthusiast',
              'Lover of Clean Design',
              'Web Artisan'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <a
          href="#projects"
          className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm md:text-base font-medium hover:bg-gray-200 transition"
        >
          Lihat Proyek
        </a>
      </motion.div>
    </section>
  );
}
