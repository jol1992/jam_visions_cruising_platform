import type { FC } from "react";

interface CallButtonProps {
  label: string;
}

export const CallToActionButton: FC<CallButtonProps> = ({ label }) => {
  return (
    <div>
      <button className="action_button">{label}</button>
    </div>
  );
};
