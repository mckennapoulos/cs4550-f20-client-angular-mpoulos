import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  moduleId = '';
  courseId = '';
  lessonId = '';
  constructor(private route: ActivatedRoute,
              private service: LessonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.service.findLessonsForModuleId(this.moduleId)
        .then(actualLessons => this.lessons = actualLessons);
    });
  }

}
