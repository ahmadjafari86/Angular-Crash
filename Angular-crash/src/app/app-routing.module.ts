import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TaskComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path : '' , component : TaskComponent},
  {path : 'about' , component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
