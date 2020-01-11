import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.page.html',
  styleUrls: ['./tariffs.page.scss'],
})
export class TariffsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
