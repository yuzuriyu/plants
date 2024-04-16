import React from "react";

const Testimonial = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12 flex-col md:flex-row flex py-12">
      <div className="md:w-[40%] mb-8">
        <p className="font-bold text-center">REVIEWS</p>
        <p className="text-center text-sm md:text-start">
          Shop with confidence by reading customer reviews given by individuals
          who have used Bioomey. Excellent quality and streamlined service are
          both offered here
        </p>
        <p className="text-center">2,479 reviews</p>
      </div>
      <div className="flex-1">
        <div>
          <p className="text-center font-bold mb-12 text-xl md:text-start">
            We adire all our friends at Bloomey, specially the beauties who have
            come to live with us! Great advice when needed, beautifully and
            safetly packaged. Highly recommeneded, it's just the best place for
            healthy plants and great value!
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold">Pamela S.</p>
            <p className="text-xs">Lake Forest, CA</p>
          </div>
          <div className="flex py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
