import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {CourseTableComponent} from './course-table/course-table.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'layout/courses/:courseId/modules', component: CourseViewerComponent},
  {path: 'layout/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
