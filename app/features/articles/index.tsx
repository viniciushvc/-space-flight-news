import { Link } from "remix";

import dayjs from "dayjs";

import { DefaultLayout } from "~/layouts/default";

import { Article } from "~/types/article";

type ArticlesFeatureProps = {
  article?: Article;
};

export const ArticlesFeature = ({ article }: ArticlesFeatureProps) => {
  const formattedDate = dayjs(article?.publishedAt).format("MM/DD/YYYY");

  return (
    <DefaultLayout>
      <Link
        to="/"
        className="block text-lg text-gray-700 hover:text-purple-500 mt-5"
      >
        ← Back to home
      </Link>

      <img
        src={article?.imageUrl}
        alt={article?.title}
        className="w-full h-[500px] object-cover rounded-lg shadow-md mt-5"
      />

      <div className="text-sm text-gray-600 mt-5">{formattedDate}</div>

      <h1 className="text-3xl font-bold">{article?.title}</h1>

      <p className="my-5">{article?.summary}</p>

      <div>
        <strong>Source: </strong>

        <a
          href={article?.url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-purple-500"
        >
          {article?.newsSite}
        </a>
      </div>
    </DefaultLayout>
  );
};
