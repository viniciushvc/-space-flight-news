import { useState } from "react";

import clsx from "clsx";

import { Input } from "~/components/input";

type CardProps = {
  className?: string;
};

export const Search = ({ className }: CardProps) => {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder="Search"
      defaultValue={String(value)}
      className={clsx("w-full sm:w-auto", className)}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
