import { Component, OnInit } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import {ListService} from '../../providers';

@Component({
  selector: 'page-newitem',
  templateUrl: 'NewItem.html'
})



export class NewItemPage {


  constructor(public navCtrl: NavController, private listService: ListService ) {

  }


  addToList($event, item: Item){

    $event.stopPropagation();

    this.listService.addListItem(Item);
  }

}
