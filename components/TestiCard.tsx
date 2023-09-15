import React from "react";

const TestiCard = ({ testi }) => {
  return (
    <div className="mb-12 md:mb-0 bg-white py-4 px-4 rounded-2xl drop-shadow-2xl transition ease-out duration-1000 hover:transition hover:ease-in hover:duration-500 hover:scale-105">
      <div className="mb-6 flex justify-center">
        <img
          src={testi.avatar}
          className="w-32 rounded-full shadow-lg dark:shadow-black/20"
        />
      </div>
      <h5 className="mb-2 text-lg font-bold">{testi.username}</h5>
      <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
        {testi.role}
      </h6>
      <p className="mb-4">
        {testi.message}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          className="inline-block w-6"
        >
          <path
            fill="currentColor"
            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
          />
        </svg>
      </p>
    </div>
  );
};

export default TestiCard;
