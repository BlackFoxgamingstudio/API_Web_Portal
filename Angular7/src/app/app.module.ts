import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { KeyWordDetailComponent } from './KeyWord-details/KeyWord-detail/KeyWord-detail.component';
import { CodeDetailComponent } from './Code-details/Code-detail/Code-detail.component';
import { WorkflowDetailComponent } from './Workflow-details/Workflow-detail/Workflow-detail.component';
import { ProjectDetailComponent } from './Project-details/Project-detail/Project-detail.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { StoryboardDetailComponent } from './Storyboard-details/Storyboard-detail/Storyboard-detail.component';


import { KeyWordDetailListComponent } from './KeyWord-details/KeyWord-detail-list/KeyWord-detail-list.component';
import { WorkflowDetailListComponent } from './Workflow-details/Workflow-detail-list/Workflow-detail-list.component';
import { ProjectDetailListComponent } from './Project-details/Project-detail-list/Project-detail-list.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { CodeDetailListComponent } from './Code-details/Code-detail-list/Code-detail-list.component';
import { StoryboardDetailListComponent } from './Storyboard-details/Storyboard-detail-list/Storyboard-detail-list.component';


import { CodeDetailsComponent } from './Code-details/Code-details.component';
import { WorkflowDetailsComponent } from './Workflow-details/Workflow-details.component';
import { ProjectDetailsComponent } from './Project-details/Project-details.component';
import { KeyWordDetailsComponent } from './KeyWord-details/KeyWord-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { StoryboardDetailsComponent } from './Storyboard-details/Storyboard-details.component';


import {  ProjectDetailService } from './shared/Project-detail.service';
import {  WorkflowDetailService } from './shared/Workflow-detail.service';
import {  CodeDetailService } from './shared/Code-detail.service';
import {  KeyWordDetailService } from './shared/KeyWord-detail.service';
import { PaymentDetailService } from './shared/payment-detail.service';
import { StoryboardDetailService } from './shared/Storyboard-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    CodeDetailsComponent,
    WorkflowDetailsComponent,
    ProjectDetailsComponent,
    CodeDetailListComponent,
    WorkflowDetailListComponent,
    ProjectDetailListComponent,
    CodeDetailComponent,
    WorkflowDetailComponent,
    ProjectDetailComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    KeyWordDetailsComponent,
    KeyWordDetailComponent,
    KeyWordDetailListComponent,
    StoryboardDetailsComponent,
    StoryboardDetailComponent,
    StoryboardDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PaymentDetailService,KeyWordDetailService, CodeDetailService, WorkflowDetailService, ProjectDetailService, StoryboardDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
