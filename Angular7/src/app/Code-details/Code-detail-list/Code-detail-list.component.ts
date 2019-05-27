import { CodeDetail } from '../../shared/Code-detail.model';
import { CodeDetailService } from '../../shared/Code-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Code-detail-list',
  templateUrl: './Code-detail-list.component.html',
  styles: []
})
export class CodeDetailListComponent implements OnInit {

  constructor(private service: CodeDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: CodeDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(CId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteCodeDetail(CId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Code Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
