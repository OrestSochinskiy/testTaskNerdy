import {Component, OnInit} from '@angular/core';
import {IAnnouncment} from "../../models/IAnnouncment";
import {Router} from "@angular/router";
import {AnnouncmentService} from "../../services/announcment.service";

@Component({
  selector: 'app-announcment-info',
  templateUrl: './announcment-info.component.html',
  styleUrls: ['./announcment-info.component.css']
})
export class AnnouncmentInfoComponent implements OnInit {
  similar: IAnnouncment[] = [];
  item: IAnnouncment;

  constructor(private router: Router, private announcmentService: AnnouncmentService) {
    this.item = this.router.getCurrentNavigation()?.extras.state as IAnnouncment
  }

  ngOnInit(): void {
    this.findSameAnnouncment()
  }

  findSameAnnouncment() {
    let items = this.announcmentService.getItemsFromLocale();
    let body = this.item.body.toLowerCase().split(' ');
    body = body.filter(value => value !== '');
      for (let j = 0; j < items.length; j++) {
        if (items[j].id !== this.item.id) {
          let arrBody = items[j].body.toLowerCase().split(' ');
          arrBody = arrBody.filter((value: string) => value !== '');
          arrBody.forEach((value: string) =>{
            for (let i = 0; i < body.length; i++) {
              if (value === body[i]){
                if(!this.similar.find(value1 => value1.id === items[j].id && this.similar.length <= 3)){
                  this.similar.push(items[j])
                }
              }
            }
          })
        }
      }
  }

  back() {
    history.back()
  }

  edit() {
    this.router.navigate(['create'], {state: this.item})
  }
}
