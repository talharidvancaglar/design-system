import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: ["home", "search", "settings", "user"], // mevcut icon isimlerini buraya ekleyin
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "color",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Temel Icon
export const Default: Story = {
  args: {
    name: "home",
    size: "medium",
  },
};

// Farklı Boyutlar
export const Small: Story = {
  args: {
    name: "home",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    name: "home",
    size: "large",
  },
};

// Renkli Icon
export const Colored: Story = {
  args: {
    name: "home",
    size: "medium",
    color: "#FF0000",
  },
};
