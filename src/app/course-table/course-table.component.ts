import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  courses =  [];
  courseId = '';

  constructor(private activateRoute: ActivatedRoute,
              private service: CourseService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
      }
    })

    this.service.fetchAllCourses()
      .then(courses => this.courses = courses);
  }



}
