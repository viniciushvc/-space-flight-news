type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="container max-w-5xl mx-auto px-3">{children}</div>;
};
