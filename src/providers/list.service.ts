import {EventEmitter, Injectable} from '@angular/core';

import {ListItem} from '../models';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Item } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class ListService {
  private list: ListItem[] =[];
  public statusChanged = new EventEmitter<{type: string; totalCount: number}>();
//1.Versuch
  /*getList1(): ListItem[] {
    return this.list
  };*/

  constructor(private http: HttpClient){}

  getList(): Observable<ListItem[]> {
    return this.http.get('http://localhost:3000/item')
    .map((response: Array<any>) => {
      let items: ListItem[] = [];
      for (let responseItem of response) {
        let item: ListItem = {
          id: responseItem['id'],
          name: responseItem['name'],
          date: new Date(responseItem['date'].replace('.', '-'))
        };
        items.push(item);
      }
      return items;
    });
  }

  /*ListLenght(): ListItem[]{
    return this.list
  }*/

  addListItem(item: any): void {
    this.list.push({
      id: item.id,
      name: item.name,
      date: item.date
    });
    this.statusChanged.emit({
      type: 'add',
      totalCount: this.list.length
    });
  };

  removeListItem(index): void {
    this.list.splice(index, 1);
    this.statusChanged.emit({
      type: 'remove',
      totalCount: this.list && this.list.length ? this.list.length : 0
    });
  };

calcTotalSum(): number{
  let sum =0;
  if (!this.list || !this.list.length){
    return sum;
  }
}

}
