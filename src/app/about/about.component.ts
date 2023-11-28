import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // param: any;
  // queryParam: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  }
}
