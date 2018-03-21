import { Component, OnInit } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {AlertController} from 'ionic-angular';
import {ListItem} from '../../models';
import {ListService} from '../../providers';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage implements OnInit {
  list: ListItem[] =[];

  constructor(public navCtrl: NavController, private listService: ListService, private alertCtrl: AlertController) {

  }
  ngOnInit(): void {
    this.list= this.listService.getList();
  }

  ionViewDidEnter(): void{
    if (this.list.length){
      return;
    }

    let alert=this.alertCtrl.create({
      title: '<b>Your List is empty!</b>',
      subTitle: 'First, please enter some food to your FridgeMate',
      buttons: ['OK']
    });
    alert.present();
  }

removeFromList(index: number): void{
  this.listService.removeListItem(index);
}

  goToMainMenu(){
this.navCtrl.push(TabsPage);
  }

  addToList($event, item: Item){
    $event.stopPropagation();

    this.listService.addListItem(Item);
  }
}
