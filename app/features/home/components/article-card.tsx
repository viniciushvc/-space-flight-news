import { Link } from "remix";

import clsx from "clsx";

import dayjs from "dayjs";

import { Article } from "~/types/article";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  article?: Article;
};

export const ArticleCard = ({ article, className, onClick }: CardProps) => {
  const handleClick = () => {
    !!onClick && onClick();
  };

  // mm/dd/yyyy dayjs
  const formattedDate = dayjs(article?.publishedAt).format("MM/DD/YYYY");

  return (
    <Link to={`/articles/${article?.id}`}>
      <article
        className={clsx(
          "bg-white shadow-2xl rounded-lg tracking-wide",
          className,
        )}
      >
        <div className="md:flex-shrink-0">
          <img
            src={article?.imageUrl}
            alt={article?.title}
            className="w-full h-64 object-cover rounded-lg rounded-b-none"
            loading="lazy"
          />
        </div>

        <div className="px-4 py-2 mt-2">
          <div className="flex justify-between">
            <div className="text-xs text-gray-500">{article?.newsSite}</div>

            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>

          <h2 className="font-bold text-2xl text-gray-800">{article?.title}</h2>
        </div>

        <div className="flex justify-center">
          <Link to="/" className="text-blue-500 text-xs py-5">
            Show More
          </Link>
        </div>
      </article>
    </Link>
  );
};
