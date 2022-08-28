import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurant";

  constructor(private http: HttpClient) { }


  //get all data
  getList() {
    // console.warn("data get")
    return this.http.get(this.url);
  }


  //save data to server
  saveResto(data :any){
    // console.warn("services", data);
    return this.http.post(this.url, data);
  }

  //delete data to server
  deleteResto(id :any){
    // console.warn("services", data);
    return this.http.delete(`${this.url}/${id}`);
  }

  //get data with id data to server
  getCurrentResto(id :any){
    // console.warn("services", data);
    return this.http.get(`${this.url}/${id}`);
  }

  //delete data to server
  updateResto(id :any,data : any){
    // console.warn("services", data);
    return this.http.put(`${this.url}/${id}`,data);
  }

  
}
