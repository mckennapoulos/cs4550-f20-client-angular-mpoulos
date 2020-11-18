import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courses = []
  courseId = ''
  courseTitle = ''

  constructor(private activateRoute: ActivatedRoute,
              private service: CourseService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      if (typeof params.courseId) {
        this.courseId = params.courseId;
        this.service.findCourseById(this.courseId)
          .then(actualCourse => this.courseTitle = actualCourse.title);
      }
    })

    this.service.fetchAllCourses()
      .then(courses => this.courses = courses);
  }

}
