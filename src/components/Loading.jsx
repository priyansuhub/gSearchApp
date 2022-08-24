import React from "react";
import { Audio } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </div>
  );
};
