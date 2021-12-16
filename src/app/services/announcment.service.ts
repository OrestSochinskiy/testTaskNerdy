import { Injectable } from '@angular/core';
import {IAnnouncment} from "../models/IAnnouncment";

@Injectable({
  providedIn: 'root'
})
export class AnnouncmentService {
  private storageKey = 'announcment'
  constructor() { }

  saveStorage(items: IAnnouncment[]){
    localStorage.setItem(this.storageKey,JSON.stringify(items))
  }

  getItemsFromLocale() {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : []
  }

  deleteItem(id: number){
    let items: IAnnouncment[] = []
    this.getItemsFromLocale().filter((value:IAnnouncment) => {
      if(value.id !== id){
        items.push(value)
      }
    })
    this.saveStorage(items)
  }

  edit(item: IAnnouncment) {
    let items = this.getItemsFromLocale();
    let index = items.filter((value: IAnnouncment) => value.id === item.id);
    index[0].title = item.title
    index[0].body = item.body
    index[0].id = item.id
    index[0].date = item.date
    this.saveStorage(items)
  }
}
