import { Injectable } from '@angular/core';
import {environment as env} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../interface/model.interface';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private apiUrl = env.apiUrl + 'model';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Model[]> {
    return this.http.get<Model[]>(this.apiUrl + 's');
  }

}
