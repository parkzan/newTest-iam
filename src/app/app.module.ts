import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './conponents/appheader/appheader.component';
import { AppmenuComponent } from './conponents/appmenu/appmenu.component';
import { AppfooterComponent } from './conponents/appfooter/appfooter.component';
import { PageHomeComponent } from './conponents/page-home/page-home.component';
import { PageSystemComponent } from './conponents/page-system/page-system.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    PageHomeComponent,
    PageSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
