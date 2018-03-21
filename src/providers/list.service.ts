import {EventEmitter, Injectable} from '@angular/core';

import {ListItem} from '../models';

@Injectable()
export class ListService {
  private list: ListItem[] = [];
  public statusChanged = new EventEmitter<{type: string; totalCount: number}>();

  getList(): ListItem[] {
    return this.list;
  };

  addListItem(item: any): void {
    this.list.push({
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

}
