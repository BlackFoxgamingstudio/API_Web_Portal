import { StoryboardDetail } from '../../shared/Storyboard-detail.model';
import { StoryboardDetailService } from '../../shared/Storyboard-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Storyboard-detail-list',
  templateUrl: './Storyboard-detail-list.component.html',
  styles: []
})
export class StoryboardDetailListComponent implements OnInit {

  constructor(private service: StoryboardDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: StoryboardDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(SBId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteStoryboardDetail(SBId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Storyboard Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
