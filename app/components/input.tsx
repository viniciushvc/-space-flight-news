import { InputHTMLAttributes } from "react";

import clsx from "clsx";

import { commonStyles } from "~/shared/components/commonStyles";

type InputProps = {
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  type,
  value,
  onChange,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={clsx("border border-gray-300", commonStyles, className)}
      {...rest}
    />
  );
};
