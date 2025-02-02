import React from "react";
import "./Loader.css";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin
        visible={true}
        width="200"
        color="#ffffff"
        ariaLabel="infinity-spin-loading"
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
