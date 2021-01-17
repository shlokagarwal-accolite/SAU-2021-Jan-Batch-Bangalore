import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {

  constructor(private http: HttpClient) { }

  apiCall()
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/?_limit=20');
  }
}