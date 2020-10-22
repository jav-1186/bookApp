import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';
//import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { GoalsComponent } from './goals/goals.component';
import { LibraryComponent } from './library/library.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //FooterComponent,
    //HomeComponent,
    AccountComponent,
    GoalsComponent,
    LibraryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
