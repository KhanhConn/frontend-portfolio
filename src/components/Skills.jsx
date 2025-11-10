import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-sm hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
