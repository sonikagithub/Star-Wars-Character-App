import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ next, prev, onNext, onPrev }) => (
  <div className="flex justify-center gap-4 mt-6">
    <button
      disabled={!prev}
      onClick={onPrev}
      className="px-4 py-4 bg-gray-300 rounded-full disabled:opacity-50 flex items-center gap-2"
    >
      <FaArrowLeft />
    </button>
    <button
      disabled={!next}
      onClick={onNext}
      className="px-4 py-4 bg-gray-300 text-black rounded-full disabled:opacity-50 flex items-center gap-2"
    >
      <FaArrowRight />
    </button>
  </div>
);

export default Pagination;