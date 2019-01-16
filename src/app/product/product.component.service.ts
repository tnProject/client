import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductEntity} from './../core/entities';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseURL: string = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
}
