import React from "react";

const testimonials = [
  {
    id: 1,
    video: "/04.mp4",
  },
  {
    id: 2,
    video: "/02.mp4",
  },
  {
    id: 3,
    video: "/03.mp4",
  },
  {
    id: 4,
    video: "/01.mp4",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Real success stories from professionals trained at ILH
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <video
                controls
                preload="metadata"
                className="w-full h-auto"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
