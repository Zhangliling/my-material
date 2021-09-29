import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponentComponent } from './page/navigation-component/navigation-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { NavOneComponent } from './page/navigation-component/nav-one/nav-one.component';
import { NavTwoComponent } from './page/navigation-component/nav-two/nav-two.component';
import { NavThreeComponent } from './page/navigation-component/nav-three/nav-three.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponentComponent,
    NavOneComponent,
    NavTwoComponent,
    NavThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
