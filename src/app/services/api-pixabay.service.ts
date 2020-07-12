import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiPixabayService {
  baseURL = 'https://pixabay.com/api/';

  constructor(private http: HttpClient) {}
  getImage(valueForm: any): Observable<any> {
    const params = {};
    params['key'] = '13119377-fc7e10c6305a7de49da6ecb25';
    if (valueForm.selectCategory && valueForm.selectCategory.length) {
      params['category'] = valueForm.selectCategory;
    }
    if (valueForm.inputSearch && valueForm.inputSearch.trim() && valueForm.inputSearch.trim().length) {
      params['lang'] = 'es';
      params['q'] = valueForm.inputSearch.trim();
    } else {
      params['lang'] = 'es';
      params['q'] = "";
    }
    return this.http.get(this.baseURL, {
      params: params,
      observe: 'response',
    });
  }
}
