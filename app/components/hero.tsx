import clsx from "clsx";

import { Logo } from "~/components/logo";
import { GradientText } from "~/components/gradient-text";

type HeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Hero = ({ className, children }: HeaderProps) => {
  return (
    <header className={clsx("flex flex-col items-center mt-5", className)}>
      <Logo />

      <GradientText className="select-none">{children}</GradientText>

      <hr className="w-full border-b border-gray-200 mt-5" />
    </header>
  );
};
