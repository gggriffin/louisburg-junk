import React from "react";

export const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL +
          "/images/louisburg-junk-removal-llc-banner-image.jpg"
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className='h-40 flex w-100 justify-center'
    >
      <h1 className='text-white font-title-text mt-auto text-3xl pb-2 opacity-90'>
        Louisburg Junk Removal LLC
      </h1>
    </div>
  );
};
