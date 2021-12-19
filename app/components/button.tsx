import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import { Spinner } from "~/components/spinner";

import { commonStyles } from "~/shared/components/commonStyles";

export type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  type = "button",
  className,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        "shadow-2xl text-sm font-medium inline-flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-600 text-white",
        commonStyles,
        className,
      )}
      {...rest}
    >
      <span className={clsx(isLoading && "opacity-0")}>{children}</span>

      {isLoading && <Spinner className="absolute" />}
    </button>
  );
};
