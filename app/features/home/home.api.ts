import { http } from "~/services/http";

type GetArticlesParams = {
  page?: number;
  limit?: number;
  sort?: "ASC" | "DESC";
};

export const getArticles = async ({
  limit = 20,
  sort = "DESC",
}: GetArticlesParams) => {
  const { data } = await http.get("/articles", {
    params: {
      _limit: limit,
      _start: 0,
      _sort: `publishedAt:${sort}`,
      // _contains: "title_contains=nasa",
    },
  });

  return data;
};
