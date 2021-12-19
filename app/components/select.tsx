import { SelectHTMLAttributes } from "react";

import clsx from "clsx";

import { commonStyles } from "~/shared/components/commonStyles";

type SelectProps = {
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  className,
  value,
  placeholder,
  options,
  onChange,
  ...rest
}: SelectProps) => {
  return (
    <select
      className={clsx(
        "border border-gray-300 bg-white focus:shadow-sm",
        commonStyles,
        className,
      )}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {placeholder && (
        <option value="" selected>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
