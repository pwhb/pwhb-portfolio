import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div>
      <div className="px-5 mx-auto max-w-md md:hidden">
        <p className="text-4xl md:text-6xl mb-10 font-semibold">{title}</p>
      </div>
      <div className="hidden px-0 max-w-4xl mx-auto md:block">
        <p className="text-4xl md:text-6xl mb-10 font-semibold">{title}</p>
      </div>
    </div>
  );
};
