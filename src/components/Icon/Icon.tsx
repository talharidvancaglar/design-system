import React from "react";
import { IIconProps } from "./Icon.types";
import styles from "./Icon.module.scss";

const Icon: React.FC<IIconProps> = ({ name, className }) => {
  return <div className={styles.icon}>Icon</div>;
};

export { Icon };
