import React, { useState } from "react";
import withCount from "../hoc/withCount";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hover Count : {count}</h2>
    </div>
  );
};

export default withCount(HoverCounter);
