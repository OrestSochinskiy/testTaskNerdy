import {destroyPlatform, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnouncmentComponent } from './components/announcment/announcment.component';
import { AnnouncmentsComponent } from './components/announcments/announcments.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnnouncmentInfoComponent } from './components/announcment-info/announcment-info.component';
import { AnnouncmentSimilarComponent } from './components/announcment-similar/announcment-similar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncmentComponent,
    AnnouncmentsComponent,
    CreateFormComponent,
    AnnouncmentInfoComponent,
    AnnouncmentSimilarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
