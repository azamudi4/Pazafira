import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/Form';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiURL: string= "https://pazafira.herokuapp.com" 

  constructor(
    private http: HttpClient
  ) { }

    create(FormData){
      return this.http.post<User>(`${this.apiURL}/User/create`, FormData)  
    }

  }

  