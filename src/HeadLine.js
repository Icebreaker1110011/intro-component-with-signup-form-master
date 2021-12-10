import React from "react";
import "./css/HeadLine.css";

const HeadLine = () => {
  return (
    <div className="header">
      <ul className="header-headline">
        <li>Learn to code by</li>
        <li>watching others</li>
      </ul>
      <ul className="header-underline">
        <li>See how experienced developers solve problems in real-time. </li>
        <li>Watching scripted tutorials is great, but understanding </li>
        <li>how developers think is invaluable.</li>
      </ul>
    </div>
  );
};

export default HeadLine;
