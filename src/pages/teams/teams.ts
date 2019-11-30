import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home';


@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  public teams =[
    {id:1,name:'HC ELite' },
    {id:2,name:'Team TakeOver'},
    {id:3,name:'DC Thunder' }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamHomePage,team);
  }

}
