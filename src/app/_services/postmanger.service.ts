
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostmangerService {

  private baseUrl:string = "https://jsonplaceholder.typicode.com/";

  constructor(private _http:HttpClient) { }

  getposts():Observable<any>{
    return this._http.get(this.baseUrl+"posts");
  }

  getpostbyId(id:number):Observable<any>{
    return this._http.get(this.baseUrl+"posts/"+id);
  }

  getpostcomments(postId:number):Observable<any>{
    return this._http.get(this.baseUrl+"comments?postId="+postId);
  }

}
