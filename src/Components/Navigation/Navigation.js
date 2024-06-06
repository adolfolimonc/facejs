import React from "react";
import facejslogo from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <nav className="items-center justify-between flex mx-44 mt-12 border 2">
      <img src={facejslogo} alt="logo" />
      <p className="text-base font-semibold underline cursor-pointer">
        Log out
      </p>
    </nav>
  );
};

export default Navigation;
