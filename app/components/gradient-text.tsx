import clsx from "clsx";

type GradientTextProps = {
  className?: string;
  children?: React.ReactNode;
};

export const GradientText = ({ className, children }: GradientTextProps) => {
  return (
    <h1
      className={clsx(
        "text-xl md:text-3xl mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-600",
        className,
      )}
    >
      {children}
    </h1>
  );
};
