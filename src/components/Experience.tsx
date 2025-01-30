const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#E7F0FD] to-[#0EA5E9]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0EA5E9] mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/90 p-8 rounded-lg shadow-lg mb-8 backdrop-blur-sm border border-[#D3E4FD] hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
                alt="Testing tools"
                className="w-16 h-16 rounded object-cover mr-4 border-2 border-[#0EA5E9]"
              />
              <div>
                <h3 className="text-xl font-bold text-[#33C3F0]">QA Engineer</h3>
                <p className="text-[#0EA5E9]/80">Plarium</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Develop and execute comprehensive test plans and test cases</li>
              <li>Perform functional, regression, and performance testing</li>
              <li>Collaborate with developers to resolve identified issues</li>
              <li>Implement and maintain automated test frameworks</li>
              <li>Participate in agile ceremonies and provide quality-related insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;