import { Injectable } from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Marque} from '../interface/marque.interface';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private apiUrl = env.apiUrl + 'marque';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiUrl + 's');
  }

}
