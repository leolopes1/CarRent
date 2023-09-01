import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiurl = 'http://localhost:3000/cars'

  httpOptions = {
    // headers: new HttpHeaders({

    // })

  }



  constructor(
    private httpClient: HttpClient
  ) { }

  public getCars():Observable<Response>{
    return this.httpClient.get<Response>(this.apiurl)
  }
  public postCars(car: any) {
    return this.httpClient.post<any>(this.apiurl, car)
  }


}

