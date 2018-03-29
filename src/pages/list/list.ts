import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, Item, Refresher, Loading } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {AlertController} from 'ionic-angular';
import {ListItem} from '../../models';
import {ListService} from '../../providers/list.service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


@Injectable()
export class ListPage implements OnInit {
  list: ListItem[] =[];  // war mal zum testen: Observable<any>

  constructor(public navCtrl: NavController, private listService: ListService, private alertCtrl: AlertController) {
  }
  
  ngOnInit(): void {
    // this.list= this.listService.getList();
    this.listService.getList().subscribe((items) => {
      this.list = items;
    }, (error) => {
      console.error(error);
    });
  }

  /*doRefresh(refresher: Refresher){
    const subscribtion = this.listService.getList().subscribe((items) => {this.list = items;
    refresher.complete();
  subscribtion.unsubscribe();}, () => refresher.complete());
  }*/
  
  ionViewDidEnter(): void{
    //setTimeout(this.ionViewDidEnter, 300)
    if (this.listService.calcTotalSum() > 0){
      return;
    }

    let alert=this.alertCtrl.create({
      title: '<b>Your List is empty!</b>',
      subTitle: 'First, please enter some food to your FridgeMate',
      buttons: ['OK']
    });
    alert.present();
  }

  calcTotalSum(){
    return this.listService.calcTotalSum();
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
