import { Article } from '../../type/typeArticle';

export type State = {
  articles: Article[];
  error: string | undefined;
};
