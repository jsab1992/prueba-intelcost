import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {
@Input() itemImg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
