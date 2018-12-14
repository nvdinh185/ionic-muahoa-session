import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-xemhoa',
  templateUrl: 'xemhoa.html',
})
export class XemhoaPage implements OnInit {
  listHoa: any[] = [];

  ngOnInit(){
    var value = sessionStorage.getItem('listHoa');
    this.listHoa = JSON.parse(value);
  }

}
