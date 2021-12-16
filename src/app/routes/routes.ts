import {Routes} from "@angular/router";
import {CreateFormComponent} from "../components/create-form/create-form.component";
import {AnnouncmentsComponent} from "../components/announcments/announcments.component";
import {AnnouncmentInfoComponent} from "../components/announcment-info/announcment-info.component";

export let routes: Routes = [
  {path: '', redirectTo: 'announcment',pathMatch:'full'},
  {path: 'announcment', component: AnnouncmentsComponent},
  {path: 'announcment/:id', component: AnnouncmentInfoComponent},
  {path: 'create', component: CreateFormComponent}
]
