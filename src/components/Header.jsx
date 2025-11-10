
import avatar from "../assets/avatar.png";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0">
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          KhanhConn
        </h1>
      </div>

      <nav className="flex gap-6 text-gray-600">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
