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
    Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzE3OTgyNTQsImV4cCI6MTYzMTgwMTg1NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfUFJPIl0sInVzZXJuYW1lIjoibWF4aW1lLnRvdXJuaWVyIn0.lNTkPkzVEQBnSRErr19icKTgo-KFHa4me1HqL72RGAPjP3barqy5CG-Ah1mva8yv-1Qh7L58RLYEcaNBeqVQefJas-XNpnBvy0GjHed1AtQW1rE2_Le_5rICjXZSxmqyGbQbk2xk6-RHjz07bXIAGX9LKsPCfotR8ibmcEM6GKcOqZQ3AbSHDe_cJcgyfncz-1YeeALNBhMxZvA45CTtzN2CCFil3tQjK2k4IYHrOo2Ks9GqPQx7RQOc-I-XgRL_W2x61D3MBvokX7G7_xqAzzU9zzQKhYIBluu8rGqIh2Guf61a-wJWqO0s_uC0r6aLJ5C8I14UPgZkzqCQm0prsg'
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
