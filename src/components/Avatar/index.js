import clsx from "clsx";
import React from "react";

function Avatar({ src, width, className, enableBorder }) {
  return (
    <div
      className={clsx(
        "rounded-full overflow-hidden",
        className,
        enableBorder && "border-[4px] border-blue-500"
      )}
    >
      <img src={src} alt="" width={width || "43px"} />
    </div>
  );
}

export default Avatar;
