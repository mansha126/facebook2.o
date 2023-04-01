import React from "react";
import { Tooltip } from "..";

function Avatar({ src, width }) {
  return (
    <Tooltip title="Account">
      <div className="rounded-full overflow-hidden">
        <img src={src} alt="" width={width || "43px"} />
      </div>
    </Tooltip>
  );
}

export default Avatar;
