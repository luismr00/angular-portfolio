import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { StatsComponent } from './components/stats/stats.component';
import { SubworkComponent } from './components/subwork/subwork.component';
import { SnapComponent } from './pages/snap/snap.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { MeleeComponent } from './pages/melee/melee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    IntroComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent,
    HeaderComponent,
    SkillsComponent,
    StatsComponent,
    SubworkComponent,
    SnapComponent,
    BloggerComponent,
    AdidasComponent,
    MeleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      // radius: 100,
      // outerStrokeWidth: 16,
      // innerStrokeWidth: 8,
      // outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      // animationDuration: 300,

      radius: 100,
      space: -10,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: "#43A800",
      outerStrokeGradientStopColor: "#4FC200",
      innerStrokeColor: "#53CF00",
      innerStrokeWidth: 10,
      // title: "auto",
      // subtitle: "Percent",
      titleColor: 'white',
      subtitleFontSize: '20',
      subtitleColor: 'white',
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      startFromZero: false,
      lazy: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
