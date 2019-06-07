import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces';
import { PaginationApiService } from './';
import { BASE_URL } from 'src/constants';

@Injectable()
export class ApiService {

  constructor(protected http: Http) {
  }

  fetchUsers(page): Observable<any> {

    return this.http.get(`${BASE_URL}/users/?page=${page}`).pipe(map(response => response.json().data));
  }

  fetchPaginationInfo(page): Observable<any> {
    return this.http.get(`${BASE_URL}/users/?page=${page}`).pipe(map(response => {
      return {
        total_pages: response.json().total_pages,
        per_page: response.json().per_page,
        total: response.json().total,
        page: response.json().page
      };
    }));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`${BASE_URL}/users/${id}`).pipe(map(response => response.json()));
  }

}
