import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    
    this.baseUrl="http://localhost:10000/"
    
   }

   public PostRequest(url: string, data: any): any {
    if (localStorage.getItem("access_token")) {
      // const headers = new HttpHeaders()
      //   .set('content-type', 'application/json')
      //   .set('Authorization', localStorage.getItem("access_token"));
      // return this.httpClient.post<any>(url, data, { headers });
    } else {
       const headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
      return this.httpClient.post<any>(url, data,{headers});
    }
  }

  public GetRequest(url: string): any {
    console.log(url, "............urlGet");
    if (localStorage.getItem("access_token")) {
      // const headers = new HttpHeaders()
      //   .set('content-type', 'application/json')
      //   .set('Authorization', localStorage.getItem("access_token"));
      // return this.httpClient.get<any>(url, { headers })
    } else {
      return this.httpClient.get<any>(url)
    }
  }

  public PutRequest(url: string, data: any): any {
    if (localStorage.getItem("access_token")) {
      // const headers = new HttpHeaders()
      //   .set('content-type', 'application/json')
      //   .set('Authorization', localStorage.getItem("access_token"));
      // return this.httpClient.put<any>(url, data, { headers })
    } else {
      return this.httpClient.put<any>(url, data)
    }
  }
}
