// export default function Hero() {
//   return (
//     <section className="flex flex-col items-center justify-center h-[80vh] text-center">
//       <h1 className="text-4xl md:text-6xl font-bold mb-3">Hi, I’m Khanh 👋</h1>
//       <p className="text-lg text-gray-600 mb-6">
//         A passionate Frontend Developer from Vietnam.
//       </p>
//       <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
//         View My Work
//       </a>
//     </section>
//   );
// }
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hello, I’m <span className="text-blue-500">KhanhConn</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-600 dark:text-gray-300 mt-4 text-lg"
      >
        Frontend Developer | React Enthusiast
      </motion.p>
    </section>
  );
}
