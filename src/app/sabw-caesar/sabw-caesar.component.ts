import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabw-caesar',
  templateUrl: './sabw-caesar.component.html',
  styleUrls: ['./sabw-caesar.component.css']
})
export class SabwCaesarComponent implements OnInit {
  zahl=12;
  rotation='rotate(-41.5deg)';
  dreheScheibe(){
    console.log(this.zahl);
  }
  constructor() { }

  ngOnInit() {
  }

}