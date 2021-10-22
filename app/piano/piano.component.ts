import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {


  colors:string[];
  guessme:number;
  notes: string[];

  constructor() {

    this.colors = ["", "", "", "", "", "", "", "", "", "", "", ""];
    this.notes = ["C", "Csharp", "D", "Dsharp", "E", "F", "Fsharp", "G", "Gsharp", "A", "Asharp", "B"]
    this.guessme = -1;
   }


  ngOnInit(): void {
    
  }

  public clickKey(n:number, show:boolean)
  {

    if (this.guessme >= 0)
    {

      let oldColor = this.colors[n];
      if (n==this.guessme)
      {
      this.colors[n] = "right"
      }
      else
      {
        this.colors[n] = "wrong"
      }
      setTimeout(() =>{
        this.colors[n] = oldColor;
      }, 500)
      this.guessme = -1;
    }
    else if (show)
    {
      let oldColor = this.colors[n];
      this.colors[n] = "colored"
      setTimeout(() =>{
        this.colors[n] = oldColor;
      }, 500)
    }
      
  
    let audio = new Audio();
    audio.src = "assets/"+ this.notes[n] +".wav"
    audio.load()
    audio.play()
  }

  public guessNote()
  {
    this.guessme = -1;
    let piano = new PianoComponent() 
    
    let index = Math.floor(Math.random() * (10))
    this.clickKey(index, false)
    this.guessme = index;
  }

  private resetColors()
  {
    for (var _i = 0; _i < this.colors.length; _i++)
    {
       this.colors[_i] = "";
    }
  }

  public chooseScale(scale:string)
  {
    this.resetColors();
    switch(scale)
    {
      case "C" :
      case "Am" :
        {
        this.colors[0] = "scale"
        this.colors[2] = "scale"
        this.colors[4] = "scale"
        this.colors[5] = "scale"
        this.colors[7] = "scale"
        this.colors[9] = "scale"
        this.colors[11] = "scale"
        break;
      }
      case "Cm" : {
        this.colors[0] = "scale"
        this.colors[2] = "scale"
        this.colors[3] = "scale"
        this.colors[5] = "scale"
        this.colors[7] = "scale"
        this.colors[8] = "scale"
        this.colors[10] = "scale"
        break;
      }
    }

  }



}
