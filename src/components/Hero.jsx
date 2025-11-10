import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/bg_hero.png')", 
      }}
    >
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 text-white flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">
          Hello, I’m <span className="text-blue-400">KhanhConn</span>
        </h1>
        <p className="text-lg text-gray-200">
          Frontend Developer | React Enthusiast
        </p>
        <motion.a
          href="#contact"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
