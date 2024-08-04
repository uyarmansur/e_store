import React from "react";
import * as Icons from "./Icons";

function Icon({ icon, ...rest }) {
  if (!icon || !Icons?.[icon]) return;

  const IconElement = Icons?.[icon];

  return <IconElement {...rest} />;
}

export default Icon;
