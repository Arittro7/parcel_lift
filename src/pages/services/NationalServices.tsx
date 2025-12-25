
import { FaTruck, FaClock, FaShieldAlt, FaDollarSign } from "react-icons/fa";

export default function NationalServices() {
  const services = [
    {
      icon: <FaTruck className="text-blue-600 text-4xl" />,
      title: "Fast Delivery",
      description: "Same-day and next-day delivery options available nationwide.",
    },
    {
      icon: <FaClock className="text-green-600 text-4xl" />,
      title: "On-Time Guarantee",
      description: "We ensure your parcels arrive exactly when promised.",
    },
    {
      icon: <FaShieldAlt className="text-purple-600 text-4xl" />,
      title: "Secure Handling",
      description: "Every package is tracked and handled with care.",
    },
    {
      icon: <FaDollarSign className="text-yellow-600 text-4xl" />,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising service quality.",
    },
  ];

  return (
    <>
      {/* <Helmet>
        <title>National Services | Parcel Lift</title>
      </Helmet> */}
      <div className="container mx-auto py-16 px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            National Parcel Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy fast, secure, and affordable parcel delivery across the country.
            Choose from same-day, next-day, or standard delivery options with full tracking.
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
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </>
  );
}