const Skills = () => {
  const skillCategories = [
    {
      title: "Testing",
      skills: ["Manual Testing", "Automated Testing", "Test Planning", "Bug Tracking", "Test Case Development"]
    },
    {
      title: "Tools",
      skills: ["JIRA", "TestRail", "Selenium", "Postman", "Git"]
    },
    {
      title: "Technical",
      skills: ["JavaScript", "Python", "SQL", "API Testing", "Performance Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-light mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;