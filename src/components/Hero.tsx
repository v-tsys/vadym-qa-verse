const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D3E4FD] via-[#E7F0FD] to-[#0EA5E9]/10">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Professional workspace"
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg mb-6 border-4 border-white"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#0EA5E9] mb-6 animate-fade-in">
          Vadym Tsys
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#33C3F0] mb-8 animate-fade-in">
          QA Engineer at Plarium
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in">
          Dedicated to ensuring software quality and delivering exceptional user experiences
        </p>
        <a
          href="#contact"
          className="bg-[#0EA5E9] hover:bg-[#1EAEDB] text-white px-8 py-3 rounded-lg transition-colors animate-fade-in inline-block shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Hero;