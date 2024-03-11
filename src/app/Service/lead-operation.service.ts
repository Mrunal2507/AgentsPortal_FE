import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../Class/lead';

@Injectable({
  providedIn: 'root'
})
export class LeadOperationService {
  
  baseURL:string = 'http://localhost:3002';
  addLeadEndPoint:string=this.baseURL+'/lead/addLead';
  allLeadsEndPoint:string=this.baseURL+'/lead/list'; 
  
  constructor(private http:HttpClient) { }

  addLead(lead:any):Observable<Lead>{
    console.log("inside lead service: "+this.addLeadEndPoint);
    console.log(lead);
    return this.http.post<Lead>(`${this.addLeadEndPoint}`,lead);
  }  

  getAllLeads():Observable<Lead[]>
  {
    console.log("Inside Service: "+this.allLeadsEndPoint);
    return this.http.get<Lead[]>(`${this.allLeadsEndPoint}`)
  }
 
}
