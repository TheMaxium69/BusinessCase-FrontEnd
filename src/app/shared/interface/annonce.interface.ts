import {Marque} from './marque.interface';
import {Model} from './model.interface';

export interface Annonce {
  id: number;
  title: string;
  description: string;
  year: number;
  kilometrage: number;
  price: number;
  created_at: Date;
  marque: Marque;
  model: Model;
  carburant: any;
  garage: any;
  user: any;
}
