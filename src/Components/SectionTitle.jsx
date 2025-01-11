import React from "react";

export default function SectionTitle({ heading, subHeading }) {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <p className="text-orange-400 text-sm font-semibold">
        --- {subHeading} ---
      </p>
      <div className="divider"></div>
      <p className="text-4xl font-bold uppercase">{heading}</p>
      <div className="divider"></div>
    </div>
  );
}
