import { Product } from '../../type/typeProducts';

export type State = {
  products: Product[];
  error: string | undefined;
};
