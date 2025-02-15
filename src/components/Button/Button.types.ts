export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}
