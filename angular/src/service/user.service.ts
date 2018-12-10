import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(count = 20) {
    return this.http.get<{results: any[]}>(`https://randomuser.me/api/?results=${count}`)
      .pipe(
        map(data => data.results)
      );
  }

}