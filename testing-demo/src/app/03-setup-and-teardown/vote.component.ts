import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  public totalVotes = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public upVote() {
    this.totalVotes++;
  }

  public downVote() {
    this.totalVotes--;
  }

}
