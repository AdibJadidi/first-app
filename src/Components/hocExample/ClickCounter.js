import React, { useState } from "react";
import withCount from "../hoc/withCount";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onClick={incrementCount}>Clicked Count : {count}</h2>
    </div>
  );
};

export default withCount(ClickCounter);
