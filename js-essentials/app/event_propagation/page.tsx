"use client";

import { useEffect, useLayoutEffect } from "react";

const Observer = () => {
  const topParent = () => {
    console.log("grand parent");
  };
  const child = (e: any) => {
    console.log("child");
    e?.stopPropagation();
  };
  useEffect(() => {
    const el = document.getElementById("parent");
    el?.addEventListener(
      "click",
      (e: any) => {
        console.log("parent");
        e?.stopPropagation();
      },
      { capture: true }
    );
  }, []);
  useLayoutEffect(() => {
    document.addEventListener("DOMContentLoaded", (e: any) =>
      console.log("DOMContentLoaded event from document")
    );
    window.addEventListener("DOMContentLoaded", (e: any) =>
      console.log("DOMContentLoaded event from window")
    );
  }, []);
  return (
    <div onClick={topParent}>
      <div id="parent" className="p-2 bg-blue-500 text-white rounded-md">
        <button
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={child}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Observer;
