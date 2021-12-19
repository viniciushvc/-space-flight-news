import { Article } from "~/types/article";

export namespace HomeTypes {
  export type LoaderData = {
    articles: Article[];
  };
}
