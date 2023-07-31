import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <CirclesWithBar
        height="150"
        width="150"
        color="#750075"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
}
