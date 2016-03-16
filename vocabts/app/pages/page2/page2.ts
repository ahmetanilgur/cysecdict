import {Page} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export interface Page2{
     items:string[];
     searchQuery:any;
     initializeItems();
     http:any;
}
export let constlar:any;

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})

export class Page2{
    
  constructor(http: Http) {
    this.searchQuery = '';
    this.http=http;
	this.http.get('https://api.myjson.com/bins/142if').map(res => res.json()).subscribe(data => {
    this.items = data;
    constlar = this.items;
        });
  }

  initializeItems() {
      this.items=constlar;
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
