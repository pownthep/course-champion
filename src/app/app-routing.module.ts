import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseChampionComponent } from './course-champion/course-champion.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  {path: '', component: CourseChampionComponent, data: {depth: 1}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
