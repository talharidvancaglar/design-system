import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Temel Button
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "medium",
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    children: "Disabled Button",
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "medium",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};
