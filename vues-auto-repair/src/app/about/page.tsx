export default function About() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        {/* Hero Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-12 flex items-center justify-center">
          <p className="text-gray-500">Shop Image</p>
        </div>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, Vue&apos;s Auto Repair began with a simple mission: to provide honest, 
            reliable automotive service at fair prices. What started as a small garage with two 
            mechanics has grown into a full-service facility trusted by thousands of customers.
          </p>
          <p className="text-gray-600">
            We believe in treating every customer like family and every vehicle as if it were our own. 
            This philosophy has earned Vue&apos;s Auto Repair a reputation as the go-to shop in our community.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We never recommend unnecessary repairs and always provide honest assessments 
                of your vehicle&apos;s needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only the best parts and employ skilled technicians who take pride 
                in their work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                Every repair comes with a detailed explanation and upfront pricing, 
                so you know exactly what you&apos;re paying for.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We&apos;re proud to be part of this community and give back through local 
                sponsorships and charity work.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Photo</p>
              </div>
              <h3 className="font-semibold">John Smith</h3>
              <p className="text-gray-600">Owner & Master Technician</p>
              <p className="text-sm text-gray-500 mt-2">20+ years experience</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Photo</p>
              </div>
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Lead Mechanic</p>
              <p className="text-sm text-gray-500 mt-2">ASE Certified</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500">Photo</p>
              </div>
              <h3 className="font-semibold">Sarah Williams</h3>
              <p className="text-gray-600">Service Manager</p>
              <p className="text-sm text-gray-500 mt-2">Customer service expert</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Certifications & Awards</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-semibold">ASE Certified</h3>
              <p className="text-sm text-gray-600">National Institute for Automotive Service Excellence</p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-semibold">Best Auto Shop 2023</h3>
              <p className="text-sm text-gray-600">Local Business Awards</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-semibold">BBB A+ Rating</h3>
              <p className="text-sm text-gray-600">Better Business Bureau</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}