import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Annonce} from '../interface/annonce.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiUrl = env.apiUrl + 'annonce';
  public header = {
    Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzE3MDkyNDEsImV4cCI6MTYzMTcxMjg0MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfUFJPIl0sInVzZXJuYW1lIjoibWF4aW1lLnRvdXJuaWVyIn0.cWsPNS6q4csFiINyybsefqXipKDa8kl8eSPqjoMx7Kr3spCRveqvuUFDLUd1SjNBT-idnHOupMJn6_NpoMuWHFHnL7_f2NC6UUw0c5Eb-ITyh-RTuqUcr46w5kGQz39bacS_oVKx0oCE23BMc-u6XL45YJPpBNxe5KVzpWjwkLg6qLVJ_J6D_rTtjru6b6naktbvB9yKbCDZPVKYARNgxDbfl_zC-6GpRW-TWmsD6Oajg7WS150wwwFEPlBIZLeMZ5DoSOSExkstFiK9tYbrfNUzXF6Fnjh7aOgU4sfsjdUAi569rk4WoOmlIk25yMCkiUtn-WGWAaxrCvgcI8hUvg'
  };

  constructor(private http: HttpClient) { }

  findAll(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiUrl + 's');
  }

  findOne(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/' + id);
  }

  create(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/' + id);
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.apiUrl + '/delete/' + id, {headers : this.header});
  }

  edite(id: number): Observable<Annonce> {
    return this.http.get<Annonce>(this.apiUrl + '/' + id);
  }
}
