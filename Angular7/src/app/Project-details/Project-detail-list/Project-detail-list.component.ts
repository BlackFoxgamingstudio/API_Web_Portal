import { ProjectDetail } from '../../shared/Project-detail.model';
import { ProjectDetailService } from '../../shared/Project-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Project-detail-list',
  templateUrl: './Project-detail-list.component.html',
  styles: []
})
export class ProjectDetailListComponent implements OnInit {

  constructor(private service: ProjectDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: ProjectDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProjectDetail(PId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Project Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
