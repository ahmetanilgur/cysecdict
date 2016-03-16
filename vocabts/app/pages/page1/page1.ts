import {Page} from 'ionic-angular';
import {Page2} from '../../pages/page2/page2'
export interface Page1{
    items:number;
}
@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
    constructor(){
        this.items = Page2.prototype.countItems();
    }
}