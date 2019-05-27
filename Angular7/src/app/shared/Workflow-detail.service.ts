import { WorkflowDetail } from './Workflow-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkflowDetailService {
  formData: WorkflowDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : WorkflowDetail[];

  constructor(private http: HttpClient) { }

  postWorkflowDetail() {
    return this.http.post(this.rootURL + '/WorkflowDetail', this.formData);
  }
  putWorkflowDetail() {
    return this.http.put(this.rootURL + '/WorkflowDetail/'+ this.formData.WFId, this.formData);
  }
  deleteWorkflowDetail(id) {
    return this.http.delete(this.rootURL + '/WorkflowDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/WorkflowDetail')
    .toPromise()
    .then(res => this.list = res as WorkflowDetail[]);
  }
}
