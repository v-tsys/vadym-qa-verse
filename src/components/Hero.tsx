const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 animate-fade-in">
          Vadym Tsys
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-custom mb-8 animate-fade-in">
          QA Engineer at Plarium
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in">
          Dedicated to ensuring software quality and delivering exceptional user experiences
        </p>
        <a
          href="#contact"
          className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg transition-colors animate-fade-in"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;