export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0">
      <h1 className="font-bold text-xl text-blue-600">Khanh</h1>
      <nav className="flex gap-6 text-gray-600">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
