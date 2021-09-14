import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Annonce} from '../interface/annonce.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

private apiUrl = env.apiUrl;


  constructor(private http: HttpClient) { }


  findAll(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl + 'classifiedAd/findall');
  }



}
