import { CodeDetail } from './Code-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CodeDetailService {
  formData: CodeDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : CodeDetail[];

  constructor(private http: HttpClient) { }

  postCodeDetail() {
    return this.http.post(this.rootURL + '/CodeDetail', this.formData);
  }
  putCodeDetail() {
    return this.http.put(this.rootURL + '/CodeDetail/'+ this.formData.CId, this.formData);
  }
  deleteCodeDetail(id) {
    return this.http.delete(this.rootURL + '/CodeDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/CodeDetail')
    .toPromise()
    .then(res => this.list = res as CodeDetail[]);
  }
}
