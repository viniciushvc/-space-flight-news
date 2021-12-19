import { LoaderFunction, useLoaderData } from "remix";

import { HomeFeature } from "~/features/home";

import { getArticles } from "~/features/home/home.api";

import { HomeTypes } from "~/features/home/home.types";

export const loader: LoaderFunction = async () => {
  return {
    articles: await getArticles({}),
  };
};

const HomePage = () => {
  const { articles } = useLoaderData<HomeTypes.LoaderData>();

  return <HomeFeature articles={articles} />;
};

export default HomePage;
