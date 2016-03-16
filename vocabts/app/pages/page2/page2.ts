import {Page} from 'ionic-angular';
export interface Page2{
     items:string[];
     searchQuery:any;
}

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})

export class Page2{
  constructor() {
    this.searchQuery = '';
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
     'Running: Çalışan',
     'Host: Ana makine',
     'Unauthorized: Yetkisiz',
     'Vulnerability: Zafiyet',
     'Homepage: Anasayfa',
     'Dictionary: Sözlük',
     'DoS: Denial-of-Service',
     'Device: Aygıt'
     
    ];
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
