import React$1 from 'react';

interface IButtonProps {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "tertiary";
    children: React.ReactNode;
}

declare const Button: React$1.FC<IButtonProps>;

interface IIconProps {
    name: string;
    className?: string;
    size?: "small" | "medium" | "large";
    color?: string;
}

declare const Icon: React$1.FC<IIconProps>;

export { Button, type IButtonProps, type IIconProps, Icon };
//# sourceMappingURL=types.d.ts.map
