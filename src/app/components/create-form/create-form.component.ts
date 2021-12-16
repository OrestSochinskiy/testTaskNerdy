import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AnnouncmentService} from "../../services/announcment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  type: string = '';
  title = new FormControl(history.state.title || '',[Validators.required])
  body = new FormControl(history.state.body || '')
  myForm: FormGroup = new FormGroup({
    title: this.title,
    body: this.body,
  })
  constructor(private announcmentService: AnnouncmentService,private router: Router) {
    if(history.state.title){
      this.type = 'Edit'
    }else{
      this.type = 'Save'
    }
  }

  createId(){
    let id = (Date.now() + Math.random())
    id = Math.round(id)
    return id
  }

  createDate() {
    let currentdate = new Date();
    let datetime = "Created at: " + currentdate.getDay() + "/" + currentdate.getMonth()
      + "/" + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return datetime
  }

  ngOnInit(): void {
  }

  save() {
    let items = this.announcmentService.getItemsFromLocale()
    if (this.type === 'Save') {
      this.myForm.value.id = this.createId()
      this.myForm.value.date = this.createDate()
      items.push(this.myForm.value)
      this.announcmentService.saveStorage(items)
      this.router.navigate([''])
    } else {
      this.myForm.value.id = history.state.id
      this.myForm.value.date = this.createDate()
      this.announcmentService.edit(this.myForm.value)
      this.router.navigate([''])
    }
  }
}
