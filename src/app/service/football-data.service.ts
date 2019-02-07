import { Injectable } from '@angular/core';
import { Standing} from '../model/standing';
import ODataStore from "devextreme/data/odata/store";
import DataSource from "devextreme/data/data_source";

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private standings: Standing[];
  private store: ODataStore;
  private dataSource: DataSource;

  constructor(
  ) { 

    this.store = new ODataStore({
      url: 'https://apifootball.com/api/?APIkey=9312f9173fad7330dc780c926a665525c9023c3c4433416130766a602be7c83e&action=get_standings&league_id=63'
    })
    this.dataSource = new DataSource(this.store);

    this.standings = null;
  }

  retrieveAllStandings(){
    
    return this.dataSource.load(); 
  }

}
