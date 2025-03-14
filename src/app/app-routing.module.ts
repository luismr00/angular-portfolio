import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { BloggerComponent } from './pages/blogger/blogger.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { SnapComponent } from './pages/snap/snap.component';
import { MeleeComponent } from './pages/melee/melee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adidas', component: AdidasComponent },
  { path: 'blogger', component: BloggerComponent },
  { path: 'snap', component: SnapComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'melee', component: MeleeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
