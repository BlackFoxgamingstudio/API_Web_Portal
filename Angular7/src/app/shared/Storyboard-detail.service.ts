import { StoryboardDetail } from './Storyboard-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoryboardDetailService {
  formData: StoryboardDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : StoryboardDetail[];

  constructor(private http: HttpClient) { }

  postStoryboardDetail() {
    return this.http.post(this.rootURL + '/StoryboardDetail', this.formData);
  }
  putStoryboardDetail() {
    return this.http.put(this.rootURL + '/StoryboardDetail/'+ this.formData.SBId, this.formData);
  }
  deleteStoryboardDetail(id) {
    return this.http.delete(this.rootURL + '/StoryboardDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/StoryboardDetail')
    .toPromise()
    .then(res => this.list = res as StoryboardDetail[]);
  }
}
