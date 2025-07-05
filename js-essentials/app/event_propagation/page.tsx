"use client";

import { useEffect } from "react";

const Observer = () => {
  // const parent = () => {
  useEffect(() => {
    const el = document.getElementById("parent");
    el?.addEventListener(
      "click",
      (e: any) => {
        console.log("parent");
        e?.stopPropagation()

      },
      true
    );
  }, []);
  // }
  const topParent = () => {
    console.log("grand parent");
  };
  const child = (e: any) => {
    console.log("child");
    // e?.stopPropagation()
  };
  return (
    <div onClick={topParent}>
      <div id="parent">
        <button onClick={child}>submit</button>
      </div>
    </div>
  );
};

export default Observer;
