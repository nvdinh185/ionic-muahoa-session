import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MuahoaPage } from '../muahoa/muahoa'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  muaHoa() {
    this.navCtrl.push(MuahoaPage);
  }
}
