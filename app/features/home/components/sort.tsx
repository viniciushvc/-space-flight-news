import clsx from "clsx";

import { Select } from "~/components/select";

type CardProps = {
  className?: string;
};

export const Sort = ({ className }: CardProps) => {
  const options = [
    {
      label: "Newest",
      value: "DESC",
    },
    {
      label: "Older",
      value: "ASC",
    },
  ];

  return (
    <Select
      options={options}
      className={clsx("w-full sm:w-auto mt-5 sm:mt-0", className)}
    />
  );
};
