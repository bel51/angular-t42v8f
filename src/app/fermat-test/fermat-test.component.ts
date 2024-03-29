import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {

  versuchskaninchen: number = 13;
  anzahl: number = 5;
  ergebnis = "Loading...";

  constructor() { }

  fermattest() {
    this.ergebnis = "Starte Fermat-Test der Zahl " + this.versuchskaninchen + "... ";
    
    let endergebnis = true;

    for(let zeuge = 1; zeuge < this.anzahl+1 ;zeuge++){

   
     //Berechne zeuge^(versuchskaninchen-1) modulo versuchskaninchen
     let zwischenergebnis = 1;
       for( let i = 0; i < this.versuchskaninchen-1; i++){
       zwischenergebnis = zwischenergebnis * zeuge;
       zwischenergebnis = zwischenergebnis % this.versuchskaninchen;
     }
     
     if (zwischenergebnis === 1){
       this.ergebnis += "Zeuge " + zeuge + " OK...";
     }
     else{
       this.ergebnis += "Zeuge " + zeuge + " NICHT OK!"
       endergebnis = false;
       break;
      }
  
    }
    if (endergebnis === true){
     this.ergebnis += "Test bestanden!:)";
    }
    else{
      this.ergebnis += "Test nicht bestanden :(";
    }
  
  }

  ngOnInit() {
  }

}