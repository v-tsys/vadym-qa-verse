const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
                alt="Testing tools"
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-navy-light">QA Engineer</h3>
                <p className="text-slate-custom">Plarium</p>
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