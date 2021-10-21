import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {


  colors:string[];
  lastplayed:number;
  notes: string[];

  constructor() {

    this.colors = ["", "", "", "", "", "", "", "", "", "", "", ""];
    this.notes = ["C", "Csharp", "D", "Dsharp", "E", "F", "Fsharp", "G", "Gsharp", "A", "Asharp", "B"]
    this.lastplayed = 0;
   }


  ngOnInit(): void {
    
  }

  public clickKey(n:number)
  {
    this.colors[this.lastplayed] = "";
    this.colors[n] = "colored"
    this.lastplayed = n
    let audio = new Audio();
    audio.src = "assets/"+ this.notes[n] +".wav"
    audio.load()
    audio.play()
  }
  public guessNote()
  {
    this.colors[this.lastplayed] = "";
    let piano = new PianoComponent() 
    
    let index = Math.floor(Math.random() * (10))
    this.colors[index] = "colored"
    this.clickKey(index)
    this.lastplayed = index;
  }

  public chooseScale(scale:string)
  {
    switch(scale)
    {
      case "C" : {
        this.colors[0] = "colored"
        this.colors[2] = "colored"
        this.colors[4] = "colored"
        this.colors[5] = "colored"
        this.colors[7] = "colored"
        this.colors[9] = "colored"
        this.colors[11] = "colored"
        break;
      }

      case "Cm" : {
        this.colors[0] = "colored"
        this.colors[2] = "colored"
        this.colors[3] = "colored"
        this.colors[5] = "colored"
        this.colors[7] = "colored"
        this.colors[8] = "colored"
        this.colors[10] = "colored"
        break;
      }
    }

  }



}
