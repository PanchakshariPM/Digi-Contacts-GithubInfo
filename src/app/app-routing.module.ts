import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { LoginComponent } from './login/login.component';
import { GitDetailsComponent } from './git-details/git-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'create-contact',
        component: CreateContactComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'view-contact',
        component: ViewContactComponent
      },
      {
        path: 'git-user-details',
        component: GitDetailsComponent
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
