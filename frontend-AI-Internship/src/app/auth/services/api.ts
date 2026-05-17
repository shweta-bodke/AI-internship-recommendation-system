import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  backendUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getMessage() {

    return this.http.get(
      this.backendUrl + '/test'
    );

  }

  getRecommendations(data: any) {

    return this.http.post(

      this.backendUrl + '/recommend',

      data

    );

  }

}