import { Outlet } from "remix";

import { Article } from "~/types/article";

import { DefaultLayout } from "~/layouts/default";

import { Button } from "~/components/button";
import { Modal } from "~/components/modal";

import { ArticleCard } from "./components/article-card";
import { Sort } from "./components/sort";
import { Search } from "./components/search";

type HomeFeatureProps = {
  articles: Article[];
};

export const HomeFeature = ({ articles }: HomeFeatureProps) => {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap sm:flex-nowrap sm:justify-between mt-5">
        <Search />

        <Sort />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button>Load more</Button>
      </div>

      {/* <Modal> */}
      <Outlet />
      {/* </Modal> */}
    </DefaultLayout>
  );
};
