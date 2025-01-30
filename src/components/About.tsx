const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            As a QA Engineer at Plarium, I specialize in ensuring the highest quality standards for gaming software. With a keen eye for detail and a passion for quality assurance, I work diligently to identify and resolve potential issues before they reach our users.
          </p>
          <p className="text-lg text-gray-700">
            My expertise includes automated testing, test case development, and close collaboration with development teams to maintain and improve software quality. I'm committed to continuous learning and staying updated with the latest QA methodologies and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;