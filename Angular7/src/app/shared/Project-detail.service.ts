import { ProjectDetail } from './Project-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {
  formData: ProjectDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : ProjectDetail[];

  constructor(private http: HttpClient) { }

  postProjectDetail() {
    return this.http.post(this.rootURL + '/ProjectDetail', this.formData);
  }
  putProjectDetail() {
    return this.http.put(this.rootURL + '/ProjectDetail/'+ this.formData.PId, this.formData);
  }
  deleteProjectDetail(id) {
    return this.http.delete(this.rootURL + '/ProjectDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/ProjectDetail')
    .toPromise()
    .then(res => this.list = res as ProjectDetail[]);
  }
}
