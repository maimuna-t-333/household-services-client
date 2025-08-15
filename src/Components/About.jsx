// import React from "react";

// const About = () => {
//   return (
//     <section className="bg-[#DED3C4] py-16 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Image */}
//         <div className="relative">
//           <img
//             src="https://media.istockphoto.com/id/2205544986/photo/plumber-shaking-hands-with-woman-after-finishing-work-in-kitchen.jpg?s=612x612&w=0&k=20&c=ov2I0-TYpfIlBCxbgA8dbh4-N-CufpQlVXHYLeIq8o4="
//             alt="About Us"
//             className="rounded-2xl shadow-lg w-full object-cover"
//           />
//           <div className="absolute -bottom-6 -right-6 bg-[#555879] text-white p-4 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-bold">10+</h3>
//             <p className="text-sm">Years Experience</p>
//           </div>
//         </div>

//         {/* Text */}
//         <div>
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">
//             About Us
//           </h2>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             We are a dedicated team of professionals providing top-notch home
//             and building services. From plumbing and electrical work to cleaning
//             and gardening, our mission is to deliver reliable, affordable, and
//             high-quality solutions tailored to your needs.
//           </p>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             With years of industry experience, we have built a reputation for
//             excellence and customer satisfaction. Our team is committed to
//             ensuring every project is handled with care, precision, and a
//             customer-first mindset.
//           </p>
//           <button className="btn btn-outline px-6 hover:bg-[#555879]">Learn More</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <section className="bg-[#DED3C4] py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/2205544986/photo/plumber-shaking-hands-with-woman-after-finishing-work-in-kitchen.jpg?s=612x612&w=0&k=20&c=ov2I0-TYpfIlBCxbgA8dbh4-N-CufpQlVXHYLeIq8o4="
            alt="About Us"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-7 -right-2 sm:-bottom-6 sm:-right-6 bg-[#555879] text-white p-3 sm:p-4 rounded-xl shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold">10+</h3>
            <p className="text-xs sm:text-sm">Years Experience</p>
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            About Us
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
            We are a dedicated team of professionals providing top-notch home
            and building services. From plumbing and electrical work to cleaning
            and gardening, our mission is to deliver reliable, affordable, and
            high-quality solutions tailored to your needs.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            With years of industry experience, we have built a reputation for
            excellence and customer satisfaction. Our team is committed to
            ensuring every project is handled with care, precision, and a
            customer-first mindset.
          </p>
          <button className="btn btn-outline px-6 hover:bg-[#555879]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

