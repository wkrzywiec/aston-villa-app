import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../service/football-data.service';

export class Standing {
  constructor(
      public team_name: String,
      public overall_league_position: number,
      public overall_league_payed: number,
      public overall_league_W: number,
      public overall_league_D: number,
      public overall_league_L: number,
      public overall_league_GF: number,
      public overall_league_GA: number,
      public overall_league_PTS: number
  ){}
}

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  
  standings: Standing[];


  constructor(
    private footballService: FootballDataService
  ) {  }

  ngOnInit() {
    this.retrieveAllStandings();
  }

  retrieveAllStandings():void{
    this.footballService.retrieveAllStandings()
      .then(
        (data) => {
            data.sort((a,b) => a.overall_league_position - b.overall_league_position);
            this.standings = data;
        },
        (error) => {error.console.log()}
    );
  }
}
