import React from "react";

import "../styles/ProgressBar.css";
function ProgressBar(props) {
  const { progress } = props;
  const percentageNumStyle = {
    marginLeft: progress > 0 ? `${progress - 5}%` : `${progress}%`
  };
  return (
    <div>
      <div className="ProgressBar">
        <div className="bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div
        className="progress"
        style={progress < 100 ? percentageNumStyle : { textAlign: "center" }}
      >
        {progress <= 100 ? (
          <p>{props.progress}%</p>
        ) : (
          <p className="warning">You have exceeded your daily goal</p>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
