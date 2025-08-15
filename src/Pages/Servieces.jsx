import React from "react";

const Services = () => {
  // Temporary dummy data (replace with MongoDB later)
  const servicesData = [
    {
      id: 1,
      title: "Plumbing",
      description: "Expert plumbers to fix leaks, install fixtures, and handle emergencies.",
      image: "https://cdn.pixabay.com/photo/2017/08/23/10/22/pipes-2672184_1280.jpg"
    },
    {
      id: 2,
      title: "Electrical",
      description: "Certified electricians for wiring, repairs, and new installations.",
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/36/broken-1845107_1280.jpg"
    },
    {
      id: 3,
      title: "Cleaning",
      description: "Professional cleaning services for homes, offices, and buildings.",
      image: "https://cdn.pixabay.com/photo/2014/02/17/13/34/cleaning-268126_1280.jpg"
    },
    {
      id: 4,
      title: "Painting",
      description: "Interior and exterior painting with high-quality finishes.",
      image: "https://cdn.pixabay.com/photo/2015/11/09/09/08/brush-1034901_1280.jpg"
    },
    {
      id: 5,
      title: "Carpentry",
      description: "Custom furniture, repairs, and woodwork by skilled carpenters.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/01/25/adult-1866533_1280.jpg"
    },
    {
      id: 6,
      title: "Gardening",
      description: "Lawn care, landscaping, and plant maintenance services.",
      image: "https://cdn.pixabay.com/photo/2017/11/29/11/03/ecology-2985781_1280.jpg"
    }
  ];

  return (
    <div className="py-12 px-6 md:px-16 bg-[#DED3C4]">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            <figure className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover transform group-hover:scale-110 transition duration-300"
              />
            </figure>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="btn btn-outline w-full">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
