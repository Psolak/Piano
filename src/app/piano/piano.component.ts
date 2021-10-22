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
  scale: string;
  played: boolean;
  turn: number;
  score: number;
  maxturn: number;
  percentage: number;

  constructor() {

    this.colors = ["", "", "", "", "", "", "", "", "", "", "", ""];
    this.notes = ["C", "Csharp", "D", "Dsharp", "E", "F", "Fsharp", "G", "Gsharp", "A", "Asharp", "B"]
    this.guessme = -1;
    this.played = false;
    this.scale = ""
    this.maxturn = 10;
    this.turn = 0
    this.score = 0;
    this.percentage = 0;
   }


  ngOnInit(): void {
    this.hideScore
  }

  public clickKey(n:number, show:boolean)
  {

    if (this.guessme >= 0)
    {
      let oldColor = this.colors[n];
      if (n==this.guessme)
      {
      this.colors[n] = "right"
      this.score++
      }
      else
      {
        this.colors[n] = "wrong"
      }
      setTimeout(() =>{
        if (oldColor == "colored")
          this.chooseScale(this.scale)
        else
          this.colors[n] = oldColor;
      }, 500)

      this.turn++
      this.percentage = (this.turn/this.maxturn)*100

      if (this.turn < this.maxturn)
      {
        setTimeout( () => { this.guessNote() }, 1000 );
      }

      this.guessme = -1
      this.showScore()
    }
    else if (show)
    {
      let oldColor = this.colors[n];
      this.colors[n] = "colored"
      setTimeout(() =>{
        if (oldColor == "colored")
          this.chooseScale(this.scale)
        else
          this.colors[n] = oldColor;
      }, 500)
    }
      
  
    let audio = new Audio();
    audio.src = "assets/"+ this.notes[n] +".wav"
    audio.load()
    audio.play()
  }

  public guessMe()
  {

    this.percentage = 0;
    this.score = 0
    this.turn = 0
    this.guessNote()

  }

  public guessNote()
  {
    this.showScore();
    this.guessme = -1;
    
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
    this.scale = scale;
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
      default:
        this.resetColors();
    }
  }
    /**
     * showScore
     */
  public showScore() {
      var show = document.getElementById("score");
      if (show == null)
        return
      show.hidden = false
      show.innerText = this.score + "/" + this.turn;
  }
  public hideScore() {
    var show = document.getElementById("score");
    if (show == null)
      return
    show.hidden = true
  }
}

