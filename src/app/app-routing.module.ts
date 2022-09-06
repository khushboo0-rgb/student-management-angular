import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SavebookComponent } from './Components/savebook/savebook.component';
import { SearchbookComponent } from './Components/searchbook/searchbook.component';


const routes: Routes = [{path:'savestudent', component: SavebookComponent},{path:'searchstudents', component: SearchbookComponent},{path:'aboutus', component: AboutusComponent},{path:'dashboard', component: DashboardComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
