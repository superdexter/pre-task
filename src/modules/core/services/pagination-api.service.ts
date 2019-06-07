import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class PaginationApiService {

  constructor(protected http: Http) {
  }
}
