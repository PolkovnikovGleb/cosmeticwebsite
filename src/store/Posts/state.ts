import { Post } from '../../type/typePost';

export type State = {
  posts: Post[];
  error: string | undefined;
};
