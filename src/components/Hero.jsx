export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-3">Hi, I’m Khanh 👋</h1>
      <p className="text-lg text-gray-600 mb-6">
        A passionate Frontend Developer from Vietnam.
      </p>
      <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        View My Work
      </a>
    </section>
  );
}
