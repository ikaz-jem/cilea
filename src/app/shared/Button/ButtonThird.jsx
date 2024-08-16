import Button from "shared/Button/Button";
import React from "react";


const ButtonThird = ({
  className = "text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700",
  ...props
}) => {
  return <Button className={`ttnc-ButtonThird ${className}`} {...props} />;
};

export default ButtonThird;
