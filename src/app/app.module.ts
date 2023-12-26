import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { IssueReportComponent } from './components/issue-report/issue-report.component';


@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
