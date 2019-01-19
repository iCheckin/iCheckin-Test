import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ConsolePageComponent } from './page/console-page/console-page.component';
import { CoursePageComponent } from './page/course-page/course-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'console',
    component: ConsolePageComponent
  },
  {
    path: 'course/:id',
    component: CoursePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
