import React, { useState, useEffect } from "react";

function MyComponent7() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Window Width : {width}px</p>
      <p>Window Height : {height}px</p>
    </>
  );
}

export default MyComponent7;
