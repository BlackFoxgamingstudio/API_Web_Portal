import { WorkflowDetailService } from '../../shared/Workflow-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Workflow-detail',
  templateUrl: './Workflow-detail.component.html',
  styles: []
})
export class WorkflowDetailComponent implements OnInit {

  constructor(private service: WorkflowDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      WFId: 0,
      Workflow: '',
      Description: '',
      imageurl: '',
      docurl: '',
      Sourcename: ''
  
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.WFId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postWorkflowDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Workflow Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putWorkflowDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Workflow Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
