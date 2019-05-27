import { KeyWordDetail } from './KeyWord-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KeyWordDetailService {
  formData: KeyWordDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : KeyWordDetail[];

  constructor(private http: HttpClient) { }

  postKeyWordDetail() {
    return this.http.post(this.rootURL + '/KeyWordDetail', this.formData);
  }
  putKeyWordDetail() {
    return this.http.put(this.rootURL + '/KeyWordDetail/'+ this.formData.KWId, this.formData);
  }
  deleteKeyWordDetail(id) {
    return this.http.delete(this.rootURL + '/KeyWordDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/KeyWordDetail')
    .toPromise()
    .then(res => this.list = res as KeyWordDetail[]);
  }
}
