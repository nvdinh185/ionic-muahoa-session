import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { XemhoaPage } from '../xemhoa/xemhoa'

@Component({
  selector: 'page-muahoa',
  templateUrl: 'muahoa.html',
})
export class MuahoaPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
  }
  listHoa: any[] = [
    { id: 1, ten: "Hoa hong", soluong: 10, gia: 1000 },
  ];
  onSubmit(muaHoaForm) {
    var hoa = muaHoaForm.value;
    var index = this.listHoa.findIndex(e => e.id == hoa.id);
    if (index >= 0) {
      this.listHoa[index].soluong = parseInt(this.listHoa[index].soluong)+parseInt(hoa.soluong);
    } else {
      this.listHoa.push(hoa);      
    }
    const alert = this.alertCtrl.create({
      title: 'Thành công!',
      subTitle: 'Chúc mừng bạn đã mua hoa thành công!',
      buttons: ['OK']
    });
    alert.present();
  }
  showListHoa() {
    var value = JSON.stringify(this.listHoa);
    sessionStorage.setItem("listHoa", value);
    this.navCtrl.push(XemhoaPage);
  }
}
