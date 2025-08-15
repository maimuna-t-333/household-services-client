import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#DED3C4] py-12 px-4 sm:px-6 md:px-16 ">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start ">
        {/* Contact Info */}
        
        <div className="flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl  font-bold mb-10 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6 text-xl font-semibold leading-relaxed">
            Have questions or want to book a service? Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold">Email:</span> support@fixify.com</p>
            <p><span className="font-semibold">Phone:</span> +880 1234 567890</p>
            <p><span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-md p-6 sm:p-10">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-outline"
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline w-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
