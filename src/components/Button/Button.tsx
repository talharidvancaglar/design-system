import React from "react";
import { IButtonProps } from "./Button.types";
import style from "./Button.module.scss";

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button {...props} className={style.button}>
      Click me
    </button>
  );
};

export { Button };
