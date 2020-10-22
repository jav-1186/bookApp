import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './Home/home.component';
import { GoalsComponent } from './goals/goals.component';
import { LibraryComponent } from './library/library.component';
import { MainComponent } from "./main/main.component";


const routes: Routes = [
    {
      path: '', pathMatch: 'full',
      redirectTo: 'home'
    },

    {
      path: 'home',
      component: HomeComponent
    },

    {
      path: 'account',
      component: AccountComponent
    },

    {
      path: 'goals',
      component: GoalsComponent
    },

    {
      path: 'library',
      component: LibraryComponent
    },

    {
      path: 'main',
      component: MainComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
