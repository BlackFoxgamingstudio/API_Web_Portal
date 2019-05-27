import { StoryboardDetailService } from '../../shared/Storyboard-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Storyboard-detail',
  templateUrl: './Storyboard-detail.component.html',
  styles: []
})
export class StoryboardDetailComponent implements OnInit {

  constructor(private service: StoryboardDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      SBId: 0,
      Scene: '',
      Description: '',
      imageurl: '',
      docurl: '',
      Sourcename: ''
  
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.SBId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postStoryboardDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Storyboard Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putStoryboardDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Storyboard Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
