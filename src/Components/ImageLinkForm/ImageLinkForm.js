import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="grid grid-cols-2 mx-44 mt-14 mb-12 border-2 ">
      <div className="flex flex-wrap border-2 justify-items-start ">
        <h1 className="font-bold text-left text-7xl">
          Recognise faces with the power of AI and React.js
        </h1>
        <p className="text-left text-2xl text-slate-50">
          This magic brain will detect faces in your pictures. Try it now!
        </p>
        <div className="flex justify-items-start border-2 w-full">
          <input type="text" className="rounded-full py-2 w-11/12" />
          <button className="bg-[#A6BBF3] rounded-full text-slate-50 text-sm w-2/12">
            Detect
          </button>
        </div>
      </div>
      <div className="border-2">
        <div className="w-14 h-14 bg-white	"></div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
