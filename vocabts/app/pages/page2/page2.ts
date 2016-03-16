import {Page} from 'ionic-angular';
export interface Page2{
     items:string[];
     searchQuery:any;
     initializeItems();
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
     'running: çalışan',
     'host: ana makine',
     'unauthorized: yetkisiz',
     'vulnerability: zafiyet',
     'homepage: anasayfa',
     'dictionary: sözlük',
     'dos: denial-of-service',
     'device: aygıt',
     'transmit: iletmek',
     'cleartext: düz metin',
     'remote: uzak',
     'session: oturum',
     'eavesdrop: dinleme yapmak',
     'mitigate: hafifletmek',
     'context: içerik',
     'browser: tarayıcı',
     'render: sunmak',
     'request: istek',
     'provide: temin etmek',
     'sensitive: hassas',
     'obtain: ele geçirmek',
     'validation: onaylama',
     'encoded: şifrelenmiş'
     
    ];
    
  }
  countItems(){
      this.initializeItems();
      return this.items.length;
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
