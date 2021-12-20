import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src="/img/rocket.svg"
      alt="Rocket icon."
      className={clsx("w-20 h-20 sm:w-32 sm:h-32", className)}
      loading="lazy"
    />
  );
};
