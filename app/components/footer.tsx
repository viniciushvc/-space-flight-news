export const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-gray-500 text-sm">
      <span className="my-10">
        Made with
        <a
          href="https://remix.run/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-purple-500"
        >
          {" Remix "}
        </a>
        and ❤️ by{" "}
        <a
          href="https://github.com/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
          className="text-purple-500"
        >
          Vinicius Vicentini
        </a>
      </span>
    </footer>
  );
};
