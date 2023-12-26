import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/shared/interfaces/issue';
import { IssuesService } from 'src/app/shared/services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {

  showReportIssue = false;

  issues: Issue [] = []
  constructor(private issueService: IssuesService){ }
  ngOnInit(): void {
    this.getIssues()
  }

  getIssues(){
    this.issues = this.issueService.getPendingIssues()
  }
  onCloseReport(){
    this.showReportIssue = false
    this.getIssues()
  }
}
