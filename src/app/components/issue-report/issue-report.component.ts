import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormControl, Validators, FormGroup} from "@angular/forms"
import { IssuesService } from 'src/app/shared/services/issues.service';


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent implements OnInit {

  @Output () formClose = new EventEmitter()


  issueForm : FormGroup | undefined
  constructor(private formBuilder: FormBuilder, private issueService: IssuesService){ }
  ngOnInit(): void {
    this.issueForm = this.formBuilder.group(
      {
        title : [''],
        description : [''],
        priority: [''],
        type : ['']
      }
    )
  }

  addIssue(){
    this.issueService.createIssue(this.issueForm?.value)
    this.formClose.emit()
  }
}
