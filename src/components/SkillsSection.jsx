import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", level: 90, category: "programming" },
  { name: "C/C++", level: 90, category: "programming" },
  { name: "JavaScript", level: 80, category: "programming" },
  { name: "SQL", level: 85, category: "programming" },
  { name: "Machine Learning", level: 80, category: "ai" },
  { name: "Deep Learning", level: 65, category: "ai" },
  { name: "NLP", level: 70, category: "ai" },
  { name: "TensorFlow/Keras", level: 80, category: "ai" },
  { name: "Pandas/Numpy", level: 90, category: "ai" },
  { name: "GANs & RNNs", level: 65, category: "ai" },
  { name: "React.js", level: 65, category: "webdev" },
  { name: "Next.js", level: 65, category: "webdev" },
  { name: "Flask", level: 85, category: "webdev" },
  { name: "HTML/CSS", level: 90, category: "webdev" },
  { name: "Azure", level: 70, category: "cloud" },
  { name: "AWS", level: 70, category: "cloud" },
  { name: "Docker", level: 80, category: "cloud" },
  { name: "CI/CD Pipelines", level: 65, category: "cloud" },
  { name: "Ansible", level: 65, category: "cloud" },
  { name: "Git/GitHub", level: 90, category: "tools" },
];

const categories = [
  { key: "programming", label: "Programming" },
  { key: "ai", label: "AI / Data Science" },
  { key: "webdev", label: "Web Development" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  // Ensure valid fallback
  const validCategory = categories.find(c => c.key === activeCategory)
    ? activeCategory
    : "programming";

  const filteredSkills = skills.filter(
    (skill) => skill.category === validCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                validCategory === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
