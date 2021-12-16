import { Component, OnInit } from '@angular/core';
import {AnnouncmentService} from "../../services/announcment.service";
import {IAnnouncment} from "../../models/IAnnouncment";
import {FormControl, FormGroup} from "@angular/forms";
import {variable} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-announcments',
  templateUrl: './announcments.component.html',
  styleUrls: ['./announcments.component.css']
})
export class AnnouncmentsComponent implements OnInit {
  filter:FormGroup = new FormGroup({
    title: new FormControl('')
  })
  items: IAnnouncment[]
  constructor(private announcmentsService: AnnouncmentService) { }

  ngOnInit(): void {
    this.items = this.announcmentsService.getItemsFromLocale()
  }

  onInput() {
    const filter = this.filter.controls['title'].value.toLowerCase();
    if(filter){
      this.items = this.announcmentsService.getItemsFromLocale().filter((value:any) => value.title.toLowerCase().includes(filter))
    }else{
      this.items = this.announcmentsService.getItemsFromLocale()
    }
  }
}
