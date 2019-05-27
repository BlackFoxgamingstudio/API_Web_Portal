import { KeyWordDetail } from '../../shared/KeyWord-detail.model';
import { KeyWordDetailService } from '../../shared/KeyWord-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-KeyWord-detail-list',
  templateUrl: './KeyWord-detail-list.component.html',
  styles: []
})
export class KeyWordDetailListComponent implements OnInit {

  constructor(private service: KeyWordDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: KeyWordDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(KWId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteKeyWordDetail(KWId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'KeyWord Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
