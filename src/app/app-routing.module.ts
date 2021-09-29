import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NavTwoComponent } from './page/navigation-component/nav-two/nav-two.component';
import { NavOneComponent } from './page/navigation-component/nav-one/nav-one.component';
import { NavThreeComponent } from './page/navigation-component/nav-three/nav-three.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home/nav-one',pathMatch:'full'
  },
  {

     path:'home', component : HomeComponent,
     children:[
       {path:'nav-one', component: NavOneComponent},
       {path:'nav-two', component:NavTwoComponent},
       {path:'nav-three',component:NavThreeComponent}
     ]

}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
