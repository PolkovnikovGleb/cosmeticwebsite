import { News } from '../../type/typeNews';

export type State = {
  news: News[];
  error: string | undefined;
};
