export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Git", "Vite"];
  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
