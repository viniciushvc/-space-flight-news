import invariant from "tiny-invariant";

import { http } from "~/services/http";

export const getArticle = async (id?: string) => {
  invariant(id, "Please provide an id");

  const { data } = await http.get(`/articles/${id}`);

  return data;
};
