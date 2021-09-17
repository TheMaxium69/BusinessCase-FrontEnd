import {Marque} from './marque.interface';
import {Model} from './model.interface';
import {Carburant} from './carburant.interface';
import {Garage} from './garage.interface';
import {User} from './user.interface';

export interface Annonce {
  id: number;
  title: string;
  description: string;
  year: number;
  kilometrage: number;
  price: number;
  createdAt: Date;
  marque: Marque;
  model: Model;
  carburant: Carburant;
  garage: Garage;
  user: User;
}
