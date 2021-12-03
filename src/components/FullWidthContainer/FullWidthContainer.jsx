import React from "react";

export const FullWidthContainer = (props) => {
  const { children } = props;

  return (
    <div className='flex flex-col flex-grow container w-100 min-h-screen'>
      {children}
    </div>
  );
};
