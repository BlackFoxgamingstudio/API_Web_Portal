import { WorkflowDetail } from '../../shared/Workflow-detail.model';
import { WorkflowDetailService } from '../../shared/Workflow-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Workflow-detail-list',
  templateUrl: './Workflow-detail-list.component.html',
  styles: []
})
export class WorkflowDetailListComponent implements OnInit {

  constructor(private service: WorkflowDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: WorkflowDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(WFId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteWorkflowDetail(WFId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Workflow Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
