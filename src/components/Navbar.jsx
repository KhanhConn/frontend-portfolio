import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold dark:text-white">My Portfolio</h1>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
