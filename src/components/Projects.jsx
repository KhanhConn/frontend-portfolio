export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white shadow rounded-xl p-4 w-80">
          <h3 className="font-bold text-lg mb-2">📝 Todo App</h3>
          <p className="text-gray-600 mb-3">A simple React-based Todo app with local storage.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://todo-app-xi-nine-18.vercel.app" className="text-blue-600 hover:underline">
            View Demo →
          </a>
        </div>
        <div className="bg-white shadow rounded-xl p-4 w-80">
          <h3 className="font-bold text-lg mb-2">Weather App</h3>
          <p className="text-gray-600 mb-3">Weather app.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://khanhconn-weather-app.netlify.app" className="text-blue-600 hover:underline">
            View Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
