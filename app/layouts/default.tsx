import { Hero } from "~/components/hero";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Hero>Space Flight News</Hero>

      <main>
        <Container>{children}</Container>
      </main>

      <Footer />
    </>
  );
};
