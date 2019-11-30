import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { EliteApi } from '../../providers/elite-api/elite-api';


//@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournamnets: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    this.eliteApi.getTournaments().then(data => this.tournamnets = data);
  }

  itemTapped($event,tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
