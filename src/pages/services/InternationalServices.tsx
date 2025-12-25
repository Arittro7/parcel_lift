
import { FaGlobe, FaShieldAlt, FaSearchLocation, FaMoneyBillWave } from "react-icons/fa";

export default function InternationalServices() {
  const services = [
    {
      icon: <FaGlobe className="text-blue-600 text-4xl" />,
      title: "Worldwide Reach",
      description: "Ship parcels to over 200 countries with trusted global partners.",
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-4xl" />,
      title: "Customs Clearance",
      description: "We handle all customs paperwork and compliance for smooth delivery.",
    },
    {
      icon: <FaSearchLocation className="text-purple-600 text-4xl" />,
      title: "End-to-End Tracking",
      description: "Track your parcel from pickup to final destination in real-time.",
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-600 text-4xl" />,
      title: "Competitive Rates",
      description: "Affordable international shipping without compromising reliability.",
    },
  ];

  return (
    <>
      {/* <Helmet>
        <title>International Services | Parcel Lift</title>
      </Helmet> */}
      <div className="container mx-auto py-16 px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">
            International Parcel Services
          </h1>
          <p className="text-lg  max-w-2xl mx-auto">
            Ship your parcels worldwide with reliable partners. We handle customs clearance,
            provide end-to-end tracking, and offer competitive international rates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Explore International Shipping
          </button>
        </div>
      </div>
    </>
  );
}