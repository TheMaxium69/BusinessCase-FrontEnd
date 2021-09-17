import {User} from './user.interface';

export interface Garage {
  id: number;
  name: string;
  adresse: string;
  phoneNumber: number;
  user: User;
  createdAt: Date;
}
