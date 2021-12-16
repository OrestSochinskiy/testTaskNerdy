import {Component, Input, OnInit} from '@angular/core';
import {IAnnouncment} from "../../models/IAnnouncment";
import {Router} from "@angular/router";
import {AnnouncmentService} from "../../services/announcment.service";

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.css']
})
export class AnnouncmentComponent implements OnInit {

  @Input()
  item: IAnnouncment

  constructor(private router: Router, private announcmentService: AnnouncmentService) {
  }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate(['announcment', this.item.id], {state: this.item})
  }

  delete() {
    this.announcmentService.deleteItem(this.item.id)
    window.location.reload();
  }
}
