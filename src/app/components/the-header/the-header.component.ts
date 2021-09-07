import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';
@Component({
  selector: 'the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {
  version = packageInfo['dependencies']['@angular/core'].substring(1)
  constructor() {

  }

  ngOnInit(): void {
  }

}
