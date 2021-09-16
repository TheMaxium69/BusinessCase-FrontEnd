import { Injectable } from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {

  private apiUrl = env.apiUrl + 'carburant';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 's');
  }

}
