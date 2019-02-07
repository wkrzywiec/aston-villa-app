import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../service/football-data.service';
import { Standing} from '../model/standing'
import { DxDataGridModule } from "devextreme-angular";


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
