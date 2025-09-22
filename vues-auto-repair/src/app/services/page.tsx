import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Oil Change & Filter",
    description: "Regular oil changes keep your engine running smoothly and extend its life. We use high-quality oils and filters.",
    price: "$39.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Brake Service",
    description: "From brake pad replacement to complete brake system overhauls. Your safety is our priority.",
    price: "$149.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Engine Diagnostics",
    description: "Modern computer diagnostics to identify and fix engine issues quickly and accurately.",
    price: "$89.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Tire Services",
    description: "Tire rotation, balancing, alignment, and replacement. We carry all major tire brands.",
    price: "$24.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "AC Service",
    description: "Keep cool with our comprehensive AC inspection, repair, and recharge services.",
    price: "$79.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Transmission Service",
    description: "Transmission fluid changes, repairs, and rebuilds to keep your vehicle shifting smoothly.",
    price: "$299.99",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of automotive services to keep your vehicle running at its best. 
          All work is backed by our satisfaction guarantee.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <section className="bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-700">
                Our ASE-certified mechanics have years of experience and ongoing training 
                to handle all makes and models.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
              <p className="text-gray-700">
                We use only OEM or high-quality aftermarket parts that meet or exceed 
                manufacturer specifications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-gray-700">
                All our work comes with a comprehensive warranty for your peace of mind 
                and protection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">
                No hidden fees or surprises. We provide detailed estimates and explain 
                all work before we begin.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}