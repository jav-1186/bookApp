import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { AccountComponent } from './account/account.component';
import { GoalsComponent } from './goals/goals.component';
import { LibraryComponent } from './library/library.component';
import { MainComponent } from './main/main.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SearchFormComponent } from './forms/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountComponent,
    GoalsComponent,
    LibraryComponent,
    MainComponent,
    LoginFormComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
