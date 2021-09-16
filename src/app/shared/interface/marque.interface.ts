import {Model} from './model.interface';

export interface Marque {
  id: number;
  name: string;
  logo: string;
  models: Model[];
}
