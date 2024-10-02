import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproperty } from '../Models/iproperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:3000/properties';


  constructor(private http:HttpClient) { }

  getProperties():Observable<Iproperty[]>
  {
    return this.http.get<Iproperty[]>(this.apiUrl);
  }

  getPropertyById(id:number):Observable<Iproperty>
  {
    return this.http.get<Iproperty>(`${this.apiUrl}/${id}`);
  }

  deleteProperty(id:any):Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
