import { IButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button {...props} className={styles.button}>
      Click me
    </button>
  );
};

export default Button;
