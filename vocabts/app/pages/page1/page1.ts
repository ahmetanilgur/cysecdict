import {Page} from 'ionic-angular';
import {Page2} from '../../pages/page2/page2'
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export interface Page1{
	items:number;
	http:any;
}
@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
	constructor(http: Http){
		this.http=http;
		this.http.get('https://api.myjson.com/bins/142if').map(res => res.json()).subscribe(data => {
        this.items = data.length;
    });
	}

}