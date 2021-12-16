import {Component, Input, OnInit} from '@angular/core';
import {IAnnouncment} from "../../models/IAnnouncment";

@Component({
  selector: 'app-announcment-similar',
  templateUrl: './announcment-similar.component.html',
  styleUrls: ['./announcment-similar.component.css']
})
export class AnnouncmentSimilarComponent implements OnInit {

  @Input()
  similar: IAnnouncment
  constructor() { }

  ngOnInit(): void {
  }
}
