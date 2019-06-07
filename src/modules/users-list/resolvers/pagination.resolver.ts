import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class PaginationResolver {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchPaginationInfo(page);
  }

}
