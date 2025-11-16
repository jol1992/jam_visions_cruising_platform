import type { FC } from "react";

interface CallButtonProps {
  label: string;
}

export const CallToActionButton: FC<CallButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};
