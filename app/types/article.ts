export type Article = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
};

export type Launch = {
  id: string;
  provider: string;
};

export type Event = {
  id: string;
  provider: string;
};
