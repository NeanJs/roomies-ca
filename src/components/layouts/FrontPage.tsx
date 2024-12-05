import React from "react";
import { BodyWrapper, ContentWrapper } from "@/components/Wrappers"; // Assuming you have Wrapper and ContentWrapper
import {
  FaBed,
  FaArrowRight,
  FaCommentDots,
  FaHandshake,
  FaSearch,
  FaUserPlus,
  FaUsers,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const FrontPage: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Roomies helped me find the perfect roommate in no time! The search process was so easy and smooth.",
      author: "Jane Doe",
      role: "Roommate, Vancouver",
    },
    {
      quote:
        "I found a great room that suited my budget and preferences. Highly recommend Roomies!",
      author: "John Smith",
      role: "Room Seeker, Vancouver",
    },
  ];

  const features = [
    {
      icon: <FaUsers className="text-4xl text-blue-600 mx-auto" />,
      head: "Find Roommates",
      subhead: "Browse profiles and connect with potential roommates.",
    },
    {
      icon: <FaBed className="text-4xl text-blue-600 mx-auto" />,
      head: "Search Rooms",
      subhead: "Find available rooms that match your preferences.",
    },
    {
      icon: <FaCommentDots className="text-4xl text-blue-600 mx-auto" />,
      head: "Chat with Roommates",
      subhead: "Message potential roommates directly through the app.",
    },
  ];

  const howItWorks = [
    {
      icon: <FaUserPlus className="text-4xl text-blue-600 mx-auto" />,
      head: "Step 1",
      subhead: "Create your profile and add your preferences.",
    },
    {
      icon: <FaSearch className="text-4xl text-blue-600 mx-auto" />,
      head: "Step 2",
      subhead: "Search for available rooms or roommates.",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-600 mx-auto" />,
      head: "Step 3",
      subhead: "Connect and arrange the next steps.",
    },
  ];
  return (
    <BodyWrapper>
      {/* Main Content Wrapper */}
      <ContentWrapper className="w-full front-page">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[90vh] w-full relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Roomies
            </h1>
            <p className="mt-4 text-lg text-white">
              Find your perfect roommate or the ideal room to rent, hassle-free.
            </p>

            {/* Search Bar */}
            <div className="mt-8 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 w-64 text-lg rounded-md focus:outline-none focus:border-blue-600"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition duration-200">
                Search
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Key Features</h2>
            <p className="mt-2 text-lg text-gray-700">
              Discover how Roomies helps you find the perfect match.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-black">
                  {feature.head}
                </h3>
                <p className="mt-2 text-gray-600">{feature.subhead}</p>
              </div>
            ))}
          </div>
        </section>
        {/* About Us Section */}
        <section className="py-16 bg-white w-full">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900">About Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                Roomies is designed to simplify the search for a roommate or
                room. Whether you're moving to a new city or just need a place
                to stay, we make it easy to connect with others in your area.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://via.placeholder.com/500" // Replace with your image URL
                alt="Roomies"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </section>

        {/* // Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              What Our Users Say
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Real stories from our happy users.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md"
              >
                <FaQuoteLeft className="text-3xl text-gray-400 mx-auto" />
                <p className="text-lg text-gray-700">"{testimonial.quote}"</p>
                <FaQuoteRight className="text-3xl text-gray-400 mx-auto mt-4" />
                <p className="mt-4 font-semibold text-black">
                  {testimonial.author}
                </p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            How It Works
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-around items-center">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center mt-8 sm:mt-0">
                {step.icon}
                <h3 className="mt-4 text-xl font-semibold text-black">
                  {step.head}
                </h3>
                <p className="mt-2 text-gray-600">{step.subhead}</p>
              </div>
            ))}
          </div>
        </section>
        {/* // Call to Action Section */}
        <section className="py-16 bg-blue-600 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Find Your Perfect Roommate?
          </h2>
          <p className="mt-4 text-lg">Start your journey with Roomies today!</p>
          <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold text-lg rounded-md hover:bg-gray-200 transition duration-300">
            Get Started <FaArrowRight className="inline ml-2" />
          </button>
        </section>
        {/* // Contact Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Contact Us</h2>
            <p className="mt-2 text-lg text-gray-700">
              Have any questions? We'd love to hear from you!
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <textarea
                placeholder="Your Message"
                className="mt-6 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 w-full">
          <div className="text-center">
            <p>&copy; 2024 Roomies. All rights reserved.</p>
          </div>
        </footer>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default FrontPage;
