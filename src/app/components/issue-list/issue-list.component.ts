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
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService){ }
  ngOnInit(): void {
    this.getIssues()
  }

  private getIssues(){
    this.issues = this.issueService.getPendingIssues()
  }
  onCloseReport(){
    this.showReportIssue = false
    this.getIssues()
  }

  onConfirm(confirm: boolean){
    if(confirm &&  this.selectedIssue){
      this.issueService.compoleteIssue(this.selectedIssue)
      this.getIssues
    }
    this.selectedIssue = null 
  }

  
}
