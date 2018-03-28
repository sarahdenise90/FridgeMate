import { Component, OnInit } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import {ListService} from '../../providers';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-newitem',
  templateUrl: 'NewItem.html'
})



export class NewItemPage {


  constructor(public navCtrl: NavController, private listService: ListService, private http: HTTP ) {

  }


  addToList($event, item: Item){

    $event.stopPropagation();

    this.listService.addListItem(Item);
  }
}