import React, { useState } from "react";

const StatusBar = ({ percent }) => {
  const [percentComplete, setPercentComplete] = useState(percent);

  return (
    <div className="w-full h-6 rounded-full bg-c3">
      <div
        className={"h-6 rounded-full bg-c1 " + "w-[" + percentComplete + "%]"}
      ></div>
    </div>
  );
};

export default StatusBar;
