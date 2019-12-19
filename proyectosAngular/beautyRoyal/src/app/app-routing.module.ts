import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { SlideComponent } from './components/slide/slide.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent}, 
  {path: 'tabla', component: TablaComponent},
  {path: 'slide', component: SlideComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
