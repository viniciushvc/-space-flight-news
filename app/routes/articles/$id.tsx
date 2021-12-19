import { LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { Article } from "~/types/article";

import { ArticlesFeature } from "~/features/articles";
import { getArticle } from "~/features/articles/articles.api";
import { ArticlesTypes } from "~/features/articles/articles.types";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    article: await getArticle(params.id),
  };
};

type MetaDataType = {
  data: {
    article: Article;
  };
};

export const meta: MetaFunction = ({ data }: MetaDataType) => {
  return {
    title: `${data.article.title} | Space Flight News`,
    "og:title": `${data.article.title} | Space Flight News`,
    "og:description": data.article.summary,
    "og:image": data.article.imageUrl,
    "og:url": `https://space-flight-news.vercel.app/articles/${data.article.id}`,
  };
};

const ArticlesPage = () => {
  const { article } = useLoaderData<ArticlesTypes.LoaderData>();

  return <ArticlesFeature article={article} />;
};

export default ArticlesPage;
